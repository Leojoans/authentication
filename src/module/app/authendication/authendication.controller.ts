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
import { AuthendicationService } from './authendication.service';
import { AuthendicationDto } from '../dto/authendication.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('Authendication Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('authendication')
  export class AuthendicationController {
    constructor(private readonly new_userService: AuthendicationService) {}
  
    @Post('/userauthendication')
    async adminLogin(@Body() authendicationDto: AuthendicationDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(authendicationDto);
    }
  }