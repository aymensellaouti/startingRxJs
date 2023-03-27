import { Component } from '@angular/core';

@Component({
  selector: 'app-color-ut',
  templateUrl: './color-ut.component.html',
  styleUrls: ['./color-ut.component.css']
})
export class ColorUtComponent {
  divColor = 'red';

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */
  changeColor(newColor: string) {
    this.divColor = newColor;
  }
}
