import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class RemoveDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  
  @IsNotEmpty()
  @ApiProperty()
  id : number;
}