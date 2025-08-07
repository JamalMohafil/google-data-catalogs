import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Matches, MaxLength, ValidateNested } from "class-validator";
import { EntryDto } from "./entry.dto";
 
export class CreateEntryDto {
  @ApiProperty({
    description: 'Catalog identifier',
    example: 'my_catalog',
  })
  @IsString()
  @IsNotEmpty()
  catalogId: string;

  @ApiProperty({
    description: 'Unique entry identifier',
    example: 'products_table',
    pattern: '^[a-zA-Z][a-zA-Z0-9_]*$',
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  @Matches(/^[a-zA-Z][a-zA-Z0-9_]*$/, {
    message:
      'Entry ID must start with a letter and contain only letters, numbers, and underscores',
  })
  entryId: string;

  @ApiProperty({
    description: 'Entry details',
    type: EntryDto,
  })
  @ValidateNested()
  @Type(() => EntryDto)
  entry: EntryDto;
}
