import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LocalTrainService } from './localTrains.service';
import { LocalTrainsDto } from '../dto/localTrains.dto';

@ApiTags('LocalTrain Controller')
@ApiBearerAuth('JWT-auth')
@Controller('local-trains')
export class LocalTrainController {
  constructor(private readonly localTrainService: LocalTrainService) {}

  @Post('schedule') 
  async getTrainSchedule(@Body() localTrainsDto: LocalTrainsDto): Promise<any> {
    return await this.localTrainService.localTrainDetails(localTrainsDto);
  }

  @Get('fare')
  async getFare(
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<any> {
    return await this.localTrainService.getFare(from, to);
  }
}




