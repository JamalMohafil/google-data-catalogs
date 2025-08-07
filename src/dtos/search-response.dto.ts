import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class SearchResponseDto {
  @ApiProperty({ type: [Object] })
  results: any[];

  @ApiPropertyOptional({ example: 'next_page_token' })
  nextPageToken?: string;

  @ApiProperty({ example: 10 })
  totalCount: number;

  @ApiProperty({ example: false })
  hasMore: boolean;

  @ApiProperty({ example: 'product shoes' })
  query: string;
}
