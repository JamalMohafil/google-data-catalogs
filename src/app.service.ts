import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { DataCatalogClient } from '@google-cloud/datacatalog';
import { GoogleAuth } from 'google-auth-library';
import { CreateCatalogDto } from './dtos/create-catalog.dto';
import { CreateEntryDto } from './dtos/create-entry.dto';
import {
  PaginationDto,
  SearchCatalogDto,
} from './dtos/pagination-and-search.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private dataCatalog: DataCatalogClient;
  private readonly PROJECT_ID = 'wise-program-468308-r6';
  private readonly LOCATION = 'us';
  private readonly dataset = 'dsjfgm_asdk';
  private readonly table = 'ejfdvmfgkmodl_copy';

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth(): Promise<void> {
    try {
      const auth = new GoogleAuth({
        keyFile: './src/secret.json',
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      });

      this.dataCatalog = new DataCatalogClient({
        version: 'v1',
        auth,
      });

      this.logger.log('Google Auth initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize Google Auth:', error);
      throw new InternalServerErrorException(
        'Authentication initialization failed',
      );
    }
  }

  private async checkCatalogExists(catalogId: string): Promise<boolean> {
    try {
      await this.dataCatalog.getEntryGroup({
        name: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}`,
      });
      return true;
    } catch (error) {
      if ([404, 5, 7].includes(error.code)) {
        return false;
      }
      this.logger.error('Error checking catalog existence:', error);
      throw new InternalServerErrorException(
        `Failed to check catalog existence: ${error.message}`,
      );
    }
  }

  private async checkEntryExists(
    catalogId: string,
    entryId: string,
  ): Promise<boolean> {
    try {
      await this.dataCatalog.getEntry({
        name: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}/entries/${entryId}`,
      });
      return true;
    } catch (error) {
      if ([404, 5, 7].includes(error.code)) {
        return false;
      }
      this.logger.error('Error checking entry existence:', error);
      throw new InternalServerErrorException(
        `Failed to check entry existence: ${error.message}`,
      );
    }
  }

  private validateCatalogId(catalogId: string): void {
    if (!catalogId || catalogId.length < 1 || catalogId.length > 64) {
      throw new BadRequestException(
        'Catalog ID must be between 1 and 64 characters',
      );
    }

    if (!/^[a-z][a-z0-9_]*$/.test(catalogId)) {
      throw new BadRequestException(
        'Catalog ID must start with lowercase letter and contain only lowercase letters, numbers, and underscores',
      );
    }
  }

  private validateEntryId(entryId: string): void {
    if (!entryId || entryId.length > 64) {
      throw new BadRequestException(
        'Entry ID is required and must not exceed 64 characters',
      );
    }

    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(entryId)) {
      throw new BadRequestException(
        'Entry ID must start with a letter and contain only letters, numbers, and underscores',
      );
    }
  }

  async createCatalog(createCatalogDto: CreateCatalogDto): Promise<any> {
    try {
      const { catalogId, displayName, description } = createCatalogDto;

      this.validateCatalogId(catalogId);

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (catalogExists) {
        throw new BadRequestException(`Catalog '${catalogId}' already exists`);
      }

      const entryGroup = await this.dataCatalog.createEntryGroup({
        parent: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}`,
        entryGroupId: catalogId,
        entryGroup: {
          displayName: displayName || `Catalog ${catalogId}`,
          description: description || `Data catalog for ${catalogId}`,
        },
      });

      this.logger.log(`Catalog '${catalogId}' created successfully`);

      return {
        success: true,
        catalogId,
        message: `Catalog '${catalogId}' created successfully`,
        details: entryGroup[0],
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      this.handleDataCatalogError(error, 'create catalog');
    }
  }

  async getCatalog(catalogId: string): Promise<any> {
    try {
      if (!catalogId) {
        throw new BadRequestException('Catalog ID is required');
      }

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (!catalogExists) {
        throw new NotFoundException(`Catalog '${catalogId}' does not exist`);
      }

      const catalog = await this.dataCatalog.getEntryGroup({
        name: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}`,
      });

      return {
        exists: true,
        catalogId,
        details: catalog[0],
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      this.logger.error('Error getting catalog:', error);
      throw new InternalServerErrorException(
        `Failed to get catalog: ${error.message}`,
      );
    }
  }

  async createEntry(createEntryDto: CreateEntryDto): Promise<any> {
    try {
      const { catalogId, entryId, entry } = createEntryDto;

      // Validate required fields
      if (!catalogId || !entryId || !entry?.displayName) {
        throw new BadRequestException(
          'Missing required fields: catalogId, entryId, or displayName',
        );
      }

      this.validateEntryId(entryId);

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (!catalogExists) {
        throw new NotFoundException(`Catalog '${catalogId}' does not exist`);
      }

      const entryExists = await this.checkEntryExists(catalogId, entryId);
      if (entryExists) {
        throw new BadRequestException(
          `Entry '${entryId}' already exists in catalog '${catalogId}'`,
        );
      }

      if (!entry.schema?.columns || entry.schema.columns.length === 0) {
        throw new BadRequestException(
          'Schema with at least one column is required',
        );
      }

      if (entry.schema.columns.length > 10000) {
        throw new BadRequestException(
          'Schema cannot have more than 10,000 columns',
        );
      }

      const createdEntry = await this.dataCatalog.createEntry({
        parent: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}`,
        entryId: entryId,
        entry: {
          displayName: entry.displayName,
          description: entry.description || '',
          type: 'TABLE',
          linkedResource: `//bigquery.googleapis.com/projects/wise-program-468308-r6/datasets/${this.dataset}/tables/${this.table}`,
          bigqueryTableSpec: {
            tableSourceType: 'BIGQUERY_TABLE',
          },
          databaseTableSpec: {
            databaseViewSpec: {
              baseTable: 'ejfdvmfgkmodl',
              viewType: 'STANDARD_VIEW',
            },
            type: 'TABLE_TYPE_UNSPECIFIED',
          },

          schema: entry.schema,
        },
      });

      this.logger.log(
        `Entry '${entryId}' created successfully in catalog '${catalogId}'`,
      );

      return {
        success: true,
        message: `Entry '${entryId}' created successfully in catalog '${catalogId}'`,
        details: createdEntry[0],
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      this.handleDataCatalogError(error, 'create entry');
    }
  }

  async getEntriesFromCatalog(
    catalogId: string,
    paginationDto: PaginationDto = {},
  ): Promise<any> {
    try {
      if (!catalogId) {
        throw new BadRequestException('Catalog ID is required');
      }

      const { limit = 100, pageToken } = paginationDto;

      if (limit < 1 || limit > 1000) {
        throw new BadRequestException('Limit must be between 1 and 1000');
      }

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (!catalogExists) {
        throw new NotFoundException(`Catalog '${catalogId}' does not exist`);
      }

      const response = await this.dataCatalog.listEntries(
        {
          parent: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}`,
          pageSize: limit,
          pageToken: pageToken,
        },
        {
          autoPaginate: false,
        },
      );

      return {
        entries: response[0] || [],
        nextPageToken: response[1]?.pageToken,
        totalCount: response[0]?.length || 0,
        catalogId,
        hasMore: !!response[1]?.pageToken,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      this.handleDataCatalogError(error, 'get entries from catalog');
    }
  }

  async searchInCatalog(searchDto: SearchCatalogDto = {}): Promise<any> {
    try {
      const { query = '', limit = 100, pageToken } = searchDto;

      if (limit < 1 || limit > 1000) {
        throw new BadRequestException('Limit must be between 1 and 1000');
      }

      const response = await this.dataCatalog.searchCatalog(
        {
          scope: {
            includeProjectIds: [this.PROJECT_ID],
            includePublicTagTemplates: false,
          },
          query,
          pageSize: limit,
          pageToken,
        },
        {
          autoPaginate: false,
        },
      );
      console.log(response);
      return {
        results: response[0] || [],
        nextPageToken: response[1]?.pageToken,
        totalCount: response[0]?.length || 0,
        hasMore: !!response[1]?.pageToken,
        query,
      };
    } catch (error) {
      this.handleDataCatalogError(error, 'search catalog');
    }
  }

  async deleteEntry(catalogId: string, entryId: string): Promise<any> {
    try {
      if (!catalogId || !entryId) {
        throw new BadRequestException('Catalog ID and Entry ID are required');
      }

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (!catalogExists) {
        throw new NotFoundException(`Catalog '${catalogId}' does not exist`);
      }

      const entryExists = await this.checkEntryExists(catalogId, entryId);
      if (!entryExists) {
        throw new NotFoundException(
          `Entry '${entryId}' does not exist in catalog '${catalogId}'`,
        );
      }

      await this.dataCatalog.deleteEntry({
        name: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}/entryGroups/${catalogId}/entries/${entryId}`,
      });

      this.logger.log(
        `Entry '${entryId}' deleted successfully from catalog '${catalogId}'`,
      );

      return {
        success: true,
        message: `Entry '${entryId}' deleted successfully from catalog '${catalogId}'`,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      this.handleDataCatalogError(error, 'delete entry');
    }
  }

  async getCatalogStats(catalogId: string): Promise<any> {
    try {
      if (!catalogId) {
        throw new BadRequestException('Catalog ID is required');
      }

      const catalogExists = await this.checkCatalogExists(catalogId);
      if (!catalogExists) {
        throw new NotFoundException(`Catalog '${catalogId}' does not exist`);
      }

      const entries = await this.getEntriesFromCatalog(catalogId, {
        limit: 1000,
      });

      return {
        catalogId,
        totalEntries: entries.totalCount,
        hasMoreEntries: entries.hasMore,
        lastUpdated: new Date().toISOString(),
        projectId: this.PROJECT_ID,
        location: this.LOCATION,
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      this.logger.error('Error getting catalog stats:', error);
      throw new InternalServerErrorException(
        `Failed to get catalog statistics: ${error.message}`,
      );
    }
  }

  async listCatalogs(paginationDto: PaginationDto = {}): Promise<any> {
    try {
      const { limit = 100, pageToken } = paginationDto;

      if (limit < 1 || limit > 1000) {
        throw new BadRequestException('Limit must be between 1 and 1000');
      }
      console.log('Requested pageSize:', limit); // Debug log

      const response = await this.dataCatalog.listEntryGroups(
        {
          parent: `projects/${this.PROJECT_ID}/locations/${this.LOCATION}`,
          pageSize: limit,
          pageToken,
        },
        {
          autoPaginate: false,
        },
      );

      return {
        catalogs: response[0] || [],
        nextPageToken: response[1]?.pageToken,
        totalCount: response[0]?.length || 0,
        hasMore: !!response[1]?.pageToken,
      };
    } catch (error) {
      this.handleDataCatalogError(error, 'list catalogs');
    }
  }

  private handleDataCatalogError(error: any, operation: string): never {
    this.logger.error(`Error during ${operation}:`, error);

    switch (error.code) {
      case 6:
        throw new BadRequestException('Resource already exists');
      case 7:
        throw new BadRequestException(
          'Permission denied. Check your Google Cloud permissions',
        );
      case 8:
        throw new BadRequestException('Quota exceeded. Resource limit reached');
      case 3:
        throw new BadRequestException(`Invalid request data: ${error.message}`);
      case 5:
        throw new NotFoundException('Resource not found');
      default:
        throw new InternalServerErrorException(
          `Failed to ${operation}: ${error.message}`,
        );
    }
  }
}
