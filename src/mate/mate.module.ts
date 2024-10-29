import { Module } from '@nestjs/common';
import { MateService } from './mate.service';
import { MateController } from './mate.controller';

@Module({
  controllers: [MateController],
  providers: [MateService],
})
export class MateModule {}
