$(()=>{

//Modal setup// give credit to Alex in ReadMe.

  let $container = $('<div>')
  let $mdl = $('<p>')
  let $action = $('<button>').attr('id', 'modal-button')


  const createModal = (message, button) => {

    $mdl.html(message)
    $mdl.css('border-radius', '1%')
    $mdl.css('position', 'absolute')
    $mdl.css('zIndex', '1')
    $mdl.css('width', '25%')
    $mdl.css('height', 'auto')
    $mdl.css('padding', '5%')
    $mdl.css('margin', '0 35%')
    $mdl.css('font-family', "'Roboto', sans-serif")
    $mdl.css('border', '1px solid lightgrey')
    $mdl.css('box-shadow', '5px 5px 15px #888888')
    $mdl.css('text-align', 'center')

    $action.html(button)
    $action.css('margin-top', '10%')
    $action.css('padding', '1em')
    $action.css('position', 'absolute')
    $action.css('top', '60%')
    $action.css('left', '50%')

    $('.row-3').append($container)
    $container.append($mdl)
    $mdl.append($action)
  }





// Categories


//*****************************************//

const disney = {
  name: "Disney",
  questions: ['What date did Disneyland open?'],
  choices: [['December 5, 1950', ' July 17, 1955', ' June 11, 1955']
            ],
  answers: ['July 17, 1955']
}

console.log(disney);

//*****************************************//

const buffyverse = {
  name: 'Buffyverse',
  questions: ["What dimension is Lorne from?"],
  choices: [["Oden-Tal", "Arashmaharr", "Pylea"]
            ],
  answers: ["Pylea"]

}

console.log(buffyverse);

//*****************************************//

const starwars = {
  name: 'Star Wars',
  questions: ["What is the title of Darth Vader's theme music?"],
  choices: [["The Imperial March", "The Empire", "Darth Vader Theme"]
            ],
  answers: ["The Imperial March"]

}

console.log(starwars);

//*****************************************//

const superheroes = {
  name: 'Superheroes',
  questions: ["What is the longest running Superman TV series?"],
  choices: [["Adventures of Superman ","Lois and Clark: The New Adventures of Superman ",  "Smallville"]
            ],
  answers: ["Smallville"]

}

console.log(superheroes);

//*****************************************//

const harrypotter = {
  name: 'Harry Potter',
  questions: ["What inspired J.K. Rowling to create dementors?"],
  choices: [["Her battle with depression.", "Her belief in ghosts.",
  "Her recurring nightmare."]
      ],
  answers: ["Her battle with depression"]
}

console.log(harrypotter);

//*****************************************//

const $categories = [disney.name, superheroes.name, buffyverse.name, starwars.name, harrypotter.name];
for (let i=0; i < $categories.length; i++){
  // let $randomCategory = $categories[Math.floor(Math.random() * $categories.length)];
  $addCategories = $('<button/>').text($categories[i]).attr('value', "" + $categories[i] + "");
  $addCategories.appendTo('#categories');
}



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
                createModal(disney.questions[0], 'choices');
                  $('#modal-button').on('click', ()=>{
                    $mdl.hide();
                })
              } else if ($category == $categories[1]) {
                    console.log('All the superheroes!');
                    createModal(superheroes.questions[0], 'choices');
                      $('#modal-button').on('click', ()=>{
                        $mdl.hide();
                    })
                }  else if ($category == $categories[2]) {
                        console.log('Buffy is alive');
                        createModal(buffyverse.questions[0], 'choices');
                          $('#modal-button').on('click', ()=>{
                            $mdl.hide();
                        })
                    }  else if ($category == $categories[3]) {
                          console.log('A long time ago, in a galaxy far, far, away...');
                          createModal(starwars.questions[0], 'choices');
                            $('#modal-button').on('click', ()=>{
                              $mdl.hide();
                          })
                       } else if ($category == $categories[4]) {
                            console.log('The boy who lived.');
                            createModal(harrypotter.questions[0], 'choices');
                              $('#modal-button').on('click', ()=>{
                                $mdl.hide();
                            })
                         }
       })

  },
  awardPoints(answer){
    if (answer === true){
      score++;
    }
      else {
          createModal ('Sorry, maybe next time.', 'next question')
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

    createModal("Choose a category.", 'close');
    $('#modal-button').on('click', ()=>{
        $mdl.hide();
    });

    $('#start').hide();
})
}

startGame();
game.askQuestion();

}) //end window onload
