import { PartialType } from '@nestjs/swagger';
import { CreateDownloaderDto } from './create-downloader.dto';

export class UpdateDownloaderDto extends PartialType(CreateDownloaderDto) {}
