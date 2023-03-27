import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  message = '';
  isHidden = false;
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  constructor() {
    /*     setInterval(() => {

    }, 1000); */
  }
}
