/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RemoveDto } from '../dto/remove.dto';
import { findIndex } from 'rxjs';

let data = [
  {
  'name': "ram",
  "id": 1
  },
  {
    'name': 'sri',
    'id': 2
  }
]

@Injectable()
export class RemoveService {
  constructor(
   
  ) {}


  async adminLogin(removeDto: RemoveDto): Promise<any> {
    try {
      let result;
      console.log(removeDto.name)
        let name =removeDto.name;
        let id = removeDto.id;
        
        const findUser = data.findIndex(data => data.name == 'sri');
       
        console.log(findUser)
        if(findUser){
          data.splice(findUser);
        }
         

      return data;
      // return user.length > 0 ? true : false;
    } catch (err) {
      throw err;
    }
  }

  }