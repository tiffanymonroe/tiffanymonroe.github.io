$(()=>{

//global scope
const categories = ['Disney', 'Harry Potter', 'Lord of the Rings', 'Star Trek', 'Star Wars', 'Buffyverse', 'Superheroes'];



const getName = ()=>{
  $('input').on('keypress', (e)=>{
  console.log('the key had been pressed');
  $('button').on('click', ()=>{
  $name = $(e.currentTarget).val();
  $('.name').append($name).text($name);
  })
})
}
//local scope


class Player {
  constructor (name, score, roundsWon) {
    this.name = getName();
    this.score = 0;
    this.roundsWon = 0;
  }

}

let player1 = new Player;
console.log(player1);
let player2 = new Player;
console.log(player2);

$('button').on('click', ()=>{
  $('.row-2').css('display', 'flex')
})



}) //end window onload
