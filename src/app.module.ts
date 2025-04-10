import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormOrmConfig } from './config/typeorm.config';
import { CIndicator } from './module/app/c-indicator.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('login')), 
    CIndicator, 
  ],
})
export class AppModule {}