import { Module } from '@nestjs/common';
import { BoundService } from './bound.service';
import { BoundController } from './bound.controller';

@Module({
  controllers: [BoundController],
  providers: [BoundService],
})
export class BoundModule {}
