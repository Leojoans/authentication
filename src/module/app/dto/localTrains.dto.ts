import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class LocalTrainsDto {
    @IsNotEmpty()
    @ApiProperty()
    from: string;
  
    @IsNotEmpty()
    @ApiProperty()
    to: string;
}