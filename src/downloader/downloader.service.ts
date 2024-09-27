import { Injectable } from '@nestjs/common';
import { CreateDownloaderDto } from './dto/create-downloader.dto';
import { UpdateDownloaderDto } from './dto/update-downloader.dto';

@Injectable()
export class DownloaderService {
  create(createDownloaderDto: CreateDownloaderDto) {
    return 'This action adds a new downloader';
  }

  findAll() {
    return `This action returns all downloader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} downloader`;
  }

  update(id: number, updateDownloaderDto: UpdateDownloaderDto) {
    return `This action updates a #${id} downloader`;
  }

  remove(id: number) {
    return `This action removes a #${id} downloader`;
  }
}
