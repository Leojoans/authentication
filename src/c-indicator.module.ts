/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './module/app/login/login.controller';
import { LoginService } from './module/app/login/login.service';
import {RegisterController} from './module/app/register/register.controller';
import { RegisterService } from './module/app/register/register.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        //Entity
      ],
    ),
  ],
  controllers: [
    // controller
LoginController,
RegisterController  
  ],
  providers: [
    //service
LoginService,
RegisterService
  ],
})
export class CIndicator {}
