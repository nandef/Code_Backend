import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  appService: any;
  getHello(): string {
    return this.appService.getHelloWorld();
  }
}
