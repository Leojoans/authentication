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
import { LoginService } from './login.service';
import { LoginDto } from '../dto/login.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('Login Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('login')
  export class LoginController {
    constructor(private readonly new_userService: LoginService) {}
  
    @Post('/userlogin')
    async adminLogin(@Body() loginDto: LoginDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(loginDto);
    }
  }

  