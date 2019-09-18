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

  init_squares = ()=>{
    this.squares = new Array()
    for (let i = 0; i < 9; i++) {
      this.squares.push({
        value: '',
        disabled: false
      })
    }    
  }

  start_a_game = ()=>{
    this.init_squares()
    this.is_x_turn = true 
    this.winner = null
  }

  player_turn = () => {
    return this.is_x_turn ? 'X' : 'O'
  }

  click_square = index =>{
     
    if(this.squares[index].value === ''){
      this.squares.splice(index, 1, { value: this.player_turn(), disabled: true})
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
      if (this.squares[a].value && this.squares[a].value === this.squares[b].value && this.squares[a].value === this.squares[c].value) {
        
        this.disable_buttons()
        
        return this.squares[a].value
      }
    }
    return null
  }

  disable_buttons = ()=>{
    this.squares.forEach(square => {
      if(square.value === '')
        square.disabled = true
    })
  }

}
