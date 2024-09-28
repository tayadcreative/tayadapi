import { Injectable } from '@nestjs/common';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';

// Promisifying execFile for async/await usage
const exec = promisify(execFile);

interface VideoDownloadObject {
  url: string;
  format: string;
  type: 'audios' | 'videos';
  uuid: string;
  title: string;
}

@Injectable()
export class YoutubeService {
  private ytDlpPath = join(__dirname, '..', '..', 'yt-dlp_linux');
  private ffmpegPath = join(__dirname, '..', '..', 'ffmpeg.exe');

  async getVideo(videoId: string) {
    const videoUrl = `${videoId}`;
    return this.runYtDlp(['--dump-json', '--no-playlist', videoUrl]);
  }

  async getPlaylist(playlistId: string) {
    const playlistUrl = `${playlistId}`;
    return this.runYtDlp([
      '--ignore-errors',
      '--dump-single-json',
      '--clean-info-json',
      '--no-write-comments',
      playlistUrl,
    ]);
  }

  async downloadVideo(videoData: VideoDownloadObject) {
    const tempPath = join(
      __dirname,
      '..',
      'public',
      'temp',
      videoData.uuid,
      videoData.type,
      `${videoData.title}.%(ext)s`,
    );

    const args =
      videoData.type === 'videos'
        ? [
            '--no-playlist',
            '--ffmpeg-location',
            this.ffmpegPath,
            '-o',
            tempPath,
            '--remux-video',
            videoData.format,
            videoData.url,
          ]
        : [
            '--no-playlist',
            '-x',
            '--audio-format',
            videoData.format,
            '--ffmpeg-location',
            this.ffmpegPath,
            '-o',
            tempPath,
            videoData.url,
          ];

    await exec(this.ytDlpPath, args, { timeout: 0 });
    return { success: true };
  }

  private async runYtDlp(args: string[]) {
    const { stdout, stderr } = await exec(this.ytDlpPath, args);

    if (stderr) {
      throw new Error(stderr);
    }

    return JSON.parse(stdout);
  }
}
