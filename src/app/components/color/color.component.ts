import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';

  /**
   *
   * The color representing the Div
   */
  divColor = '';

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('In constructor', this.defaultColor);
  }

  ngOnInit(): void {
    console.log('In ngOnInit', this.defaultColor);
    this.divColor = this.defaultColor;
    this.activatedRoute.params.subscribe(
      (donnes) => {
        this.defaultColor = donnes['defaultColor'];
      }
    )
  }

  changeColor(newColor: string) {
    this.divColor = newColor;
  }
}
