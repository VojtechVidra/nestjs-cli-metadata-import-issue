import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  getHello(@Body() body: HelloDto): string {
    console.log(body);
    return this.appService.getHello();
  }
}
