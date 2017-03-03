#Space Landing


## Overview

![image](http://i.imgur.com/C1nfcc9.png)

![image](http://i.imgur.com/iO1pLlG.png)

**Space Landing** was my first project for the Web Development Immersive course at General Assembly.  It was built using HTML5, CSS3 and JavaScript / jQuery. 

The Game can be played here: [Space Landing](https://nameless-wave-41114.herokuapp.com/).

## How to Play

**Space Landing** is modelled on a **Whack-A-Mole** game. The object of the game is to click on all of the safe planets the astronaut could land on before they disappear, but avoid clicking the sun. Safe planets earn you points, but clicking on the sun results in minus points.  As you progress through the levels, the speed and the amount of points needed to complete also increase. 


## JavaScript / jQuery Overview

I used a simple 3x3 grid constructed with li's and CSS.  The various planets were modelled as an array of objects, each of which included the image, the number of points earned and the length of time the image would stay on the screen for. 

I used Math.Random to randomly select which li the image would appear, as well as Math.Random to generate which image would appear, although I made the higher-scoring items less likely to appear based on probability.

I used a countdown timer in order to track when the game would be completed, as well as a function for resetting the game if the player lost, or progressing to the next levels with higher speeds.  


## CSS and Design

For this first project, I found it challenging to commit to a specific design and theme.  I initially conceptualized something very different in which I wanted to draw my own characters and use them, but without a background in graphic design I found this much more difficult to execute than I expected to and I realised it did not translate well into a game.  

For the purposes of this project, I was able to pull something together before the deadline.  The project was a great lesson in the importance of planning ahead, and finding a theme and committing to it.


## Additional Features to Add or Change

If I had had more time to complete the project, I would have made the distinction between different levels clearer, added more animations and incoporated multiple images appearing at once. 

