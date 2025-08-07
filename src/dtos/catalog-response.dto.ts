import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CatalogResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'my_catalog' })
  catalogId: string;

  @ApiProperty({ example: 'Catalog created successfully' })
  message: string;

  @ApiPropertyOptional()
  details?: any;
}
