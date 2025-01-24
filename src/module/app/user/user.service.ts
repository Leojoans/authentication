/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../dto/user.dto';
let initaialData = [
  {
    "username": "leo joans",
    "age": 20
  }
]

@Injectable()
export class UserService {
  constructor(

  ) { }


  async adminLogin(userDto: UserDto): Promise<any> {
    try {

      console.log(userDto.name)
      let name = userDto.name;
      let age = userDto.age;


      initaialData.push(
        {
          username: userDto.name,
          age: userDto.age
        }
      )





      return initaialData;
      // return user.length > 0 ? true : false;
    } catch (err) {
      throw err;
    }
  }

}