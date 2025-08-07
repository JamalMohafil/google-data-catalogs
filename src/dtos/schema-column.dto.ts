import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SchemaColumnDto {
  @ApiProperty({
    description: 'Column name',
    example: 'product_id',
  })
  @IsString()
  @IsNotEmpty()
  column: string;

  @ApiProperty({
    description: 'Column data type',
    example: 'STRING',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Column description',
    example: 'Unique identifier for the product',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
