/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from '../dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(
   
  ) {}


  async adminLogin(adminDto: AdminDto): Promise<any> {
    try {
      let result;
        console.log(adminDto.name)
        let name =adminDto.name;
        let age = adminDto.age;
        let year = adminDto.dob;

        const validUser = {
          userName: "Leo joans",
          minimumAge: 18,
          maximumBirthYear: 2006 
        };

        if(name != validUser.userName){
          result = {
            status: false,
            message: 'The provided username is incorrect. Please enter the correct username.',
            data: null,
          };
        }
        
        else if(age < validUser.minimumAge){
          result = {
            status:false,
            message:"The given age is below 18. The minimum required age is 18.",
            data: null,
          };
        }

        else if(year > validUser.maximumBirthYear) {
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