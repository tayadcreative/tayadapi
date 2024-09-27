import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class InstagramDownloaderService {
  async downloadPost(url: string) {
    return new Promise((resolve, reject) => {
      exec(
        `instagram-scraper ${url} -d ./downloads`,
        (error, stdout, stderr) => {
          if (error) {
            reject(`Error: ${stderr}`);
          }
          resolve(stdout);
        },
      );
    });
  }
}
