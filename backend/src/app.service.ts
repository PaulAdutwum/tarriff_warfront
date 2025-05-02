import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tariff Impact Tracker API - Welcome to the backend service!';
  }
}
