$(start);

var $squares;
var count;
var score;
var level;
var intervalSpeed;
var scale;
var arrayNumber;
var timer;
var imagesInterval;
var objects = [
  {
    name: 'safeplanet1',
    image: 'safeplanet1',
    speed: 2000,
    points: 5
  }, {
    name: 'safeplanet2',
    image: 'safeplanet2',
    speed: 2000,
    points: 5
  }, {
    name: 'thesun',
    image: 'thesun',
    speed: 2000,
    points: -10
  }, {
    name: 'earth',
    image: 'earth',
    speed: 2000,
    points: 10
  }
];

function start() {
  $squares      = $('li');
  count         = 25;
  score         = 0;
  level         = 1;
  intervalSpeed = 2000;

  $('.countdown').html(count);
  $('.bulk').hide();
  $('.level').html('Space Landing: Level ' + level);
  $('button').on('click', begin);
}

function begin() {
  $('.intro').hide();
  $('.bulk').show();
  // Initially hide start button
  $(this).hide();
  timer          = setInterval(countdownTimer, 1000);
  imagesInterval = setInterval(go, intervalSpeed);
}

function countdownTimer() {
  $('.countdown').each(changeTimer);
}

function changeTimer() {
  count = parseInt($(this).html());
  if (count !== 0) {
    $(this).html(count - 1);
  } else if (count <= 0){
    clearInterval(timer);
    clearInterval(imagesInterval);

    if (score >= 25) {
      $('.winner').fadeIn('slow');
      $('.winner').html('Well done! on to the next level');
      level += 1;
      nextLevel();
    } else {
      $('.winner').fadeIn('slow');
      $('.winner').html('Game Over.  Try Again.');
      reset();
    }
  }
}

function go() {
  var $random = $($squares[Math.floor(Math.random() * $squares.length)]);
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
  var randomObject = objects[parseInt(arrayNumber)];

  $random.css('background-image', 'url("images/' + randomObject.image + '.png")');

  $random.one('click', function() {
    console.log('click');
    if ($(this).css('background-image') !== 'none') {
      var shootingStar = document.createElement('img');
      shootingStar.setAttribute('src', 'images/shootingstars.png');
      $(this).append(shootingStar);
      document.getElementById('laser').play();
      console.log($('#audio'));
      $('#scoreboard').html(score += randomObject.points);
      $(this).css('background-image', 'none');
    }
  });

  setTimeout(function() {
    $('ul li img').remove();
    $random.css('background-image', 'none');
  }, randomObject.speed);
}

function reset() {
  $('.winner').fadeOut('slow');
  count = 25;
  level = 1;
  $('.countdown').html(count);
  $('.level').html('Space Landing: Level ' + level);
  timer = '';
  imagesInterval = '';
  score = 0;
  intervalSpeed = 2000;
  $('#scoreboard').html('Score');
  $('button').show();
}

function nextLevel() {
  console.log('Now the level is', level);
  if (level === 2) {
    intervalSpeed -= 200;
    count = 20;
    $('.countdown').html(count);
    $('.level').html('Level ' + level);
    score = 0;
    $('button').show();
    $('.winner').fadeOut('slow');
    $('#scoreboard').html('Score');
  } else if (level === 3) {
    intervalSpeed -= 200;
    count = 15;
    $('.countdown').html(count);
    $('.level').html('Space Landing: Level ' + level);
    score = 0;
    console.log(intervalSpeed);
    $('button').show();
    $('.winner').fadeOut('slow');
    $('#scoreboard').html('Score');
  } else {
    $('.winner').html('Congratulations, you have completed the game!');
    $('.winner').fadeOut('slow');
    $('button').show();
    $('#scoreboard').html('Score');
    reset();
  }
}
