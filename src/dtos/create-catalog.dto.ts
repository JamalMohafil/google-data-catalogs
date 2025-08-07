import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateCatalogDto {
  @ApiProperty({
    description: 'Unique catalog identifier',
    example: 'my_catalog',
    pattern: '^[a-z][a-z0-9_]*$',
    minLength: 1,
    maxLength: 64,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(64)
  @Matches(/^[a-z][a-z0-9_]*$/, {
    message:
      'Catalog ID must start with lowercase letter and contain only lowercase letters, numbers, and underscores',
  })
  catalogId: string;

  @ApiPropertyOptional({
    description: 'Human-readable catalog name',
    example: 'My Product Catalog',
  })
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiPropertyOptional({
    description: 'Catalog description',
    example: 'A catalog containing product information',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
