class Form {

    constructor() {
      this.input = createInput("Name");
      this.dob = createInput("Date of Birth"); 
      //dd/mm/yyyy -- > 21/10/1998
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    //   this.reset = createButton("Reset"); 
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.dob.hide(); 
    }
  
    display(){
      var title = createElement('h3'); 
      title.html("Zodiac Stars");
      title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 60, displayHeight/2 + 40);
      this.button.position(displayWidth/2 - 20, displayHeight/2+ 120);
      //this.reset.position(displayWidth - 100, 20); 
      this.dob.position(displayWidth/2 -60,displayHeight/2 + 80); 
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.dob.hide();
        this.button.hide();

        var dateOfBirth = this.dob.value(); // 20/11/2007
        var date = dateOfBirth.slice(0,2);
        var month = dateOfBirth.slice(3,5);

        if ((date >= 21 || date <=19) && (month == 3 || month == 4)){
          player.zodiac = "aries";
          playerImage = loadImage("Characters/Aries.png");

        }
        if ((date >= 20 || date <=20) && (month == 4 || month == 5)){
          player.zodiac = "taurus";
          playerImage = loadImage("Characters/Taurus.png");
        }
        if ((date >= 21 || date <=21) && (month == 5 || month == 6)){
          player.zodiac = "gemini";
          playerImage = loadImage("Characters/Gemini.png");

        }
        if ((date >= 22 || date <=22) && (month == 6 || month == 7)){
          player.zodiac = "cancer";
          playerImage = loadImage("Characters/Cancer.png");
        }
        if ((date >= 23 || date <=22) && (month == 7 || month == 8)){
          player.zodiac = "leo";
          playerImage = loadImage("Characters/Leo.png");
        }
        if ((date >= 23 || date <=22) && (month == 8 || month == 9)){
          player.zodiac = "virgo";
          playerImage = loadImage("Characters/Virgo.png");
        }
        if ((date >= 23 || date <=23) && (month == 9 || month == 10)){
          player.zodiac = "libra";
          playerImage = loadImage("Characters/Libra.png");
        }
        if ((date >= 24 || date <=21) && (month == 10 || month == 11)){
          player.zodiac = "scorpio";
          playerImage = loadImage("Characters/Scorpio.png");
        }
        if ((date >= 22 || date <=21) && (month == 11 || month == 12)){
          player.zodiac = "sagitarius";
          playerImage = loadImage("Characters/Sagitarius.png");
        }
        if ((date >= 22 || date <=19) && (month == 12 || month == 1)){
          player.zodiac = "capricorn";
          playerImage = loadImage("Character/Capricorn.png");
        }
        if ((date >= 20 || date <=18) && (month == 1 || month == 2)){
          player.zodiac = "aquarius";
          playerImage = loadImage("Characters/Aquarius.png");
        }
        if ((date >= 19 || date <=20) && (month == 2 || month == 3)){
          player.zodiac = "pisces";          
          playerImage = loadImage("Characters/Pisces.png");
        }
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 -70, displayHeight/4);
      });
       
    //   this.reset.mousePressed(()=>{
    //    player.updateCount(0);
    //    game.update(0); 
    //   })
      
    }
  }