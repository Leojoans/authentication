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
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
  // @UseGuards(JwtAuthGuard)
  @ApiTags('User Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('user')
  export class UserController {
    constructor(private readonly new_userService: UserService) {}
  
    @Post('/user')
    async adminLogin(@Body() userDto: UserDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(userDto);
    }
  }