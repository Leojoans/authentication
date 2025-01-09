
import { Module } from '@nestjs/common';
import { CIndicator } from './c-indicator.module';

@Module({
  imports: [   
    CIndicator,
  ],
})
export class AppModule {}
