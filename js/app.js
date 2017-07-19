$(()=>{
const $categories = [];



//Categories //

class Category {
  constructor(name, questions, choices, answers){
    this.name = name;
    this.questions = [];
    this.choices = [];
    this.answers = [];
  }
  setQuestion(newQuestion){
    this.questions = this.questions.push(newQuestion);
  }
  setChoices(newChoices){
    this.choices = this.choices.push(newChoices);
  }
  setAnswer(newAnswer){
    this.answers = this.answers.push(newAnswer);
  }
  pushName(){
      $categories.push(this.name);
  }
  // setCorrectAnswer(){
  //   if statement
  // }
}


//*****************************************//
const disney = new Category ('Disney');
//question 1
disney.setQuestion('What date did Disneyland open?');
disney.setAnswer('July 17, 1955');
disney.setChoices('December 5, 1950', 'July 17, 1955', 'June 11, 1955');
disney.pushName();

//
console.log(disney);

//*****************************************//
const buffyverse = new Category ('Buffyverse');
//question 1
buffyverse.setQuestion("What dimension is Lorne from");
buffyverse.setAnswer("Pylea");
buffyverse.setChoices("Oden-Tal", "Arashmaharr", "Pylea");
buffyverse.pushName();
//

console.log(buffyverse);


//*****************************************//
const starwars = new Category ('Star Wars');
starwars.setQuestion("What is the title of Darth Vader's theme music?");
starwars.setAnswer("The Imperial March");
starwars.setChoices("The Imperial March", "The Empire", "Darth Vader Theme");
starwars.pushName();
console.log(starwars);

//*****************************************//


$('button').on('click', ()=>{
  $('.row-2').css('display', 'flex')
})

//Randomize categories

$randomNames = $categories[Math.floor(Math.random() * $categories.length)];
console.log($randomNames);

for (let i=1; i <= 3; i++){
  $addCategories= $('<li>').text($categories[i]);
  $addCategories.appendTo('ul');
}




//*****************************************//

const game = {
  players: [],
  rounds: 0,
  score: 0,
}


console.log($categories);

// leave until last
// getName = ()=>{
//     $('input').on('click', ()=>{
//       $('button').on('click', ()=>{
//         $player1 = $('#player1 input').val();
//         $player2 = $('#player2 input').val();
//         game.players.push($player1, $player2);
//         $('#player1-info').append('<div>')
//         $('#player2-info').append('<div>')
//     })
// })
// }
//
// getName();
//
// console.log(game.players);


}) //end window onload
