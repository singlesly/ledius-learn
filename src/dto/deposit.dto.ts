import { ApiProperty } from "@nestjs/swagger";

export class DepositDto {

  @ApiProperty({
    example: 0
  })
  cardIndex: number;

  @ApiProperty({
    example: 2000
  })
  amount: number;
}
