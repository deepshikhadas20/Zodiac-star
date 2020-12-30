var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var player1, player2, players; 
var groundImg; 
var playerImage;



function preload(){
//  carImg1 = loadImage("images/car1.png");
//  carImg2 = loadImage("images/car2.png");
//  carImg3 = loadImage("images/car3.png");
//  carImg4 = loadImage("images/car4.png");

//  trackImage = loadImage("images/track.jpg"); 
 backgroundImage = loadImage("bg.jpg"); 

}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();  
  game.getState();                          
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){ 
    clear();
    game.play();
  }
//   if(gameState===2){ 
//     game.end(); 
//   }

}