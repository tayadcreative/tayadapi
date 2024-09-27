import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLoggerService } from 'src/config/logger/logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CustomLoggerService],
})
export class AppModule {}
