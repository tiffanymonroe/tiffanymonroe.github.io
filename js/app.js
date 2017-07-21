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




// Categories


//*****************************************//

const disney = {
  name: "Disney",
      questions: ['What date did Disneyland open?'],
      choices: [['December 5, 1950 </p>', '<p>July 17, 1955</p> ', '<p>June 11, 1955</p>']
                ],
      answers: [1]
    }

console.log(disney);

//*****************************************//

const buffyverse = {
  name: 'Buffyverse',
  questions: ["What dimension is Lorne from?"],
  choices: [["Oden-Tal <br>", "Arashmaharr <br>", "Pylea"]
            ],
  answers: ["Pylea"]

}

console.log(buffyverse);

//*****************************************//

const starwars = {
  name: 'Star Wars',
  questions: ["What is the title of Darth Vader's theme music?"],
  choices: [["The Imperial March <br>", "The Empire <br>", "Darth Vader Theme"]
            ],
  answers: ["The Imperial March"]

}

console.log(starwars);

//*****************************************//

const superheroes = {
  name: 'Superheroes',
  questions: ["What is the longest running Superman TV series?"],
  choices: [["Adventures of Superman <br>","Lois and Clark: The New Adventures of Superman <br>",  "Smallville"]
            ],
  answers: ["Smallville"]

}

console.log(superheroes);

//*****************************************//

const harrypotter = {
  name: 'Harry Potter',
  questions: ["What inspired J.K. Rowling to create dementors?"],
  choices: [["Her battle with depression. <br>", "Her belief in ghosts. <br>",
  "Her recurring nightmare. <br>"]
      ],
  answers: ["Her battle with depression."]
}

console.log(harrypotter);

//*****************************************//

const $categories = [disney.name, superheroes.name, buffyverse.name, starwars.name, harrypotter.name];
for (let i=0; i < $categories.length; i++){
  // let $randomCategory = $categories[Math.floor(Math.random() * $categories.length)];
  $addCategories = $('<button/>').text($categories[i]).attr('value', "" + $categories[i] + "");
  $addCategories.appendTo('#categories');
}


//*****************************************//
const getChoice = () => {
    if ($category == $categories[0]){
      for (let i=0; i < $categories[0].choices[0].length; i++){
        $choices = $categories[0].choices[0][i];
    }}
      else if ($category == $categories[1]) {
          for (let i=0; i < $categories[1].answers[0].length; i++){
            $choices = $categories[1].answers[0][i];
          }
      }   else if ($category == $categories[2]) {
              for (let i=0; i < $categories[2].answers[0].length; i++){
                $choices = $categories[2].answers[0][i];
          } }  else if ($category == $categories[3]) {
                  for (let i=0; i < $categories[3].answers[0].length; i++){
                    $choices = $categories[3].answers[0][i];
                  } }  else if ($category == $categories[4]) {
                          for (let i=0; i < $categories[4].answers[0].length; i++){
                            $choices = $categories[4].answers[0][i];
                          } }  else {
                                  console.log("Oops! You don't have any choices.");
                              }
}



getChoice();

//*****************************************//
const getAnswer = () => {
  $choices.on('click', (e) => {
    let $answer = $(e.currentTarget).val();
      if ($answer == disney.answer[0]){
        console.log('that is the correct Disney answer.');
      }

  })
}

//*****************************************//
//Player input


const getPlayer1 = () => {
  $('.player1 button').on('click', () => {
        let $player1 = $('.player1 input').val();
        console.log($player1);
        game.players.push($player1);
      })
};

const getPlayer2 = () => {
  $('.player2 button').on('click', () => {
        let $player2 = $('.player2 input').val();
        console.log($player2);
        game.players.push($player2);
      })
};




//*****************************************//

//Game object

const game = {
  players: [],
  rounds: 0,
  score: 0,
  askQuestion(){
      $('#categories button').on('click', (e) => {
          let $category = $(e.currentTarget).val();
              if ($category == $categories[0]){
                console.log('When you wish upon a star.');
                createModal(disney.questions[0], disney.choices[0]);
              } else if ($category == $categories[1]) {
                    console.log('All the superheroes!');
                    createModal(superheroes.questions[0], superheroes.choices[0]);
                }  else if ($category == $categories[2]) {
                        console.log('Buffy is alive');
                        createModal(buffyverse.questions[0], buffyverse.choices[0]);
                    }  else if ($category == $categories[3]) {
                          console.log('A long time ago, in a galaxy far, far, away...');
                          createModal(starwars.questions[0], starwars.choices[0]);
                       } else if ($category == $categories[4]) {
                            console.log('The boy who lived.');
                            createModal(harrypotter.questions[0], harrypotter.choices[0]);
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




//*****************************************//

const namePlayers = () => {
  getPlayer1();
  getPlayer2();
  $('.player1 h3').text('Player 1: ' + game.players[0]);
  $('.player2 h3').text('Player 2: ' + game.players[1]);
}


//*****************************************//
const startGame = () => {

  $('#start').on('click', ()=>{
    $('.row-2').css('display', 'flex')

    createModal("Choose a category.");

    $('#start').hide();
})
}

startGame();
game.askQuestion();

}) //end window onload
