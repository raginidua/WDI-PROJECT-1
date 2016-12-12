$(function() {

  var $squares = $('li');
  var randomObject;
  var $random;
  var count = 10;
  var timer;
  var imagesInterval;
  var score = 0;
  var scale;
  var arrayNumber;
  var level = 1;
  var intervalSpeed = 2000;

  $('.countdown').html(count);

  function beginGame() {
    $('button').on('click', function() {
      timer = setInterval(countdownTimer, 1000);
      imagesInterval = setInterval(go, intervalSpeed);
    });
  }

  beginGame();

  function countdownTimer() {
    $('.countdown').each(function() {
      count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      } else if (count <= 0){
        clearInterval(timer);
      }
    });
  }


  var objects = [
    {
      name: 'flower',
      image: 'https://s-media-cache-ak0.pinimg.com/236x/d9/17/04/d91704a05899fef30e676834fb93456e.jpg',
      speed: 1000,
      points: 1
    }, {
      name: 'worm',
      image: 'http://www.clipartkid.com/images/0/worm-clipart-cute-worm-clipart-clipart-worm-in-apple-rJIjz4-clipart.gif',
      speed: 1000,
      points: 1
    }, {
      name: 'cactus',
      image: 'http://res.cloudinary.com/hrscywv4p/image/upload/c_fill,f_auto,g_faces:center,h_200,q_90,w_200/v1/670625/cactus-tv-logo_rojwcn.png',
      speed: 1000,
      points: 1
    }, {
      name: 'bumblebee',
      image: 'https://s-media-cache-ak0.pinimg.com/236x/98/97/57/98975747a8471fa2bcbb0a047b30fd67.jpg',
      speed: 1000,
      points: 1
    }
  ];

  function go() {
    $random = $($squares[Math.floor(Math.random() * $squares.length)]);
    scale = Math.floor(Math.random() * 10);
    if (scale < 4) {
      arrayNumber = 0;
    } else if (scale < 7) {
      arrayNumber = 1;
    } else if (scale < 9) {
      arrayNumber = 2;
    } else {
      arrayNumber = 3;
    }
    randomObject = objects[parseInt(arrayNumber)];
    $($random).css('background-image', 'url(' + randomObject.image + ')');
    flash($random);
    if (count <= 0) {
      clearInterval(imagesInterval);
      $('#scoreboard').html('');
      if (score >= 3) {
        $('.winner').fadeIn('fast');
        $('.winner').html('Well done! on to the next level');
        level += 1;
        nextLevel(level);
      } else if (score < 3) {
        $('.winner').fadeIn('fast');
        $('.winner').html('Try again, you do not have enough points to get to the next level');
      }
    }
  }

  function nextLevel(holder) {
    if (holder === 2) {
      intervalSpeed -= 1000;
      count = 20;
      score = 0;
      console.log(intervalSpeed);
      beginGame();
    } else if (holder === 3) {
      console.log('hi');
    }
  }

  function flash(argument) {
    setTimeout(function() {
      argument.css('background-image', 'none');
    }, randomObject.speed);
    eventListener($random);
  }

  function eventListener(placeholder) {
    placeholder.one('click', function() {
      if (placeholder.css('background-image') !== 'none') {
        console.log(placeholder.css('background-image') !== 'none');
        $('#scoreboard').html(score += randomObject.points);
      }
    });
  }
});




// function Go ----
// var score = 0
// var counter = 0
// var squaresArray = [] (empty array)
// var playerScore = 0
// var Max = 10;
// var timerInterval - property of each object
// another function which is a timer where the count down happens - when it hits 0, you end the game
//

// Loop through the go function and include interval timing so that this happens repeatedly until the countdown timer is 0 and build the countdown timer
// Build a start button which corresponds with the countdown timer
// We need to store the points in a separate scoreboard, linked to successful clicks
//Make the game end and declare a winner at the end
