import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('vengo eseguito dopo 4secondi');
      this.router.navigate(['/matt'])
    }, 4000)
  }

}
