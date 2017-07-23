$(()=>{
// MODAL

  let $container = $('<div>')
  let $question = $('<p>')
  let $choices = $('<p>')
  let $answer = $('<p>')

  const createModal = () => {

    $question.css('border-radius', '1%')
    $question.css('position', 'absolute')
    $question.css('zIndex', '1')
    $question.css('width', '50%')
    $question.css('height', 'auto')
    $question.css('padding', '5%')
    $question.css('margin', '0 20%')
    $question.css('font-family', "'Amatic SC', cursive")
    $question.css('font-weight', 'bold')
    $question.css('font-size', '2em')
    $question.css('border', '1px solid lightgrey')
    $question.css('box-shadow', '5px 5px 15px #888888')
    $question.css('text-align', 'left')
    $question.css('background-color', 'white')

    $choices.css('font-family', "'Amatic SC', cursive")
    $choices.css('font-size', '1em')




    $answer.css('display', 'none')
    $answer.css('font-family', "'Amatic SC', cursive")
    $answer.css('font-size', '1em')

    $('.row-3').append($container)
    $container.append($question)
    $question.append($choices)
    $choices.append($answer)

  }

//===================================================


//two players
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


    //GAME OBJECT========================================

        //ROUNDS
        //SCORE
        //CHECK FOR: win / loss / tie / no further plays / continue on

    const game = {
        round: 0,
        currentPlayer:
        score1: 0,
        score2: 0,
        currentPlayer(){
          if (game.round % 2 === 0){
                  player2 = game.currentPlayer
                    alert(player2 + " , it's your turn. Choose a category.")
              }   else {
                      player1 = game.currentPlayer
                        alert(player1 + " , it's your turn. Choose a category.")
                  }
        },
        checkAnswer(){
            $('.choices').on('click', (e)=>{
              $chosenAnswer = $(e.currentTarget).val()
                    if ($chosenAnswer === $answer.val() || game.currentPlayer === player1){
                        round++;
                        score1++
                    }
                    else if ($chosenAnswer === $answer.val() || game.currentPlayer === player2) {
                        round++;
                        score2++
                    }
                    else if ($chosenAnswer != $answer.val() || game.currentPlayer === player1) {
                        game.currentPlayer = player2
                    }
                    else if ($chosenAnswer != $answer.val() || game.currentPlayer === player2) {
                        game.currentPlayer = player1
                    }
            })
        },

      }
    //===================================================


// CATEGORIES OBJECT-CEPTION

      const categories = [
        { //index 0
          name: "Disney",
          questions: ['What date did Disneyland open?'],
          choices: [['December 5, 1950', 'July 17, 1955', 'June 11, 1955']
                    ],
          answers: ["July 17, 1955"]
        },
        { //index 1
          name: 'Buffyverse',
          questions: ["What dimension is Lorne from?"],
          choices: [["Oden-Tal", "Arashmaharr", "Pylea"]
                    ],
          answers: ["Pylea"]
        },
        { //index 2
          name: 'Star Wars',
          questions: ["What is the title of Darth Vader's theme music?"],
          choices: [["The Imperial March <br>", "The Empire <br>", "Darth Vader Theme"]
                    ],
          answers: ["The Imperial March"]
        },
        { //index 3
          name: 'Superheroes',
          questions: ["What is the longest running Superman TV series?"],
          choices: [["Adventures of Superman","Lois and Clark: The New Adventures of Superman",  "Smallville"]
                    ],
          answers: ["Smallville"]
        },
        { //index 4
          name: 'Harry Potter',
          questions: ["What inspired J.K. Rowling to create dementors?"],
          choices: [["Her battle with depression.", "Her belief in ghosts.",
          "Her recurring nightmare."]
              ],
          answers: ["Her battle with depression."]
        }

      ]


// END OBJECT-CEPTION


// ADD CATEGORIES TO THE DOM

  for (let i=0; i < categories.length; i++){
      // console.log(categories[i].name);
      $addCategories = $('<button/>').text(categories[i].name).attr('value', "" + categories[i].name + "");
      $addCategories.appendTo('#categories');
      }



// ESTABLISH CATEGORY CHOSEN
// GET QUESTIONS OUT OF THE CATEGORIES OBJECT
// GET CHOICES OUT OF THE CATEGORIES OBJECT


  const showModal = () => {
    $('#categories button').on('click', (e) => {
        $currentCategory = $(e.currentTarget).val()
            if ($currentCategory === categories[0].name){
                console.log("When you wish upon a star.");
                for (let i = 0; i < 3; i++){
                  $('<p/>').html(categories[0].choices[0][i]).attr('value', "" + categories[0].choices[0][i] + "").appendTo($choices)
                  $question.text(categories[0].questions[0])
                  $answer.attr('value','July 17, 1955')
                  createModal();
                }
            }
            else if ($currentCategory === categories[1].name) {
                console.log("Buffy is alive.");
                for (let i = 0; i < 3; i++){
                  $('<p/>').html(categories[1].choices[0][i]).addClass('choices').attr('value', "" + categories[1].choices[0][i] + "").appendTo($choices)
                  $question.text(categories[1].questions[0])
                  $answer.attr('value', 'Pylea')
                  createModal();
                }
            }
            else if ($currentCategory === categories[2].name) {
                console.log("A long time ago, in a galaxy, far, far away...");
                for (let i = 0; i < 3; i++){
                  $('<p/>').html(categories[2].choices[0][i]).addClass('choices').attr('value', "" + categories[2].choices[0][i] + "").appendTo($choices)
                  $question.text(categories[2].questions[0])
                  $answer.attr('value', 'The Imperial March')
                  createModal();
                }
            }
            else if ($currentCategory === categories[3].name) {
                console.log("All the superheroes!");
                for (let i = 0; i < 3; i++){
                  $('<p/>').html(categories[3].choices[0][i]).addClass('choices').attr('value', "" + categories[3].choices[0][i] + "").appendTo($choices)
                  $question.text(categories[3].questions[0])
                  $answer.attr('value', 'Smallville')
                  createModal();
                }
            }
            else if ($currentCategory === categories[4].name) {
                console.log("The boy who lived.");
                for (let i = 0; i < 3; i++){
                  $('<p/>').html(categories[4].choices[0][i]).addClass('choices').attr('value', "" + categories[4].choices[0][i] + "").appendTo($choices)
                  $question.text(categories[4].questions[0])
                  $answer.attr('value', 'Her battle with depression.')
                  createModal();
                }
            }
    })
  }


// GET ANSWERS OUT OF THE CATEGORIES OBJECT


//===================================================


// start game

  const startGame = () => {
        $('#start').on('click', ()=>{
            showModal();
            $('.row-2').css('display', 'flex')
            $('#start').hide();
        })
  };

//===================================================

startGame();



})//end window onload