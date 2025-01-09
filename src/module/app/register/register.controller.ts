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
import { RegisterService } from './register.service';
import { RegisterDto } from '../dto/register.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('Register Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('register')
  export class RegisterController {
    constructor(private readonly new_userService: RegisterService) {}
  
    @Post('/userregister')
    async adminLogin(@Body() registerDto: RegisterDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(registerDto);
    }
  }