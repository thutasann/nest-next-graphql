import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello from Nest Next GraphQL!</h1>';
  }
}
