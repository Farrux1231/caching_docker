import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Kategoriya nomi',
    example: 'Electronics', 
  })
  name: string;
}
