import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { BdService } from './bd.service';
import { query } from 'express';

@Controller('search')
export class BdController {
  constructor(private readonly bdService: BdService) {}

  @Get("/all")
  async getAll() {
    return JSON.stringify(this.bdService.getAll())
  }

  @Get("/:id")
  async getById(@Param("id", ParseIntPipe) id: number) {
    return JSON.stringify(this.bdService.getById(id))
  }

  @Get("")
  async getPagedData(@Query('query') query: string, @Query('page') page: number) {
    return JSON.stringify(this.bdService.getPage(page));
  }
}
