import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Mate {
  @PrimaryColumn('uuid')
  leftUser: string;

  @PrimaryColumn('uuid')
  rightUser: string;
}
