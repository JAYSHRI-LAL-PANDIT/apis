import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getJay(): string {
    return 'Hello Jay Kumar!';
  }
}
