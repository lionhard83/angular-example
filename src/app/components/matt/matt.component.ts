import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {
  textInInput: string = 'Pippo';
  show = true;
  typeOfInput = 'number';
  valid = false;
  username = '';
  increment = 0;
  obj: {
    x: number | '',
    y: number | ''
  } = {
    x: '',
    y: ''
  }

  isValid() {
    this.valid = this.username.includes('@');
    console.log('isValid?', this.valid)
  }

  items = ['pippo', 'caio', 'sempronio'];

  constructor() { }

  changeTypeOfInput() {
    this.typeOfInput === 'number' ?
      (this.typeOfInput = 'password') :
      (this.typeOfInput = 'number')
  }

  toggleShow()  {
    this.show ? (this.show = false) : (this.show = true);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.textInInput = 'Vattelapesca';
    }, 3000)
  }

  casual(i: number) {
    return Math.random() > 0.5 ? 'class' + (i+1): 'default'
  }

  doConsoleLog() {
    console.log('ho cambiato qualcosa nell\'input')
  }

  product = () => (this.obj.x || 0) * (this.obj.y || 0);


}
