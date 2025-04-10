/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { RemoveController } from './remove/remove.controller';
import { RemoveService } from './remove/remove.service';
import { FareController } from './fare/fare.controller';
import { FareService } from './fare/fare.service';
import { AuthendicationController } from './authendication/authendication.controller';
import { AuthendicationService } from './authendication/authendication.service';
import { BlueLineService } from './blueLine/blueLine.service';
import { BlueLineController  } from './blueLine/blueLine.controller';
import { CustomerLoginController } from './customerLogin/customerLogin.controller';
import { CustomerLoginService } from './customerLogin/customerLogin.service';
import { CustomerLogin } from './entities/customer_login.entity';
import { LocalTrainController } from './localTrains/localTrains.controller';
import { LocalTrainService } from './localTrains/localTrains.service';
import { typeormOrmConfig } from '../../config/typeorm.config';

@Module({
    imports: [TypeOrmModule.forFeature([CustomerLogin])],
  controllers: [
LoginController,
RegisterController,
UserController,
AdminController,
RemoveController,
FareController,
AuthendicationController,
BlueLineController,
CustomerLoginController,
LocalTrainController
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
BlueLineService,
CustomerLoginService,
LocalTrainService
  ],
exports: [TypeOrmModule],
})
export class CIndicator {}
