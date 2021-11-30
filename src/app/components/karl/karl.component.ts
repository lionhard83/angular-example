import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-karl',
  templateUrl: './karl.component.html',
  styleUrls: ['./karl.component.css']
})
export class KarlComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    console.log('ho inzializzato il componente');
  }

}
