$(()=>{

let round = 0;
let score1 = 0;
let score2 = 0;




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


  const currentCategory = () => {
    $('#categories button').on('click', (e) => {
        $currentCategory = $(e.currentTarget).val()
            if ($currentCategory === categories[0].name){
              console.log("When you wish upon a star.");
            }
                else if ($currentCategory === categories[1].name) {
                  console.log("Buffy is alive.");
                }
                    else if ($currentCategory === categories[2].name) {
                        console.log("A long time ago, in a galaxy, far, far away...");
                    }
                          else if ($currentCategory === categories[3].name) {
                              console.log("All the superheroes!");
                          }
                              else if ($currentCategory === categories[4].name) {
                                  console.log("The boy who lived.");
                              }
    })
  }


// GET QUESTIONS OUT OF THE CATEGORIES OBJECT

  const getQuestions = () => {
    $
  }

// GET CHOICES OUT OF THE CATEGORIES OBJECT



// GET ANSWERS OUT OF THE CATEGORIES OBJECT
//===================================================

//rounds



//score


//check for win/loss/tie/no further plays/continue on


// start game

  const startGame = () => {
        $('#start').on('click', ()=>{

            $('.row-2').css('display', 'flex')
            $('#start').hide();
        })
  };

//===================================================

startGame();
currentCategory();

})//end window onload
