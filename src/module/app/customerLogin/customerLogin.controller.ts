import {
  Body,
  Controller,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CustomerLoginService } from './customerLogin.service';
import { CustomerLoginDto } from '../dto/customerLogin.dto';
import ResponseInterface from 'src/common/interface/response.interface';

@ApiTags('Admin Controller')
@ApiBearerAuth('JWT-auth')
@Controller('admin')
export class CustomerLoginController {
  constructor(private readonly customerLoginService: CustomerLoginService) {}

  @Put('/customerLogin')
  async customerLogin(@Body() customerLoginDto: CustomerLoginDto): Promise<ResponseInterface> {
    return await this.customerLoginService.customerLogin(customerLoginDto);
  }

  @Post('/customerLoginRegistration')
  async insertMobileNumber(@Body() customerLoginDto: CustomerLoginDto): Promise<ResponseInterface> {
    return await this.customerLoginService.insertMobileNo(customerLoginDto);
  }
}


