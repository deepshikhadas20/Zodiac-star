class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      background(backgroundImage);
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display(); 
      }
      player1 = createSprite(100,200); 
      //car1.addImage(carImg1); 
      player2 = createSprite(300,200); 
      //car2.addImage(carImg2); 
    players = [player1 , player2]; 
  
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
    //     background(groundImg); 
    //     image(trackImage,0,-displayHeight * 4, displayWidth, displayHeight * 5)
        var i = 0 ; 
        var x = 200; 
        var y = 200; 
        for(var plr in allPlayers){ // {player1:{name: "a", distance: 200},
                                    //  player2:{name: "b", distance: 500} }
          i = i + 1; 
          x = x + 200; 
          y = 200;
          players[i - 1].x= x; 
          players[i - 1].y= y; 
          players[i - 1].addImage(playerImage);

          if(i===player.index){
            // cars[i-1].shapeColor = "red"; 
            // camera.position.x = displayWidth/2; 
            // camera.position.y = cars[i-1].y; 
            fill(132,105,172); 
            text(player.name, x - 40, y + 80); 
           
            
          }
        }
      }
  
    //   if(keyIsDown(UP_ARROW) && player.index !== null){
    //     player.distance +=50
    //     player.update();
    //   }
    //   if(player.distance > 4300){ 
    //     gameState = 2 ; 
    //   }
      drawSprites(); 
    }
    // end(){ 
    //   console.log("the game has ended.")
  //  }
  }