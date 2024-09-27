import { Controller, Post, Body } from '@nestjs/common';
import { DownloaderService } from './downloader.service';
import { DownloadDto } from './dto/download.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Downloader')
@Controller('downloader')
export class DownloaderController {
  constructor(private readonly downloaderService: DownloaderService) {}

  @Post('download')
  @ApiOperation({ summary: 'Download video from supported platforms' })
  @ApiResponse({ status: 200, description: 'Video successfully downloaded' })
  @ApiResponse({ status: 400, description: 'Invalid URL format' })
  async downloadVideo(@Body() downloadDto: DownloadDto) {
    return this.downloaderService.downloadVideo(downloadDto);
  }
}
