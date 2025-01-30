/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './module/app/login/login.controller';
import { LoginService } from './module/app/login/login.service';
import { RegisterController } from './module/app/register/register.controller';
import { RegisterService } from './module/app/register/register.service';
import { UserController } from './module/app/user/user.controller';
import { UserService } from './module/app/user/user.service';
import { AdminController } from './module/app/admin/admin.controller';
import { AdminService } from './module/app/admin/admin.service';
import { RemoveController } from './module/app/remove/remove.controller';
import { RemoveService } from './module/app/remove/remove.service';
import { FareController } from './module/app/fare/fare.controller';
import { FareService } from './module/app/fare/fare.service';
import { AuthendicationController } from './module/app/authendication/authendication.controller';
import { AuthendicationService } from './module/app/authendication/authendication.service';
import { BlueLineService } from './module/app/blueLine/blueLine.service';
import { BlueLineController  } from './module/app/blueLine/blueLine.controller';



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
RegisterController,
UserController,
AdminController,
RemoveController,
FareController,
AuthendicationController,
BlueLineController

  ],
  providers: [
    //service
LoginService,
RegisterService,
UserService,
AdminService,
RemoveService,
FareService,
AuthendicationService,
BlueLineService
  ],
})
export class CIndicator {}
