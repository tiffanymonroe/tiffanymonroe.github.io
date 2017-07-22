$(()=>{

// MODAL

  let $container = $('<div>')
  let $question = $('<p>')
  let $choices = $('<p>')
  let $answer = $('<p>')

  const createModal = (question, choices, answer) => {

    $question.html(question)
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

    $choices.html(choices)
    $choices.css('font-family', "'Amatic SC', cursive")
    $choices.css('font-size', '1em')

    $answer.html(answer)
    $answer.css('display', 'none')
    $answer.css('font-family', "'Amatic SC', cursive")
    $answer.css('font-size', '1em')

    $('.row-3').append($container)
    $container.append($question)
    $question.append($choices)
    $choices.append($answer)

  }

//******************************************************


// CATEGORIES OBJECT-CEPTION

  const categories = [
    {
      name: "Disney",
      questions: ['What date did Disneyland open?'],
      choices: [['December 5, 1950', 'July 17, 1955', 'June 11, 1955']
                ],
      answers: ["July 17, 1955"]
    },
    {
      name: 'Buffyverse',
      questions: ["What dimension is Lorne from?"],
      choices: [["Oden-Tal", "Arashmaharr", "Pylea"]
                ],
      answers: ["Pylea"]
    },
    {
      name: 'Star Wars',
      questions: ["What is the title of Darth Vader's theme music?"],
      choices: [["The Imperial March <br>", "The Empire <br>", "Darth Vader Theme"]
                ],
      answers: ["The Imperial March"]
    },
    {
      name: 'Superheroes',
      questions: ["What is the longest running Superman TV series?"],
      choices: [["Adventures of Superman","Lois and Clark: The New Adventures of Superman",  "Smallville"]
                ],
      answers: ["Smallville"]
    },
    {
      name: 'Harry Potter',
      questions: ["What inspired J.K. Rowling to create dementors?"],
      choices: [["Her battle with depression.", "Her belief in ghosts.",
      "Her recurring nightmare."]
          ],
      answers: ["Her battle with depression."]
    }

  ] // END OBJECT-CEPTION


  // Add Categories to DOM

  for (let i=0; i < categories.length; i++){
      // console.log(categories[i].name);
      $addCategories = $('<button/>').text(categories[i].name).attr('value', "" + categories[i].name + "");
      $addCategories.appendTo('#categories');
  }



//******************************************************


  let player1 =
      $('.player1 button').on('click', () => {
            let player1 = $('.player1 input').val();
            console.log(player1);
      })

  let player2 =
      $('.player2 button').on('click', () => {
            let player2 = $('.player2 input').val();
            console.log(player2);
      })


// GAME OBJECT

  const game = {
    currentPlayer: "",
    players: [player1, player2],
    round: 0,
    score: 0,
    switchPlayer(){
      if (game.round === 0){
        alert('Enter your names. Then, click "play."')
        startGame();
      }   else if (game.round % 2 === 0){
              player2 = game.currentPlayer
              alert(player2 + " , it's your turn. Choose a category.")
          }   else {
                  player1 = game.currentPlayer
                  alert(player1 + " , it's your turn. Choose a category.")
              }
    },
    updateScore(){
      if (answer === true){
        game.score++;
      } else {
            switchPlayer();
        }
    }

  } //  END GAME OBJECT

  const startGame = () => {
      $('#start').on('click', ()=>{
          $('.row-2').css('display', 'flex')
          $('#start').hide();
          alert('Choose a category.')
      })
  }



  const startRound = () => {
      $('#categories button').on('click', (e) => {
        console.log($(e.currentTarget).val());
        
      })
  }
startRound();


//******************************************************





startGame();

}) //end window onload
