import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PriceDto {
   
    @ApiProperty()
    from: string;

    
    @ApiProperty()
    to: string;

    @ApiProperty()
    fare: string;
    @ApiProperty()
    arrival_time: string;
    @ApiProperty()
    depart_time: string;



}
