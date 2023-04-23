
import { IsUppercase, Length, IsEmail, IsNotEmpty, IsPositive, Min, Max } from 'class-validator';

export class BuyDto {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUppercase()
  @Length(3,3)
  symbol: string;

  @IsPositive()
  quantity: number;

  @Min(10)
  @Max(99)
  price: number
}