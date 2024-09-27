import { Injectable } from '@nestjs/common';
import { CreateTayadDto } from './dto/create-tayad.dto';
import { UpdateTayadDto } from './dto/update-tayad.dto';

@Injectable()
export class TayadService {
  create(createTayadDto: CreateTayadDto) {
    return 'This action adds a new tayad';
  }

  findAll() {
    return `This action returns all tayad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tayad`;
  }

  update(id: number, updateTayadDto: UpdateTayadDto) {
    return `This action updates a #${id} tayad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tayad`;
  }
}
