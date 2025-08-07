import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class EntryResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Entry created successfully' })
  message: string;

  @ApiPropertyOptional()
  details?: any;
}
