import { ApiProperty } from '@nestjs/swagger';

export class WithdrawalDto {
  @ApiProperty({
    example: 0,
  })
  cardId: string;

  @ApiProperty({
    example: 2000,
  })
  amount: number;
}
