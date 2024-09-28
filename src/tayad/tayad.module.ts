import { Module } from '@nestjs/common';
import { YoutubeService } from './tayad.service';
import { YoutubeApiController } from './tayad.controller';
//import { SocialDownloader } from 'src/helpers';
@Module({
  controllers: [YoutubeApiController],
  providers: [YoutubeService],
})
export class TayadModule {}
