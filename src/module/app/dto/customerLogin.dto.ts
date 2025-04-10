import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length,} from 'class-validator';

export class CustomerLoginDto {
  @IsNotEmpty()
  @Length(10, 10, { message: "Mobile number must be exactly 10 digits" })
  @ApiProperty()
  mobileNo: string;

  @IsNotEmpty()
  @ApiProperty()
  login_type: string;
}