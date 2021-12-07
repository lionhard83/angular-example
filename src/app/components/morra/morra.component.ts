import { Component, OnInit } from '@angular/core';
type MorraChoice = 'paper' | 'scissor' | 'rock';
@Component({
  selector: 'app-morra',
  templateUrl: './morra.component.html',
  styleUrls: ['./morra.component.css']
})
export class MorraComponent implements OnInit {
  items: MorraChoice[] = ['paper', 'scissor', 'rock'];
  whoWinner : 'you' | 'computer' | 'draw' | undefined;
  lastComputerChoice: MorraChoice | undefined;
  lastYourChoice: MorraChoice | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  generateRandomChoice(): MorraChoice {
   const random = Math.random();
   return random < 0.33 ? 'paper' : (random < 0.66 ? 'scissor' : 'rock');
  }

  play(yourChoice: MorraChoice) {
    this.lastComputerChoice = this.generateRandomChoice();
    this.lastYourChoice =  yourChoice;
    if (this.lastYourChoice === this.lastComputerChoice) {
      this.whoWinner = 'draw';
    } else if (
      (this.lastYourChoice === 'rock' && this.lastComputerChoice === 'scissor') ||
      (this.lastYourChoice === 'paper' && this.lastComputerChoice === 'rock') ||
      (this.lastYourChoice === 'scissor' && this.lastComputerChoice === 'paper')
    ) {
      this.whoWinner = 'you';
    } else {
      this.whoWinner = 'computer';
    };
  }

}
