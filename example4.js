var x=0;
var y=0;
var ySpeed=-20;
var randomChar;
var temp = [];
var balls = [];
var diffXpos = 20
var diffYpos = 0;
var timer = 0;
var score=0;
var gameover
var lost
var lostBalls = 0;

//creatingCanvas,loading backgrounds
function setup(){
    createCanvas(1000,600);
    bg=loadImage("drawing.svg");    
		gameover=loadImage("mi.svg");
    lost=loadImage("copy.svg");
}


function draw(){
	clear();  
	background(bg);
	  
  fill(255);
  y=y+ySpeed;
	x += 50;

	//making many balls to move randomly
	if (balls.length <1){	
		diffXpos=20;
		for(var ball=0;ball<12;ball++){
			randomChar = random(65, 90);
			temp.push(randomChar);			 
			var ballObject = {
					xpos: diffXpos,
					ypos: 0,
					yspeed: random(1,0),
					char: String.fromCharCode(temp[ball]),		
			}
			diffXpos  += 80; 
			balls.push(ballObject);
			
		}
		
	}

//setting same speed for text and the ball to be the same.
	for (var i = 0; i< balls.length; i++){
				fill(155,80,155);
				balls[i].ypos = balls[i].ypos + balls[i].yspeed;
				ellipse(balls[i].xpos,balls[i].ypos,30,30);
				fill(255,200,255);
				text(balls[i].char, balls[i].xpos - 4, balls[i].ypos + 2);
       
	}
  for(var ball=10;ball<10;ball++){
     var randomball=random(balls[i].xpos );
     ball(balls[i].xpos,randomXpos,30,30);
     
  }

//setting the appearance of the scoreboard
 textSize(20);
 text("score: "+score,900,60);


// making a balls and letter in it to disappear
for (var i = 0; i< balls.length; i++){
	if (balls[i].char === key){
		balls.splice(i, 1);
				 score=score+20       
        	
			}
}
	if (balls.length>600){
   clear(bg)
   background(80);

	}
	
if (frameCount % 30 == 0){
	timer++;
}

//setting timer 
if (timer>=60){
	 clear();
	 background(gameover);
	 reload
}
	

//desplaying timer
 text("time: " + timer,900,30);
    fill(255,0,255);


// if 5 balls go outside the canvas then game over
for (var i = 0; i < balls.length ; i++){
	if (balls[i].ypos >= 600){
		lostBalls++;
		console.log(lostBalls);
	}
}

//setting lossing point when five balls go bellow the canvas
if (lostBalls >=10){
	clear();
	background(lost);

}





var x=0;
var y=0;
var ySpeed=-20;
var randomChar;
var temp = [];
var balls = [];
var diffXpos = 20
var diffYpos = 0;
var timer = 0;
var score=0;
var gameover
var lost
var lostBalls = 0;

//creatingCanvas,loading backgrounds
function setup(){
    createCanvas(1000,600);
    bg=loadImage("drawing.svg");    
		gameover=loadImage("mi.svg");
    lost=loadImage("copy.svg");
}


function draw(){
	clear();  
	background(bg);
	  
  fill(255);
  y=y+ySpeed;
	x += 50;

	//making many balls to move randomly
	if (balls.length <1.){	
		diffXpos=20;
		for(var ball=0;ball<12;ball++){
			randomChar = random(65, 90);
			temp.push(randomChar);			 
			var ballObject = {
					xpos: diffXpos,
					ypos: 0,
					yspeed: random(1,0),
					char: String.fromCharCode(temp[ball]),		
			}
			diffXpos  += 80; 
			balls.push(ballObject);
			
		}
		
	}

//setting same speed for text and the ball to be the same.
	for (var i = 0; i< balls.length; i++){
				fill(155,80,155);
				balls[i].ypos = balls[i].ypos + balls[i].yspeed;
				ellipse(balls[i].xpos,balls[i].ypos,30,30);
				fill(255,200,255);
				text(balls[i].char, balls[i].xpos - 4, balls[i].ypos + 2);
       
	}
  for(var ball=10;ball<10;ball++){
     var randomball=random(balls[i].xpos );
     ball(balls[i].xpos,randomXpos,30,30);
     
  }

//setting the appearance of the scoreboard
 textSize(20);
 text("score: "+score,900,60);


// making a balls and letter in it to disappear
for (var i = 0; i< balls.length; i++){
	if (balls[i].char === key){
		balls.splice(i, 1);
				 score=score+20       
        	
			}
}
	if (balls.length>600){
   clear(bg)
   background(80);

	}
	
if (frameCount % 30 == 0){
	timer++;
}

//setting timer 
if (timer>=60){
	 clear();
	 background(gameover);
	 reload
}
	

//desplaying timer
 text("time: " + timer,900,30);
    fill(255,0,255);


// if 5 balls go outside the canvas then game over
for (var i = 0; i < balls.length ; i++){
	if (balls[i].ypos >= 600){
		lostBalls++;
		console.log(lostBalls);
	}
}

//setting lossing point when five balls go bellow the canvas
if (lostBalls >=10){
	clear();
	background(lost);
	noLoop();
}

}
}
