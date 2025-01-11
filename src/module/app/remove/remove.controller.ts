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
import { RemoveService } from './remove.service';
import { RemoveDto } from '../dto/remove.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('Remove Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('remove')
  export class RemoveController {
    constructor(private readonly new_userService: RemoveService) {}
  
    @Delete('/remove')
    async adminLogin(@Body() removeDto: RemoveDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(removeDto);
    }
  }