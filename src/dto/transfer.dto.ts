import { ApiProperty } from '@nestjs/swagger';

export class TransferDto {
  @ApiProperty({
    example: 0,
  })
  fromCardId: string;

  @ApiProperty({
    example: 1,
  })
  toCardId: string;

  @ApiProperty({
    example: 100,
  })
  amount: number;
}
