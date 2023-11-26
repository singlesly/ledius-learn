import { ApiProperty } from '@nestjs/swagger';

export class AddCardDto {
  @ApiProperty({
    example: 'Ivan Ivanov',
  })
  owner: string;

  @ApiProperty({
    example: '2200_0000_1111_2222',
  })
  number: string;

  @ApiProperty({
    example: '300',
  })
  cvv: string;
}
