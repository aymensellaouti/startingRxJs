import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent {
  isAllume = false;
  interrupteur() {
    this.isAllume = !this.isAllume;
  }
}
