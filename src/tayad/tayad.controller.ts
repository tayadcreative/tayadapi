import { Controller, Post, Param, Put, Body } from '@nestjs/common';
import { YoutubeService } from './tayad.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideoDownloadDto } from './dto/tayad.dto';

@ApiTags('YouTube API')
@Controller('/api/youtube')
export class YoutubeApiController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Post('video/:videoId')
  @ApiResponse({ status: 200, description: 'Video data retrieved' })
  async getVideo(@Param('videoId') videoId: string) {
    try {
      const videoData = await this.youtubeService.getVideo(videoId);
      return { success: true, data: videoData };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error retrieving video data' };
    }
  }

  @Post('playlist/:playlistId')
  @ApiResponse({ status: 200, description: 'Playlist data retrieved' })
  async getPlaylist(@Param('playlistId') playlistId: string) {
    try {
      const playlistData = await this.youtubeService.getPlaylist(playlistId);
      return { success: true, data: playlistData };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error retrieving playlist data' };
    }
  }

  @Put('video/download')
  @ApiResponse({ status: 200, description: 'Video downloaded successfully' })
  async downloadVideo(@Body() videoData: VideoDownloadDto) {
    try {
      const result = await this.youtubeService.downloadVideo(videoData);
      return result;
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error downloading video' };
    }
  }
}
