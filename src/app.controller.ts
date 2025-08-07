import {
  Controller,
  Get,
  Post,
  Delete,
  Query,
  Param,
  Body,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateEntryDto } from './dtos/create-entry.dto';
import {
  PaginationDto,
  SearchCatalogDto,
} from './dtos/pagination-and-search.dto';
import { CreateCatalogDto } from './dtos/create-catalog.dto';

@ApiTags('Data Catalog')
@Controller('catalog')
@UsePipes(new ValidationPipe({ transform: true }))
export class AppController {
  constructor(private readonly dataCatalogService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Service is healthy',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
        timestamp: { type: 'string' },
        service: { type: 'string' },
      },
    },
  })
  getHealth() {
    return {
      success: true,
      message: 'Data Catalog Service is running',
      timestamp: new Date().toISOString(),
      service: 'data-catalog-api',
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new catalog' })
  @ApiBody({
    description: 'Catalog creation data',
    schema: {
      type: 'object',
      properties: {
        catalogId: {
          type: 'string',
          description: 'Unique catalog identifier',
          pattern: '^[a-z][a-z0-9_]*$',
          minLength: 1,
          maxLength: 64,
        },
        displayName: {
          type: 'string',
          description: 'Human-readable catalog name',
        },
        description: {
          type: 'string',
          description: 'Catalog description',
        },
      },
      required: ['catalogId'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Catalog created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  async createCatalog(@Body() createCatalogDto: CreateCatalogDto) {
    return await this.dataCatalogService.createCatalog(createCatalogDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all catalogs' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of catalogs to return (1-1000)',
    example: 100,
  })
  @ApiQuery({
    name: 'pageToken',
    required: false,
    type: String,
    description: 'Page token for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of catalogs retrieved successfully',
  })
  async listCatalogs(
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('pageToken') pageToken?: string,
  ) {
    const paginationDto: PaginationDto = { limit, pageToken };
    return await this.dataCatalogService.listCatalogs(paginationDto);
  }

  @Get(':catalogId')
  @ApiOperation({ summary: 'Get catalog details' })
  @ApiParam({
    name: 'catalogId',
    description: 'Catalog identifier',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Catalog details retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Catalog not found',
  })
  async getCatalog(@Param('catalogId') catalogId: string) {
    return await this.dataCatalogService.getCatalog(catalogId);
  }

  @Get(':catalogId/stats')
  @ApiOperation({ summary: 'Get catalog statistics' })
  @ApiParam({
    name: 'catalogId',
    description: 'Catalog identifier',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Catalog statistics retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Catalog not found',
  })
  async getCatalogStats(@Param('catalogId') catalogId: string) {
    return await this.dataCatalogService.getCatalogStats(catalogId);
  }

  @Post(':catalogId/entries')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new entry in a catalog' })
  @ApiParam({
    name: 'catalogId',
    description: 'Catalog identifier',
    type: String,
  })
  @ApiBody({
    description: 'Entry creation data',
    schema: {
      type: 'object',
      properties: {
        entryId: {
          type: 'string',
          description: 'Unique entry identifier',
          pattern: '^[a-zA-Z][a-zA-Z0-9_]*$',
          maxLength: 64,
        },
        entry: {
          type: 'object',
          properties: {
            displayName: {
              type: 'string',
              description: 'Human-readable entry name',
            },
            description: {
              type: 'string',
              description: 'Entry description',
            },
            schema: {
              type: 'object',
              properties: {
                columns: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      column: { type: 'string' },
                      type: { type: 'string' },
                      description: { type: 'string' },
                    },
                    required: ['column', 'type', 'description'],
                  },
                  maxItems: 10000,
                },
              },
              required: ['columns'],
            },
          },
          required: ['displayName', 'schema'],
        },
      },
      required: ['entryId', 'entry'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Entry created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 404,
    description: 'Catalog not found',
  })
  async createEntry(
    @Param('catalogId') catalogId: string,
    @Body() body: Omit<CreateEntryDto, 'catalogId'>,
  ) {
    const createEntryDto: CreateEntryDto = {
      catalogId,
      ...body,
    };
    return await this.dataCatalogService.createEntry(createEntryDto);
  }

  @Get(':catalogId/entries')
  @ApiOperation({ summary: 'Get entries from a catalog' })
  @ApiParam({
    name: 'catalogId',
    description: 'Catalog identifier',
    type: String,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of entries to return (1-1000)',
    example: 100,
  })
  @ApiQuery({
    name: 'pageToken',
    required: false,
    type: String,
    description: 'Page token for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'Entries retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Catalog not found',
  })
  async getEntriesFromCatalog(
    @Param('catalogId') catalogId: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('pageToken') pageToken?: string,
  ) {
    const paginationDto: PaginationDto = { limit, pageToken };
    return await this.dataCatalogService.getEntriesFromCatalog(
      catalogId,
      paginationDto,
    );
  }

  @Delete(':catalogId/entries/:entryId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete an entry from a catalog' })
  @ApiParam({
    name: 'catalogId',
    description: 'Catalog identifier',
    type: String,
  })
  @ApiParam({
    name: 'entryId',
    description: 'Entry identifier',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Entry deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Catalog or entry not found',
  })
  async deleteEntry(
    @Param('catalogId') catalogId: string,
    @Param('entryId') entryId: string,
  ) {
    return await this.dataCatalogService.deleteEntry(catalogId, entryId);
  }

  @Get('legacy/search-in-catalogs')
  @ApiOperation({ summary: 'Search in catalog' })
  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
    description: 'Search query',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of results to return (1-1000)',
    example: 100,
  })
  @ApiQuery({
    name: 'pageToken',
    required: false,
    type: String,
    description: 'Page token for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'Search results retrieved successfully',
  })
  async searchInCatalog(
    @Query('query') query?: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('pageToken') pageToken?: string,
  ) {
    const searchDto: SearchCatalogDto = { query, limit, pageToken };
    return await this.dataCatalogService.searchInCatalog(searchDto);
  }

  @Get('legacy/products')
  @ApiOperation({ summary: 'Legacy: Get catalog products' })
  @ApiQuery({
    name: 'catalogId',
    required: false,
    type: String,
    description: 'Catalog identifier',
    example: 'my_catalog',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of products to return',
    example: 100,
  })
  @ApiQuery({
    name: 'pageToken',
    required: false,
    type: String,
    description: 'Page token for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'Products retrieved successfully (legacy format)',
  })
  async getLegacyCatalogProducts(
    @Query('catalogId') catalogId: string = 'my_catalog',
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('pageToken') pageToken?: string,
  ) {
    try {
      const paginationDto: PaginationDto = { limit, pageToken };
      const result = await this.dataCatalogService.getEntriesFromCatalog(
        catalogId,
        paginationDto,
      );

      return {
        success: true,
        data: result,
        message: 'Catalog retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error retrieving catalog',
        error: error.message,
      };
    }
  }

  @Get('legacy/status')
  @ApiOperation({ summary: 'Legacy: Get catalog status' })
  @ApiQuery({
    name: 'catalogId',
    required: false,
    type: String,
    description: 'Catalog identifier',
    example: 'my_catalog',
  })
  @ApiResponse({
    status: 200,
    description: 'Catalog status retrieved successfully (legacy format)',
  })
  async getLegacyCatalogStatus(
    @Query('catalogId') catalogId: string = 'my_catalog',
  ) {
    try {
      const status = await this.dataCatalogService.getCatalogStats(catalogId);

      return {
        success: true,
        data: status,
        message: 'Catalog status retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error retrieving catalog status',
        error: error.message,
      };
    }
  }

  @Post('legacy/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Legacy: Create catalog' })
  @ApiBody({
    description: 'Legacy catalog creation data',
    schema: {
      type: 'object',
      properties: {
        catalogId: { type: 'string', example: 'my_catalog' },
        displayName: { type: 'string', example: 'My Product Catalog' },
        description: { type: 'string', example: 'Catalog for my products' },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Catalog created successfully (legacy format)',
  })
  async createLegacyCatalog(
    @Body()
    body: {
      catalogId?: string;
      displayName?: string;
      description?: string;
    },
  ) {
    try {
      const {
        catalogId = 'my_catalog',
        displayName = 'My Product Catalog',
        description = 'Catalog for my products',
      } = body;
      console.log(body)

      const createCatalogDto: CreateCatalogDto = {
        catalogId,
        displayName,
        description,
      };

      const result =
        await this.dataCatalogService.createCatalog(createCatalogDto);

      return {
        success: true,
        data: {
          catalogId,
          displayName,
          description,
          location: 'us',
          projectId: 'wise-program-468308-r6',
        },
        message: 'Catalog created successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error creating catalog',
        error: error.message,
      };
    }
  }

  @Post('legacy/entries/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Legacy: Create entry' })
  @ApiBody({
    description: 'Legacy entry creation data',
    schema: {
      type: 'object',
      properties: {
        catalogId: { type: 'string' },
        entryId: { type: 'string' },
        entry: {
          type: 'object',
          properties: {
            displayName: { type: 'string' },
            schema: {
              type: 'object',
              properties: {
                columns: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      column: { type: 'string' },
                      type: { type: 'string' },
                      description: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      required: ['catalogId', 'entryId', 'entry'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Entry created successfully (legacy format)',
  })
  async createLegacyEntry(
    @Body()
    body: {
      catalogId: string;
      entryId: string;
      entry: {
        displayName: string;
        schema: {
          columns: {
            column: string;
            type: string;
            description: string;
          }[];
        };
      };
    },
  ) {
    try {
      if (!body.catalogId || !body.entryId || !body.entry) {
        return {
          success: false,
          message: 'catalogId, entryId, and entry are required',
          error: 'Missing required fields',
        };
      }

      const result = await this.dataCatalogService.createEntry(body);

      return {
        success: true,
        data: result,
        message: 'Entry created successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error creating entry',
        error: error.message,
      };
    }
  }
}
