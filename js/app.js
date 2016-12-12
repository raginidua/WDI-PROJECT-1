$(function() {

  var $squares = $('li');
  var randomObject;
  var $random;

  // function Go ----
  // var score = 0
  // var counter = 0
  // var squaresArray = [] (empty array)
  // var playerScore = 0
  // var Max = 10;
  // var timerInterval - property of each object
  // another function which is a timer where the count down happens - when it hits 0, you end the game
  //


  var objects = [
    {
      name: 'flower',
      image: 'https://www.fillmurray.com/g/200/200',
      speed: 1500,
      points: 2
    }, {
      name: 'worm',
      image: 'http://lorempixel.com/200/200/',
      speed: 1000,
      points: 1
    }, {
      name: 'cactus',
      image: 'http://lorempixel.com/200/200/',
      speed: 1000,
      points: -1
    }, {
      name: 'bumblebee',
      image: 'http://lorempixel.com/200/200/sports',
      speed: 1000,
      points: -2
    }
  ];

  function go() {
    $random = $($squares[Math.floor(Math.random() * $squares.length)]);
    randomObject = objects[Math.floor(Math.random() * objects.length)];
    $($random).css('background-image', 'url(' + randomObject.image + ')');
    flash($random);
  }

  go();


  function flash(argument) {
    setTimeout(function() {
      argument.css('background-image', 'none');
    }, randomObject.speed);
    eventListener($random);
  }

  function eventListener(placeholder) {
    placeholder.on('click', function() {
      if (placeholder.css('background-image', 'none') !== true) {
        console.log(randomObject.points);
      }
    });



  }

});

// Loop through the go function and include interval timing so that this happens repeatedly until the countdown timer is 0 and build the countdown timer
// Build a start button which corresponds with the countdown timer
// We need to store the points in a separate scoreboard, linked to successful clicks
//Make the game end and declare a winner at the end
