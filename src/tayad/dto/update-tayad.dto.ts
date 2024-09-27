import { PartialType } from '@nestjs/swagger';
import { CreateTayadDto } from './create-tayad.dto';

export class UpdateTayadDto extends PartialType(CreateTayadDto) {}
