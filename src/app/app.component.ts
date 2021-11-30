import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'pippo';
  karlActive: boolean = true;

  random() {
    return Math.random();
  }

  toggleKarl() {
    this.karlActive = !this.karlActive;
  }
}
