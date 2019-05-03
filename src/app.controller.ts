import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains angular logic
    response.sendFile(resolve('../dist/snackbot-rfid/index.html'));
  }
 
}
