import { Injectable } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor(private logger: LoggerService) {}
  add(x: number, y: number): number {
    this.logger.logger(`${x} + ${y} = ${x + y}`);
    return x + y;
  }
  substract(x: number, y: number): number {
    this.logger.logger(`${x} - ${y} = ${x - y} `);
    return x - y;
  }
}
