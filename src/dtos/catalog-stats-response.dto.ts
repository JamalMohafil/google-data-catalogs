import { ApiProperty } from "@nestjs/swagger";

export class CatalogStatsResponseDto {
  @ApiProperty({ example: 'my_catalog' })
  catalogId: string;

  @ApiProperty({ example: 150 })
  totalEntries: number;

  @ApiProperty({ example: false })
  hasMoreEntries: boolean;

  @ApiProperty({ example: '2024-01-15T10:30:00.000Z' })
  lastUpdated: string;

  @ApiProperty({ example: 'wise-program-468308-r6' })
  projectId: string;

  @ApiProperty({ example: 'us' })
  location: string;
}
