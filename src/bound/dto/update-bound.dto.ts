import { PartialType } from '@nestjs/mapped-types';
import { CreateBoundDto } from './create-bound.dto';

export class UpdateBoundDto extends PartialType(CreateBoundDto) {}
