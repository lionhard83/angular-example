import { Component } from '@angular/core';
type TrisElement = 'X' | 'O';
@Component({
  selector: 'app-tris',
  templateUrl: './tris.component.html',
  styleUrls: ['./tris.component.css']
})
export class TrisComponent {
  turn:TrisElement = 'O';
  whoWin: TrisElement | 'Empty' = 'Empty';
  grid: (TrisElement | 'Empty')[][] =
  [
    ['Empty', 'Empty', 'Empty'],
    ['Empty', 'Empty', 'Empty'],
    ['Empty', 'Empty', 'Empty']
  ];
  constructor() { }

  toggleTurn = () => {
    this.turn === 'O'? (this.turn = 'X'): (this.turn = 'O')
  }

  play = (x: number, y: number) => {
    if (this.whoWin !== 'Empty' || this.grid[x][y] !== 'Empty' ) return;
    this.grid[x][y] = this.turn;
    (this.checkCrossWinner() || this.checkLinearWinner())
      && (this.whoWin = this.turn);
    this.whoWin === 'Empty' && this.toggleTurn();
  }

  reset = () => {
    this.grid = [
      ['Empty', 'Empty', 'Empty'],
      ['Empty', 'Empty', 'Empty'],
      ['Empty', 'Empty', 'Empty']
    ]
    this.turn = 'O';
    this.whoWin = 'Empty'
  }


  checkLinearWinner = () => {
    return [0, 1, 2].some(index =>
      (this.grid[index][0] !== 'Empty' &&
      this.grid[index][0] === this.grid[index][1] &&
      this.grid[index][1] === this.grid[index][2]) ||
      (this.grid[0][index] !== 'Empty' &&
      this.grid[0][index] === this.grid[1][index] &&
      this.grid[1][index] === this.grid[2][index])
    )
  }
  checkCrossWinner = () => {
    return (
      this.grid[0][0] !== 'Empty' &&
      this.grid[0][0] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][2])
    ||
      (this.grid[0][2] !== 'Empty' &&
      this.grid[0][2] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][0]);
  }


}
