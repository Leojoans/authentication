import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BlueLineService } from './blueLine.service';

@ApiTags('BlueLine Controller')
@ApiBearerAuth('JWT-auth')
@Controller('blueLine')
export class BlueLineController {
    constructor(private readonly blueLineService: BlueLineService) {}

    @Get('/route')
    async getRoute(
        @Query('startStation') startStation: string,
        @Query('endStation') endStation: string
    ): Promise<any> {
        return await this.blueLineService.adminLogin(startStation, endStation);
    }
}
