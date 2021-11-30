import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {
  textInInput: string = 'Pippo';
  obj: {
    x: number | '',
    y: number | ''
  } = {
    x: '',
    y: ''
  }
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.textInInput = 'Vattelapesca';
    }, 3000)
  }

  product = () => (this.obj.x || 0) * (this.obj.y || 0);


}
