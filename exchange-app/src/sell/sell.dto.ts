
import { IsUppercase, Length, IsEmail, IsNotEmpty, IsPositive} from 'class-validator';

export class SellDto {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUppercase()
  @Length(3,3)
  symbol: string;

  @IsPositive()
  quantity: number;
}