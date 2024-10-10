import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BdService } from './bd.service';

@Controller('disks')
export class BdController {
  constructor(private readonly bdService: BdService) {}

  @Get("/getAll")
  async getAll() {
    return JSON.stringify(this.bdService.getAll())
  }

  @Get("/get/:id")
  async getById(@Param("id", ParseIntPipe) id: number) {
    return JSON.stringify(this.bdService.getById(id))
  }

}
