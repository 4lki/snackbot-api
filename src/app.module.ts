import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IoGateway } from './io.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IoGateway],
})
export class AppModule {}
