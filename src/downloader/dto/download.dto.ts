import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class DownloadDto {
  @ApiProperty({
    description: 'URL of the video to download',
    example: 'https://www.youtube.com/watch?v=example',
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
