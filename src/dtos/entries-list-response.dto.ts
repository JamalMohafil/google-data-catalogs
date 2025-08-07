import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class EntriesListResponseDto {
  @ApiProperty({ type: [Object] })
  entries: any[];

  @ApiPropertyOptional({ example: 'next_page_token' })
  nextPageToken?: string;

  @ApiProperty({ example: 10 })
  totalCount: number;

  @ApiProperty({ example: 'my_catalog' })
  catalogId: string;

  @ApiProperty({ example: false })
  hasMore: boolean;
}
