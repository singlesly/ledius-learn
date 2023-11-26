import { ApiProperty } from '@nestjs/swagger';

export class TransferDto {
  @ApiProperty({
    example: 0,
  })
  fromIndex: number;

  @ApiProperty({
    example: 1,
  })
  toIndex: number;

  @ApiProperty({
    example: 100,
  })
  amount: number;
}
