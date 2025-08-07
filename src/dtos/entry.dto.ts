import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { SchemaDto } from "./schema.dto";
import { Type } from "class-transformer";

export class EntryDto {
  @ApiProperty({
    description: 'Human-readable entry name',
    example: 'Products Table',
  })
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @ApiPropertyOptional({
    description: 'Entry description',
    example: 'Table containing all product information',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Entry schema definition',
    type: SchemaDto,
  })
  @ValidateNested()
  @Type(() => SchemaDto)
  schema: SchemaDto;
}
