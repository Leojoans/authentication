/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
   
  ) {}


  async adminLogin(loginDto: LoginDto): Promise<any> {
    try {
      let result;
        console.log(loginDto.email)
        let email =loginDto.email;
        let password = loginDto.password;
        let mobileNo = loginDto.mobileNo;

        if("leo@email.com" != email){
          result = {
            status: false,
            message: 'Given email is wrong.',
            data: null,
          };
        }
        
        else if("leo88169916" != password){
          result = {
            status:false,
            message:"given password is wrong",
            data: null,
          };
        }

        else if(mobileNo.toString().length != 10) {
          result = {
            status: false,
            message:'given mobile number is not equeal to 10',
            data:null,
          }
        } 
        else {
          result = {
            status: true,
            message: 'Login success',
            data: null,
          };
        }
     
      

      return result;
      // return user.length > 0 ? true : false;
    } catch (err) {
      throw err;
    }
  }

  }

 
