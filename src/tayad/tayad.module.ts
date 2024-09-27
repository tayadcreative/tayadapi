import { Module } from '@nestjs/common';
import { TayadService } from './tayad.service';
import { TayadController } from './tayad.controller';

@Module({
  controllers: [TayadController],
  providers: [TayadService],
})
export class TayadModule {}
