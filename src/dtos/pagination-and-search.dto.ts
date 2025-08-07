import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class PaginationDto {
  @ApiPropertyOptional({
    description: 'Number of items to return',
    example: 100,
    minimum: 1,
    maximum: 1000,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(1000)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Page token for pagination',
    example: 'eyJwYWdlIjoyLCJsaW1pdCI6MTAwfQ==',
  })
  @IsOptional()
  @IsString()
  pageToken?: string;
}

export class SearchCatalogDto extends PaginationDto {
  @ApiPropertyOptional({
    description: 'Search query string',
    example: 'product name:shoes',
  })
  @IsOptional()
  @IsString()
  query?: string;
}
