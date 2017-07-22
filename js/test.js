$(()=>{

// MODAL
  let modalContainer = $('<div>')
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
    getCurrentPlayer(){
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
  } //  END GAME OBJECT

  const startGame = () => {
      $('#start').on('click', ()=>{
          $('.row-2').css('display', 'flex')
          $('#start').hide();
          alert('Choose a category.')
      })
      game.round++;
      console.log(game.round);
  }

game.getCurrentPlayer();

}) //end window onload
