import { Module } from '@nestjs/common';
import { BdModule } from './bd/bd.module';
import { BdController } from './bd/bd.controller';
import { BdService } from './bd/bd.service';

@Module({
  imports: [BdModule],
  controllers: [BdController],
  providers: [BdService],
})
export class AppModule {}
