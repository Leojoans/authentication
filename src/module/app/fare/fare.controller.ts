import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import ResponseInterface from 'src/common/interface/response.interface';
import { PriceDto } from '../dto/price.dto';
import { FareService } from './fare.service';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('Fare Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('fare')
  export class FareController {
    constructor(private readonly fareService: FareService) {}
  
    @Get('/getFare')
    async getFare(): Promise<ResponseInterface> {
      let result =  await this.fareService.readFare();
      if(result){
        return result;
      }
      console.log('result:'+result)
      return result;
    }

    @Post('/addFare')
    async addFare( @Body() priceDto: PriceDto): Promise<ResponseInterface> {
     

      let result =  await this.fareService.addFare(priceDto);
      if(result){
        return result;
      }
      console.log('result:'+result)
      return result;
    }

    @Post('/updateFare')
    async updateFare( @Body() priceDto: PriceDto): Promise<ResponseInterface> {
     

      let result =  await this.fareService.updateFare(priceDto);
      if(result){
        return result;
      }
      console.log('result:'+result)
      return result;
    }
  
    }


  