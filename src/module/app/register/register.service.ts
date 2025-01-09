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
        let year = registerDto.year;

        if('leo joans' != name){
          result = {
            status: false,
            message: 'Given username is wrong.',
            data: null,
          };
        }
        
        else if(age < 18){
          result = {
            status:false,
            message:"given age is under 18",
            data: null,
          };
        }

        else if(year > 2010) {
          result = {
            status: false,
            message:'given year is not before 2010',
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