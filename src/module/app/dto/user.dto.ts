import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
  
    @IsNotEmpty()
    @ApiProperty()
    age: number;
  
    @IsNotEmpty()
    @ApiProperty()
    dob:number;
}