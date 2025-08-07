import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ErrorResponseDto {
  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Error message' })
  message: string;

  @ApiProperty({ example: 'Detailed error information' })
  error: string;

  @ApiPropertyOptional({ example: 400 })
  statusCode?: number;
}
