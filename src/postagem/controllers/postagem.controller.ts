import { PostagemService } from './../services/postagem.service';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';

@Controller(`/postagens`)
export class PostagemController {
  constructor(private readonly PostagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.PostagemService.findAll();
  }

  @Get(`/:id`)
  @HttpCode(HttpStatus.OK)
  findById(@Param(`id`, ParseIntPipe) id: number): Promise<Postagem> {
    return this.PostagemService.findById(id);
  }

  @Get(`/titulo/:titulo`)
  @HttpCode(HttpStatus.OK)
  findByAllTitulo(@Param(`titulo`) titulo: string): Promise<Postagem[]> {
    return this.PostagemService.findAllByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.PostagemService.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.PostagemService.update(postagem);
  }

  @Delete(`/:id`)
  @HttpCode(HttpStatus.OK)
  delete(@Param(`id`, ParseIntPipe) id: number) {
    return this.PostagemService.delete(id);
  }
}
