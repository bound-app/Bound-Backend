import { Injectable } from '@nestjs/common';
import { CreateBoundDto } from './dto/create-bound.dto';
import { UpdateBoundDto } from './dto/update-bound.dto';

@Injectable()
export class BoundService {
  create(createBoundDto: CreateBoundDto) {
    return 'This action adds a new bound';
  }

  findAll() {
    return `This action returns all bound`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bound`;
  }

  update(id: number, updateBoundDto: UpdateBoundDto) {
    return `This action updates a #${id} bound`;
  }

  remove(id: number) {
    return `This action removes a #${id} bound`;
  }
}
