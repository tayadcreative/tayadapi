import { Injectable } from '@nestjs/common';
import { DownloadDto } from './dto/download.dto';
import { YouTubeDownloaderService } from './services/youtube-downloader.service';
import { InstagramDownloaderService } from './services/instagram-downloader.service';
import { TwitterDownloaderService } from './services/twitter-downloader.service';
import { FacebookDownloaderService } from './services/facebook-downloader.service';

@Injectable()
export class DownloaderService {
  constructor(
    private readonly youtubeService: YouTubeDownloaderService,
    private readonly instagramService: InstagramDownloaderService,
    private readonly twitterService: TwitterDownloaderService,
    private readonly facebookService: FacebookDownloaderService,
  ) {}

  async downloadVideo(downloadDto: DownloadDto) {
    const { url } = downloadDto;

    if (this.isYouTube(url)) {
      return this.youtubeService.downloadYouTubeVideo(url);
    } else if (this.isInstagram(url)) {
      return this.instagramService.downloadPost(url);
    } else if (this.isTwitter(url)) {
      return this.twitterService.downloadTweet(url);
    } else if (this.isFacebook(url)) {
      return this.facebookService.downloadFBVideo(url);
    } else {
      throw new Error('Unsupported URL');
    }
  }

  private isYouTube(url: string): boolean {
    return url.includes('youtube.com') || url.includes('youtu.be');
  }

  private isInstagram(url: string): boolean {
    return url.includes('instagram.com');
  }

  private isTwitter(url: string): boolean {
    return url.includes('twitter.com');
  }

  private isFacebook(url: string): boolean {
    return url.includes('facebook.com');
  }
}
