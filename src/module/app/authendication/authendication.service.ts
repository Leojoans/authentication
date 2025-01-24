import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'; // Correct import for jsonwebtoken
import { AuthendicationDto } from '../dto/authendication.dto';

@Injectable()
export class AuthendicationService {
  constructor() {}

  async adminLogin(authendicationDto: AuthendicationDto): Promise<any> {
    try {
      const email = authendicationDto.email;
      const password = authendicationDto.password;
      const mobileNo = authendicationDto.mobileNo;

      // Validate email
      if (email !== "leo@email.com") {
        return {
          status: false,
          message: 'Given email is wrong.',
          data: null,
        };
      }

      // Validate password
      if (password !== "leo88169916") {
        return {
          status: false,
          message: 'Given password is wrong.',
          data: null,
        };
      }

      // Validate mobile number length
      if (mobileNo.toString().length !== 10) {
        return {
          status: false,
          message: 'Given mobile number is not equal to 10 digits.',
          data: null,
        };
      }

      // Generate JWT token
      const payload = { mobileNo: mobileNo };
      const jwtToken = jwt.sign(payload, 'leo1234', {
        expiresIn: '1h',
      });

      return {
        status: true,
        message: 'Login successful',
        data: null,
        jwt: { token: jwtToken },
      };
    } catch (err) {
      throw new Error(`Error in adminLogin: ${err.message}`);
    }
  }
}
