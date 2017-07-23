$(()=>{

// MODAL

let $container = $('<div>')
let $question = $('<p>')
let $choices = $('<p>')
let $answer = $('<p>')



const createModal = () => {

  $question.html()
  $question.css('border-radius', '1%')
  $question.css('position', 'absolute')
  $question.css('zIndex', '1')
  $question.css('width', '50%')
  $question.css('height', '75%')
  $question.css('padding', '5%')
  $question.css('margin', '0 20%')
  $question.css('font-family', "'Amatic SC', cursive")
  $question.css('font-weight', 'bold')
  $question.css('font-size', '2em')
  $question.css('border', '1px solid lightgrey')
  $question.css('box-shadow', '5px 5px 15px #888888')
  $question.css('text-align', 'left')
  $question.css('background-color', 'white')

  $choices.html()
  $choices.css('font-family', "'Amatic SC', cursive")
  $choices.css('font-size', '1em')

  $answer.css('display', 'none')

  $('.row-3').append($container)
  $container.append($question)
  $question.append($choices)
  $choices.append($answer)

}

  // Categories


  //*****************************************//

  const disney = {
      name: "Disney",
        questions: 'What date did Disneyland open?',
        choices: ['December 5, 1950', 'July 17, 1955', 'June 11, 1955'],
        answers: [1]
      }


  console.log(disney);

  //*****************************************//

  const buffyverse = {
    name: 'Buffyverse',
    questions: "What dimension is Lorne from?",
    choices: ["Oden-Tal", "Arashmaharr", "Pylea"],
    answers: [2]

  }

  console.log(buffyverse);

  //*****************************************//

  const starwars = {
    name: 'Star Wars',
    questions: "What is the title of Darth Vader's theme music?",
    choices: ["The Imperial March", "The Empire", "Darth Vader Theme"],
    answers: [0]

  }

  console.log(starwars);

  //*****************************************//

  const superheroes = {
    name: 'Superheroes',
    questions: "What is the longest running Superman TV series?",
    choices: ["Adventures of Superman","Lois and Clark: The New Adventures of Superman",  "Smallville"],
    answers: [0]

  }

  console.log(superheroes);

  //*****************************************//

  const harrypotter = {
    name: 'Harry Potter',
    questions: "What inspired J.K. Rowling to create dementors?",
    choices: ["Her battle with depression.", "Her belief in ghosts.",
    "Her recurring nightmare."],
    answers: [0]
  }

  console.log(harrypotter);




  // Add Categories to DOM

  const $categories = [disney.name, superheroes.name, buffyverse.name, starwars.name, harrypotter.name];
  for (let i=0; i < $categories.length; i++){
    // let $randomCategory = $categories[Math.floor(Math.random() * $categories.length)];
    $addCategories = $('<button/>').text($categories[i]).attr('value', "" + $categories[i] + "");
    $addCategories.appendTo('#categories');
  }


  // Get choices



//******************************************************


  let player1 =
      $('.player1 button').on('click', () => {
            let player1 = $('.player1 input').val();
            $('.player1 input').hide();
            $('.player1 button').hide();
            console.log(player1);
      })

  let player2 =
      $('.player2 button').on('click', () => {
            let player2 = $('.player2 input').val();
            $('.player2 input').hide();
            $('.player2 button').hide();
            console.log(player2);
      })


// GAME OBJECT

  const game = {
    currentPlayer: "",
    players: [player1, player2],
    round: 0,
    score: 0,
    switchPlayer(){
      if (game.round % 2 === 0){
              player2 = game.currentPlayer
                alert(player2 + " , it's your turn. Choose a category.")
          }   else {
                  player1 = game.currentPlayer
                    alert(player1 + " , it's your turn. Choose a category.")
              }
    },
    startRound(){
      $('#categories button').on('click', (e) => {
        let $currentCategory = $(e.currentTarget).val()
            if ($currentCategory === disney.name){
              console.log("When you wish upon a star.");
                createModal();
                $question.html(disney.question)
                $choices.html(disney.choices[0] + "</p><p>" + disney.choices[1] + "</p><p>" + disney.choices[2])
                $answer.html(disney.answers)

            }
                else if ($currentCategory === buffyverse.name) {
                  console.log("Buffy is alive.");

                }
                    else if ($currentCategory === starwars.name) {
                        console.log("A long time ago, in a galaxy, far, far away...");

                    }
                          else if ($currentCategory === superheroes.name) {
                              console.log("All the superheroes!");

                          }
                              else if ($currentCategory === harrypotter.name) {
                                  console.log("The boy who lived.");

                              }
    })
  },
  updateScore(){
    if (answer === true){
          game.score++;
          game.currentCategory.splice();
          game.currentChoices.splice();
        } else {
              switchPlayer();
    }
  }
  } //  END GAME OBJECT




  const startGame = () => {
      $('#start').on('click', ()=>{
          $('.row-2').css('display', 'flex')
          $('#start').hide();
          game.startRound();
      })
  };






//******************************************************





startGame();


}) //end window onload
