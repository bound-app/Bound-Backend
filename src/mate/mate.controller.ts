import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateService } from './mate.service';
import { CreateMateDto } from './dto/create-mate.dto';
import { UpdateMateDto } from './dto/update-mate.dto';

@Controller('mate')
export class MateController {
  constructor(private readonly mateService: MateService) {}

  @Post()
  create(@Body() createMateDto: CreateMateDto) {
    return this.mateService.create(createMateDto);
  }

  @Get()
  findAll() {
    return this.mateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateDto: UpdateMateDto) {
    return this.mateService.update(+id, updateMateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mateService.remove(+id);
  }
}
