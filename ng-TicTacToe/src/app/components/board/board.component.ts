import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[]
  winner: string
  is_x_turn: boolean 

  ngOnInit() {
    this.start_a_game()
  }

  start_a_game = ()=>{
    this.squares = Array(9).fill('')
    this.is_x_turn = true 
    this.winner = null
  }

  player_turn = () => {
    return this.is_x_turn ? 'X' : 'O'
  }

  click_square = index =>{
    console.log(this.squares[index]);
    
    if(this.squares[index] === ''){
      this.squares.splice(index, 1, this.player_turn())
      this.is_x_turn = !this.is_x_turn
    }

    this.winner = this.winning()
  }

  winning = ()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a]
      }
    }
    return null
  }

}
