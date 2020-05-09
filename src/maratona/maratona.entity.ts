import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Maratona {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  aula: string;
}
