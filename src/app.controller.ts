import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppLogger } from './logger/app-logger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logger: AppLogger) {
    this.logger.setContext(AppController.name);
  }

  @Get()
  getHello(): string {
    this.logger.errorSafe('error')
    this.logger.logSafe('I am a random test')
    return this.appService.getHello();
  }
}
