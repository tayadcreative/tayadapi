import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DownloaderService } from './downloader.service';
import { CreateDownloaderDto } from './dto/create-downloader.dto';
import { UpdateDownloaderDto } from './dto/update-downloader.dto';

@Controller('downloader')
export class DownloaderController {
  constructor(private readonly downloaderService: DownloaderService) {}

  @Post()
  create(@Body() createDownloaderDto: CreateDownloaderDto) {
    return this.downloaderService.create(createDownloaderDto);
  }

  @Get()
  findAll() {
    return this.downloaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloaderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDownloaderDto: UpdateDownloaderDto) {
    return this.downloaderService.update(+id, updateDownloaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.downloaderService.remove(+id);
  }
}
