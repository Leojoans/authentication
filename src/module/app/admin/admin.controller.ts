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
import { AdminService } from './admin.service';
import { AdminDto } from '../dto/admin.dto';
import ResponseInterface from 'src/common/interface/response.interface';
  
// @UseGuards(JwtAuthGuard)
  @ApiTags('Admin Controller')
  @ApiBearerAuth('JWT-auth')
  @Controller('admin')
  export class AdminController {
    constructor(private readonly new_userService: AdminService) {}
  
    @Put('/admin')
    async adminLogin(@Body() adminDto: AdminDto): Promise<ResponseInterface> {
      return await this.new_userService.adminLogin(adminDto);
    }
  }