import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bc = 'red';
  constructor() {}
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
