import { Get, Post, Controller, Req, Request } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
    constructor(private readonly maratonaService: MaratonaService) {}

    @Get()
    findAll(): Promise<Maratona[]> {
      return this.maratonaService.findAll();
    }

    @Post()
    create(@Req() request: Request): Promise<Maratona> {
      const { aula = '' } = request.body as any;
      const DTO = { aula };
      return this.maratonaService.create(DTO);
    }
}