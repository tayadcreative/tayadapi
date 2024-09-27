import { Test, TestingModule } from '@nestjs/testing';
import { DownloaderController } from './downloader.controller';
import { DownloaderService } from './downloader.service';

describe('DownloaderController', () => {
  let controller: DownloaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownloaderController],
      providers: [DownloaderService],
    }).compile();

    controller = module.get<DownloaderController>(DownloaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
