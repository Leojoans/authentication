import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class BlueLineDto {
  @IsNotEmpty()
  @ApiProperty()
  stationName: string;

  @IsNotEmpty()
  @ApiProperty()
  ETA:string;

  @IsNotEmpty()
  @ApiProperty()
  ETD:string;
}