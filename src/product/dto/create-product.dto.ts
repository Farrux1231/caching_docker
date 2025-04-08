import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Mahsulot nomi',
    example: 'Smartphone',
  })
  name: string;

  @ApiProperty({
    description: 'Mahsulot rangi',
    example: 'Black',
  })
  color: string;

  @ApiProperty({
    description: 'Mahsulot narxi (so‘mda)',
    example: 1200000,
  })
  price: number;

  @ApiProperty({
    description: 'Kategoriya ID (Mahsulot qaysi kategoriya ostida ekanligi)',
    example: 1,
  })
  categoryId: number;
}
