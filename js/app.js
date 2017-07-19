$(()=>{

//global scope
const categories = ['Disney', 'Harry Potter', 'Lord of the Rings', 'Star Trek', 'Star Wars', 'Buffyverse', 'Superheroes'];

$('button').on('click', ()=>{
  $('.row-2').css('display', 'flex')
})

//local scope
const game = {
  players: [],
  rounds: 0,
  score: 0,
  getName(){
      $('input').on('keypress', (e)=>{
      console.log('the key had been pressed');
      $('button').on('click', ()=>{
      $player1 = $('#player1 input').val();
      $('#player1-info').append('<div>').text($player1);
      })
  })
  }

}

game.getName();
console.log(game.players);

class Player {
  constructor (name, score, roundsWon) {
    this.name = '';
    this.score = 0;
    this.roundsWon = 0;
  }

}

let player1 = new Player;
console.log(player1);
let player2 = new Player;
console.log(player2);





}) //end window onload
