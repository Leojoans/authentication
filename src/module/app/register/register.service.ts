/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class RegisterService {
  constructor(
   
  ) {}


  async adminLogin(registerDto: RegisterDto): Promise<any> {
    try {
      let result;
        console.log(registerDto.name)
        let name =registerDto.name;
        let age = registerDto.age;
        let year = registerDto.dob;

        const validUser = {
          name: "Leo joans",
          age: 18,
          year: 2006 
        };

        if(name != validUser.name){
          result = {
            status: false,
            message: 'The provided username is incorrect. Please enter the correct username.',
            data: null,
          };
        }
        
        else if(age < validUser.age){
          result = {
            status:false,
            message:"The given age is below 18. The minimum required age is 18.",
            data: null,
          };
        }

        else if(year > validUser.year) {
          result = {
            status: false,
            message:'The given year is after 2006. Please provide a year before 2006.',
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