import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VideoDownloadDto {
  @ApiProperty({
    description: 'URL of the video to download',
    example: 'https://www.youtube.com/watch?v=example_video_id',
  })
  @IsString()
  url: string;

  @ApiProperty({
    description: 'Desired format for the video (e.g. mp4, mp3)',
    example: 'mp4',
  })
  @IsString()
  format: string;

  @ApiProperty({
    description: 'Type of media: audios or videos',
    enum: ['audios', 'videos'],
    example: 'videos',
  })
  @IsEnum(['audios', 'videos'])
  type: 'audios' | 'videos';

  @ApiProperty({
    description: 'Unique identifier for the download session',
    example: 'unique-id-123',
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Title of the video being downloaded',
    example: 'Sample Video',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'ID of the selected format for downloading the video',
    example: '22',
  })
  @IsString()
  format_id: string;
}
