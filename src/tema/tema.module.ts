import { Module } from '@nestjs/common';
import { Tema } from './entities/tema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaService } from './services/tema.service';
import { TemaController } from './controllers/tema.controller';

@Module({
  //importacao da modelagem
  imports: [TypeOrmModule.forFeature([Tema])],
  // importacao da service
  providers: [TemaService],
  // importacao controladora
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
