import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerLogin } from '../entities/customer_login.entity';
import { CustomerLoginDto } from '../dto/customerLogin.dto';

@Injectable()
export class CustomerLoginService {
  constructor(
    @InjectRepository(CustomerLogin)
    private readonly customerLoginRepository: Repository<CustomerLogin>, 
  ) {}

  async customerLogin(customerLoginDto: CustomerLoginDto): Promise<any> {
    try {
      const { mobileNo, login_type } = customerLoginDto;

      if (!/^\d{10}$/.test(mobileNo)) {
        return {
          statusCode: 400,
          message: "Invalid mobile number. It must be exactly 10 digits.",
        };
      }

      const user = await this.customerLoginRepository.findOne({ where: { mobileNo } });

      if (!user) {
        return {
          statusCode: 404,
          message: "Mobile number not found.",
        };
      }

      if (login_type !== 'Customer') {
        return {
          statusCode: 403,
          message: "Access denied. Only customers can log in.",
        };
      }

      //Success Response
      return {
        statusCode: 200,
        message: "Login successful!",
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: "Internal Server Error: " + err.message,
      };
    }
  }

  async insertMobileNo(customerLoginDto: CustomerLoginDto): Promise<any> {
    try {
      const { mobileNo, login_type } = customerLoginDto;

      if (!/^\d{10}$/.test(mobileNo)) {
        return {
          statusCode: 400,
          message: 'Invalid mobile number. It must be exactly 10 digits.',
        };
      }

      if (login_type !== 'Customer') {
        return {
          statusCode: 400,
          message: 'Invalid login type. Only "Customer" is allowed.',
        };
      }

      const existingUser = await this.customerLoginRepository.findOne({ where: { mobileNo } });

      if (existingUser) {
        return {
          statusCode: 409,
          message: 'Mobile number already exists.',
        };
      }

      const newUser = await this.customerLoginRepository.save({ mobileNo, login_type });

      return {
        statusCode: 201,
        message: 'Mobile number added successfully!',
        data: newUser,
      };
    } catch (err) {
      throw new Error('Database Error: ' + err.message);
    }
  }
}
