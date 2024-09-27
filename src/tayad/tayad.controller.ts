import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TayadService } from './tayad.service';
import { CreateTayadDto } from './dto/create-tayad.dto';
import { UpdateTayadDto } from './dto/update-tayad.dto';

@Controller('tayad')
export class TayadController {
  constructor(private readonly tayadService: TayadService) {}

  @Post()
  create(@Body() createTayadDto: CreateTayadDto) {
    return this.tayadService.create(createTayadDto);
  }

  @Get()
  findAll() {
    return this.tayadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tayadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTayadDto: UpdateTayadDto) {
    return this.tayadService.update(+id, updateTayadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tayadService.remove(+id);
  }
}
