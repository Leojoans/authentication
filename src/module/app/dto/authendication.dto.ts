import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class AuthendicationDto {
    @IsNotEmpty()
    @ApiProperty()
    email: string;
  
    @IsNotEmpty()
    @ApiProperty()
    password: string;
  
    @IsNotEmpty()
    @ApiProperty()
    mobileNo:number;
}