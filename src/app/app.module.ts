import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLoggerService } from 'src/config/logger/logger.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { AvatarModule } from 'src/config/avatars/avatar.module';
import { TayadModule } from 'src/tayad/tayad.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AvatarModule,
    TayadModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLoggerService],
})
export class AppModule {}
