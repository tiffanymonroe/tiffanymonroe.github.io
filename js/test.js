$(()=>{

//Modal setup// give credit to Alex in ReadMe.

  let $container = $('<div>')
  let $mdl = $('<p>')
  let $choicesContainer = $('<div>')
  let $choices = $('<button>')



  const createModal = (questions, choices) => {

    $mdl.html(questions)
    $mdl.css('border-radius', '1%')
    $mdl.css('position', 'absolute')
    $mdl.css('zIndex', '1')
    $mdl.css('width', '50%')
    $mdl.css('height', '75%')
    $mdl.css('padding', '5%')
    $mdl.css('margin', '0 20%')
    $mdl.css('font-family', "'Amatic SC', cursive")
    $mdl.css('font-weight', 'bold')
    $mdl.css('font-size', '2em')
    $mdl.css('border', '1px solid lightgrey')
    $mdl.css('box-shadow', '5px 5px 15px #888888')
    $mdl.css('text-align', 'left')
    $mdl.css('background-color', 'white')

    $choices.html(choices)
    $choices.css('font-family', "'Amatic SC', cursive")
    $choices.css('font-size', '1em')

    $('.row-3').append($container)
    $container.append($mdl)
    $mdl.append($choicesContainer)
    $choicesContainer.append($choices)

  }

  $('button').on('click', ()=>{
    $('.row-2').css('display', 'flex')
  })


//TEST ARE BEGINS HERE

const $categories = [];

//*****************************************//

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
  // setCorrectAnswer(){
  //   if statement
  // }
}


  // let $category = for (i=0; i < Category.name; i++);
  // let $questions = for (i=0; i < Category.questions; i++);
  // let $choices = for (i=0; i < Category.choices; i++);
  // let $answers = for (i=0; i < Category.answers; i++);


//*****************************************//
let disney = new Category ('Disney');
//question 1
disney.setQuestion('What date did Disneyland open?');
disney.setAnswer('July 17, 1955');
disney.setChoices('December 5, 1950', 'July 17, 1955', 'June 11, 1955');

//
$categories.push(disney.name);
console.log(disney);

//*****************************************//
let buffyverse = new Category ('Buffyverse');
//question 1
buffyverse.setQuestion("What dimension is Lorne from");
buffyverse.setAnswer("Pylea");
buffyverse.setChoices("Oden-Tal", "Arashmaharr", "Pylea");
//
$categories.push(buffyverse.name);
console.log(buffyverse);


//*****************************************//
let starwars = new Category ('Star Wars');
starwars.setQuestion("What is the title of Darth Vader's theme music?");
starwars.setAnswer("The Imperial March");
starwars.setChoices("The Imperial March", "The Empire", "Darth Vader Theme Music");

$categories.push(starwars.name);


console.log($categories);

//*****************************************//

let superheroes = new Category ('Superheroes');

  superheroes.setQuestion(["What is the longest running Superman TV series?"]),
  superheroes.setChoices([["Adventures of Superman", "Lois and Clark: The New Adventures of Superman",  "Smallville"]
      ],);
  superheroes.setAnswer([2]);

  $categories.push(superheroes.name);
console.log(superheroes);

//*****************************************//

let harrypotter = new Category ('Harry Potter');
  harrypotter.setQuestion(["What inspired J.K. Rowling to create dementors?"]);
  harrypotter.setChoices([["Her battle with depression.", "Her belief in ghosts.",
  "Her recurring nightmare."]
      ]);
  harrypotter.setAnswer([0]);

  $categories.push(harrypotter.name);
console.log(harrypotter);

//*****************************************//
//TEST AREA ENDS HERE

for (let i=0; i < $categories.length; i++){
  // let $randomCategory = $categories[Math.floor(Math.random() * $categories.length)];
  $addCategories = $('<button/>').text($categories[i]).attr('value', "" + $categories[i] + "");
  $addCategories.appendTo('#categories');
}
//*****************************************//

//Game object

const game = {
  rounds: 0,
  score: 0,
  askQuestion(){
      $('#categories button').on('click', (e) => {
          let $category = $(e.currentTarget).val();
              if ($category == $categories[0]){
                console.log('Category [0]');

              } else if ($category == $categories[1]) {
                    console.log('Category [1]');

                }  else if ($category == $categories[2]) {
                        console.log('Category [2]');

                    }  else if ($category == $categories[3]) {
                          console.log('Category [3]');

                       } else if ($category == $categories[4]) {
                            console.log('Category [4]');

                         } else {
                              console.log('Oops! Something went wrong.');
                           }
       })
  },
  awardPoints(answer){
    if (answer === true){
      score++;
    }
      else {
          createModal ('Sorry, maybe next time.')
          // $('#modal-button').on('click', ()=>{
          //   newQuestion();
          // })
        }
  },
  checkWinner (score) {
      if (score > 0){
        console.log('end round 1');
        createModal ('You won!', 'Round 2')
      //   $('#modal-button').on('click', ()=>{
      //         if (score)
      //
      //   })
      // }
  }
  }

}


//Player input

let players = [];

const getPlayer1 = () => {
  $('.player1 button').on('click', () => {
        let $player1 = $('.player1 input').val();
        console.log($player1);
        players.push($player1);
      })
};

const getPlayer2 = () => {
  $('.player2 button').on('click', () => {
        let $player2 = $('.player2 input').val();
        console.log($player2);
        players.push($player2);
      })
};



//*****************************************//

const namePlayers = () => {
  getPlayer1();
  getPlayer2();
}



//*****************************************//
const startGame = () => {

  $('#start').on('click', ()=>{
    $('.row-2').css('display', 'flex')

    createModal("Choose a category.");

    $('#start').hide();
  })
  namePlayers();
  console.log(players);

}

startGame();
game.askQuestion();

}) //end window onload
