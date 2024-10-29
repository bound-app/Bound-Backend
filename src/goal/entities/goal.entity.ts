import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goal')
export class Goal {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column()
  title: string;

  @Column()
  targetDate: Date;

  @Column()
  percentage: number;
}
