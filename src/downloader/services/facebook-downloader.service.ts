import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class FacebookDownloaderService {
  async downloadFBVideo(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const videoUrl = await page.evaluate(() => {
      const video = document.querySelector('video');
      return video ? video.src : null;
    });

    await browser.close();
    return videoUrl || 'No video found';
  }
}
