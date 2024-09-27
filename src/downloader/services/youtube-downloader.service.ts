import { Injectable } from '@nestjs/common';
import * as ytdl from 'ytdl-core';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Injectable()
export class YouTubeDownloaderService {
  async downloadYouTubeVideo(url: string) {
    const info = await ytdl.getInfo(url);
    const videoTitle = info.videoDetails.title;
    const filePath = join(__dirname, '../../downloads', `${videoTitle}.mp4`);

    ytdl(url).pipe(createWriteStream(filePath));

    return filePath;
  }
}
