import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { SchemaColumnDto } from "./schema-column.dto";

export class SchemaDto {
  @ApiProperty({
    description: 'Array of schema columns',
    type: [SchemaColumnDto],
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one column is required' })
  @ArrayMaxSize(10000, { message: 'Maximum 10,000 columns allowed' })
  @ValidateNested({ each: true })
  @Type(() => SchemaColumnDto)
  columns: SchemaColumnDto[];
}
