
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';

@Injectable()
export class MaratonaService {
  constructor(
    @InjectRepository(Maratona)
    private readonly maratonaRepository: Repository<Maratona>) {}

  async findAll(): Promise<Maratona[]> {
    return this.maratonaRepository.find();
  }

  async create(DTO: object): Promise<Maratona> {
    return this.maratonaRepository.save(DTO);
  }
}