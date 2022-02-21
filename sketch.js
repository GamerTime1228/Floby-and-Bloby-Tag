// These are the variables needed for the game
var gameState = 1;
// INTRO = 1
// STORY = 2
// START = 3
// GAME = 4
// FLOB = 5
// BLOB1 = 6
// BLOB2 = 7
// BLOB3 = 8
// LEADERBOARD = 9
// THANKS1 = 10
// THANKS2 = 11

var score = 0;
var score2 = 0;
var lives = 3;
var stamina = 100;
var introTimer = 0;
var level = 1;

var blob;
var flob;
var EXblob;
var EXflob;
var glod;
var glodButton;
var startButton;
var intro;
var gameTitle;
var introText;
var artwork;
var leaderboard;

var blobImageDown;
var blobImageUp;
var blobImageLeft;
var blobImageRight;
var blobImageWin;
var flobImageLeft;
var flobImageRight;
var flobImageUp;
var flobImageDown;
var flobImageWin;
var glodImage;
var titleImage;
var introTextImage;
var introImage;
var artworkImage;
var leaderboard1Image;
var leaderboard2Image;
var leaderboard3Image;
var leaderboard4Image;
var leaderboard5Image;
var leaderboard6Image;

function preload() {
    blobImageDown = loadImage("B_down3.gif");
    blobImageUp = loadImage("B_up3.gif");
    blobImageLeft = loadImage("B_left3.gif");
    blobImageRight = loadImage("B_right3.gif");
    blobImageWin = loadImage("B_Win4.gif");
    flobImageLeft = loadImage("F_left3.gif");
    flobImageRight = loadImage("F_right3.gif");
    flobImageUp = loadImage("F_up3.gif");
    flobImageDown = loadImage("F_down3.gif");
    flobImageWin = loadImage("F_Win4.gif");
    glodImage = loadImage("glod.gif");
    introImage = loadImage("intro3.png");
    introTextImage = loadImage("introText3.png");
    titleImage = loadImage("title.png");
    artworkImage = loadImage("artwork3.png");
    leaderboard1Image = loadImage("LB11.png");
    leaderboard2Image = loadImage("LB22.png");
    leaderboard3Image = loadImage("LB33.png");
    leaderboard4Image = loadImage("LB44.png");
    leaderboard5Image = loadImage("LB55.png");
    leaderboard6Image = loadImage("LB66.png");
}

function setup() {
    createCanvas(500, 500);

    // blob
    blob = createSprite(250, 250);
    blob.addImage(blobImageDown);
    blob.scale = 1;
    blob.y = 250;
    blob.visible = false;

    // flob
    flob = createSprite(50, 150);
    flob.addImage(flobImageRight);
    flob.scale = 1;
    flob.visible = false;
    

    // blob on title screen
    EXblob = createSprite(250, 275);
    EXblob.addImage(blobImageDown);
    EXblob.scale = 1;

    // flob on title screen
    EXflob = createSprite(50, 275);
    EXflob.addImage(flobImageRight);
    EXflob.scale = 1;

     // The gamer time logo at the start of the game
    intro = createSprite(250, 250);
    intro.addImage(introImage);
    intro.scale = 0;
    intro.visible = true;

    // The title of the game
    gameTitle = createSprite(250, 115);
    gameTitle.addImage(titleImage);
    gameTitle.scale = 1.25;
    gameTitle.visible = false;

    // the story text
    introText = createSprite(250, 1000);
    introText.addImage(introTextImage);
    introText.scale = 0.65;
    introText.visible = true;

    // the leaderboard
    leaderboard = createSprite(250, 400);
    leaderboard.scale = 0.65;
    leaderboard.visible = false;

    // the artwork at the end of game 
    artwork = createSprite(-300, 175);
    artwork.scale = 1.25;
    artwork.visible = false;
}

function draw() {
    background("green");
    // A timer that goes through the entire game (only used for intro tho)
    introTimer += 0.1;
    console.log(gameState);
    console.log(level);

    // reload the game with 'R' key & close the game with the escape key
    if(keyDown("r")) {
        location.reload();
    }

    if(keyDown("esc")) {
        window.close();
        Location.reload();
    }

    // intro animation
    if(gameState === 1) {
        background("black");
        blob.visible = false;
        flob.visible = false;
        EXflob.visible = false;
        EXblob.visible = false;
        gameTitle.visible = false;
        EXblob.x = 250;
        EXflob.x = 50;

        // Make the logo grow until a certain point
        if(introTimer < 10) {
            intro.scale = intro.scale + 0.0065
        }

        // after ad, start the game
        if(introTimer > 25 && introTimer < 85) {
            gameState = 2
        }

    }

    // the story of the game with scrolling animation
    if(gameState === 2) {
        background("black")
        intro.velocityY = -2;
        introText.velocityY = -2;

        // Enter the title screen
        if(introTimer >= 85) {
            gameState = 3;
        }
    }

    // start screen
    if(gameState === 3) {
        // all changes required for gameplay
        background("green");
        blob.visible = false;
        flob.visible = false;
        EXblob.visible = true;
        EXflob.visible = true;
        gameTitle.visible = true;
        intro.visible = false;
        artwork.visible = false;
        leaderboard.visible = false;
        flob.y = 0;
        flob.x = 0;
        blob.x = 250;
        blob.y = 250;
        flob.addImage(flobImageRight);
        blob.addImage(blobImageDown);
        blob.x = 250;
        EXblob.addImage(blobImageRight);
        EXflob.addImage(flobImageRight);
        level = 1;
        lives = 3;
        score = 0;
        stamina = 100;
        EXblob.velocityX = 15;
        EXflob.velocityX = 15;

        // animation for title screen
        if(EXblob.x >= 500 && EXblob.y === 275) {
            EXblob.x = 0;
            EXblob.y = 350;
            EXblob.velocityX = 15;
        }
        if(EXblob.x >= 500 && EXblob.y === 350) {
            EXblob.x = 0;
            EXblob.y = 275;
            EXblob.velocityX = 15;
        }
        if(EXflob.x >= 500 && EXflob.y === 275) {
            EXflob.x = 0;
            EXflob.y = 350;
            EXflob.velocityX = 15;
        }
        if(EXflob.x >= 500 && EXflob.y === 350) {
            EXflob.x = 0;
            EXflob.y = 275;
            EXflob.velocityX = 15;
        }

        //start your game
        if(keyDown("space")) {
            gameState = 4;
        }

    }

    // the gameplay
    if (gameState === 4) {
        // removing start screen sprites and starting gameplay
        EXblob.visible = false;
        EXflob.visible = false;
        blob.visible = true;
        flob.visible = true;
        gameTitle.visible = false;
        blob.scale = 1;
        flob.scale = 1;
        score = score + 2;

        // blob's movement
        if(keyDown("left") || keyDown("a")) {
            blob.x -= 10;
            blob.addImage(blobImageLeft);
        }

        if(keyDown("right") || keyDown("d")) {
            blob.x += 10;
            blob.addImage(blobImageRight);
        }

        if(keyDown("up") || keyDown("w")) {
            blob.y -= 12.5;
            blob.addImage(blobImageUp);
        }

        if(keyDown("down") || keyDown("s")) {
            blob.y += 12.5;
            blob.addImage(blobImageDown);
        }

        // flob's AI movement in each level
        if(level === 1) {
            background("green")
            if(score === 0) {
                flob.velocityX = 5;
            }

            if (blob.y < flob.y) {
                flob.velocityY = -5.5;
            }

            if (blob.y > flob.y) {
                flob.velocityY = 5.5;
            }

            if (score >= 1000 && score < 1003) {
                gameState = 6;
            }

        }

        if(level === 2){ 
            if (flob.velocityX === -5) {
                flob.velocityY = -5;
            }
        
            if (flob.velocityX === 5) {
                flob.velocityY = 5;
            }

            if (blob.x < flob.x) {
                flob.velocityX = -4.5;
            }
    
            if (blob.x > flob.x) {
                flob.velocityX = 4.5;
            }

            if (score >= 2500 && score < 2503) {
                gameState = 7;
            }
        }

        if(level === 3){         
            if (blob.x < flob.x) {
                flob.x = flob.x - 5;
            }

            if (blob.x > flob.x) {
                flob.x = flob.x + 5;
            }

            if (score >= 5000 && score < 5003) {
                gameState = 8;
            }
        }
        
        if(level === 4) {
            background("green")
            if(score === 0) {
                flob.velocityX = 5.5;
            }

            if (blob.y < flob.y) {
                flob.velocityY = -6;
            }

            if (blob.y > flob.y) {
                flob.velocityY = 6;
            }

            if (score >= 7500 && score < 7503) {
                gameState = 6;
            }

        }

        if(level === 5){ 
            if (flob.velocityX === -5.5) {
                flob.velocityY = -7;
            }
        
            if (flob.velocityX === 5.5) {
                flob.velocityY = 7;
            }

            if (blob.x < flob.x) {
                flob.velocityX = -6;
            }
    
            if (blob.x > flob.x) {
                flob.velocityX = 6;
            }

            if (score >= 10000 && score < 10003) {
                gameState = 7;
            }
        }

        if(level === 6){         
            if (blob.x < flob.x) {
                flob.x = flob.x - 5;
            }

            if (blob.x > flob.x) {
                flob.x = flob.x + 5;
            }

            if (score >= 12500 && score < 12503) {
                gameState = 8;
            }
        }

        if(level === 7) {
            background("green")
            if (blob.y < flob.y) {
                flob.velocityY = -7;
            }

            if (blob.y > flob.y) {
                flob.velocityY = 7;
            }

            if (score >= 15000 && score < 15003) {
                gameState = 6;
            }

        }

        if(level === 8){ 
            if (flob.velocityX === -7.5) {
                flob.velocityY = -8;
            }
        
            if (flob.velocityX === 7.5) {
                flob.velocityY = 8;
            }

            if (blob.x < flob.x) {
                flob.velocityX = -8;
            }
    
            if (blob.x > flob.x) {
                flob.velocityX = 8;
            }

            if (score >= 17500 && score < 17503) {
                gameState = 7;
            }
        }

        if(level === 9){         
            if (blob.x < flob.x) {
                flob.x = flob.x - 5;
            }

            if (blob.x > flob.x) {
                flob.x = flob.x + 5;
            }

            if (score >= 20000 && score < 20003) {
                gameState = 8;
            }
        }

        if(level === 10) {
            background("green")
            if (blob.y < flob.y) {
                flob.velocityY = -9;
            }

            if (blob.y > flob.y) {
                flob.velocityY = 9;
            }

            if (score >= 22500 && score < 22503) {
                gameState = 6;
            }

        }

        if(level === 11){ 
            if (flob.velocityX === -8.5) {
                flob.velocityY = -10;
            }
        
            if (flob.velocityX === 8.5) {
                flob.velocityY = 10;
            }

            if (blob.x < flob.x) {
                flob.velocityX = -10;
            }
    
            if (blob.x > flob.x) {
                flob.velocityX = 10;
            }

            if (score >= 25000 && score < 25003) {
                gameState = 7;
            }
        }

        if(level === 12){         
            if (blob.x < flob.x) {
                flob.x = flob.x - 5;
            }

            if (blob.x > flob.x) {
                flob.x = flob.x + 5;
            }

            if (score >= 30000 && score < 30003) {
                gameState = 5;
            }
        }

        //blob's stamina
        if(keyDown("enter") && stamina > 0) {
            stamina -= 0.5;

            if(keyDown("left")) {
                blob.x -= 20;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 20;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 25;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 25;
                blob.addImage(blobImageDown);
            }
        }

        if(keyDown("enter") && stamina <= 0) {
            if(keyDown("left")) {
                blob.x -= 0;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 0;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 0;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 0;
                blob.addImage(blobImageDown);
            }
        }

        // making barriers
        if(level === 1 || level === 4 || level === 7 || level === 10) {
            if(flob.x <= 40 && level === 1) {
                flob.velocityX = 6.5;
                flob.addImage(flobImageRight);
            }

            if(flob.x <= 40 && level === 4) {
                flob.velocityX = 7.5;
                flob.addImage(flobImageRight);
            }

            if(flob.x <= 40 && level === 7) {
                flob.velocityX = 8.5;
                flob.addImage(flobImageRight);
            }

            if(flob.x <= 40 && level === 10) {
                flob.velocityX = 10.5;
                flob.addImage(flobImageRight);
            }

            if(flob.x >= 460 && level === 1) {
                flob.velocityX = -6.5;
                flob.addImage(flobImageLeft);
            }

            if(flob.x >= 460 && level === 4) {
                flob.velocityX = -7.5;
                flob.addImage(flobImageLeft);
            }

            if(flob.x >= 460 && level === 7) {
                flob.velocityX = -8.5;
                flob.addImage(flobImageLeft);
            }

            if(flob.x >= 460 && level === 10) {
                flob.velocityX = -10.5;
                flob.addImage(flobImageLeft);
            }
        }

        if(level === 2 || level === 5 || level === 8 || level === 11) {
            if(flob.y <= 110 && level === 2) {
                flob.velocityY = 5.5;
                flob.addImage(flobImageDown);
            }

            if(flob.y <= 110 && level === 5) {
                flob.velocityY = 6;
                flob.addImage(flobImageDown);
            }

            if(flob.y <= 110 && level === 8) {
                flob.velocityY = 7;
                flob.addImage(flobImageDown);
            }

            if(flob.y <= 110 && level === 11) {
                flob.velocityY = 9;
                flob.addImage(flobImageDown);
            }

            if(flob.y >= 460 && level === 2) {
                flob.velocityY = -5.5;
                flob.addImage(flobImageUp);
            }

            if(flob.y >= 460 && level === 5) {
                flob.velocityY = -6;
                flob.addImage(flobImageUp);
            }

            if(flob.y >= 460 && level === 8) {
                flob.velocityY = -7;
                flob.addImage(flobImageUp);
            }

            if(flob.y >= 460 && level === 11) {
                flob.velocityY = -9;
                flob.addImage(flobImageUp);
            }
        }

        if(level === 3 || level === 6 || level === 9 || level === 12) {
            if(flob.y >= 460 || flob.x >= 460) {
                flob.velocityX = -5.5
                flob.velocityY = -5.5;
                flob.addImage(flobImageLeft);
            }
              
            
            if(flob.y <= 110 || flob.x <= 40) {
                flob.velocityX = 5.5
                flob.velocityY = 5.5;
                flob.addImage(flobImageRight);
            }              
        }

        if(blob.x <= 40) {
            blob.x = 50;
        }

        if(blob.x >= 460) {
            blob.x = 450;
        }

        if(blob.y <= 100) {
            blob.y = 110;
        }

        if(blob.y >= 460) {
            blob.y = 450;
        }

        // live system and collisions between flob and blob
        if(flob.isTouching(blob) && lives > 0) {
            lives -= 1;
            if(blob.x >= 250) {
                if(level === 1 || level === 3 || level === 4 || level === 6 || level === 7 || level === 9 || level === 10 || level === 12) {
                    flob.x = flob.x - 200;
                }
            }

            if(blob.y >= 250) {
                if(level === 2 || level === 5 || level === 8 || level === 11) {
                    flob.y = flob.y - 200;
                }
            }

            if(blob.x < 250) {
                if(level === 1 || level === 3 || level === 4 || level === 6 || level === 7 || level === 9 || level === 10 || level === 12) {
                    flob.x = flob.x + 200;
                }
            }

            if(blob.y < 250) {
                if(level === 2 || level === 5 || level === 8 || level === 11) {
                    flob.y = flob.y + 200;
                }
            }

           
            
        }

        if(lives === 0) {
            gameState = 5;
        }

    }

    // flob lose screen
    if(gameState === 5) {
        blob.visible = false;
        flob.x = 250;
        flob.y = 250;
        flob.addImage(flobImageWin);
        flob.scale = 1.25;

        if(score > score2) {
            score2 = score;
        }
        if(score < score2) {
            score2 = score2;
        }

        if(keyDown("enter")) {
            gameState = 9;
            EXblob.x = 250;
            EXflob.x = 50;
        } 
    }

    // win screen for levels 1, 4, 7, and 10
    if(gameState === 6) {
        flob.visible = false;
        blob.x = 250;
        blob.y = 250;
        blob.addImage(blobImageWin);
        blob.scale = 1.25;

        if(keyDown("space") && level === 1) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4; 
            level = 2;           
        }

        if(keyDown("space") && level === 4) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4; 
            level = 5;           
        }

        if(keyDown("space") && level === 7) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4; 
            level = 8;           
        }

        if(keyDown("space") && level === 10) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4; 
            level = 11;           
        }
        
    }

    // win screen for levels 2, 5, 8, and 11
    if(gameState === 7) {
        flob.visible = false;
        blob.x = 250;
        blob.y = 250;
        blob.addImage(blobImageWin);
        blob.scale = 1.25;

        if(keyDown("space") && level === 2) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageRight);
            gameState = 4;
            level = 3;
        }
        
        if(keyDown("space") && level === 5) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageRight);
            gameState = 4;
            level = 6;
        }

        if(keyDown("space") && level === 8) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageRight);
            gameState = 4;
            level = 9;
        }

        if(keyDown("space") && level === 11) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageRight);
            gameState = 4;
            level = 12;
        }
    }

    // win screen for levels 3, 6, 9, and 12
    if(gameState === 8) {
        flob.visible = false;
        blob.x = 250;
        blob.y = 250;
        blob.addImage(blobImageWin);
        blob.scale = 1.25;

        if(keyDown("space") && level === 3) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4;
            level = 4;
        }

        if(keyDown("space") && level === 6) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4;
            level = 7;
        }

        if(keyDown("space") && level === 9) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4;
            level = 10;
        }

        if(keyDown("space") && level === 12) {
            blob.x = 250;
            blob.y = 250;
            blob.scale = 1;
            blob.addImage(blobImageDown);
            flob.x = 50;
            flob.y = 150;
            flob.addImage(flobImageDown);
            gameState = 4;
            level = 10;
        }        
    }

    // leaderboard screen
    if(gameState === 9) {
        flob.visible = false;
        leaderboard.visible = true;
        if(score < 1500) {
            leaderboard.addImage(leaderboard6Image);
        }
        if(score >= 1500 && score < 2500) {
            leaderboard.addImage(leaderboard5Image);
        }
        if(score >= 2500 && score < 3500) {
            leaderboard.addImage(leaderboard4Image);
        }
        if(score >= 3500 && score < 4500) {
            leaderboard.addImage(leaderboard3Image);
        }
        if(score >= 4500 && score < 10000) {
            leaderboard.addImage(leaderboard2Image);
        }
        if(score >= 10000) {
            leaderboard.addImage(leaderboard1Image);
        }
        if(keyDown("space")) {
            gameState = 10;
        }
    }

    // art screen scrolling
    if(gameState === 10) {
        artwork.addImage(artworkImage);
        artwork.visible = true;
        artwork.velocityX = 5;
        leaderboard.velocityX = 5;
        if(artwork.x === 250) {
            gameState = 11;
        }
    }

    // art screen
    if(gameState === 11) {
        artwork.velocityX = 0;
        leaderboard.velocityX = 0;
        if(keyDown("enter")) {
            EXblob.x = 250;
            EXflob.x = 50;
            artwork.x = -300;
            artwork.y = 175;
            leaderboard.x = 250;
            leaderboard.y = 400;
            gameState = 3;
        }
    }

    drawSprites();

    // text for each mode
    if(gameState === 2) {
        fill("darkBlue");
        textAlign(CENTER);
        textSize(15);
    }

    if(gameState === 3) {
        fill("black");
        textAlign(CENTER);
        textSize(15);
        text("By Jerod Abraham", 430, 490);
        textSize(20);
        text("Press SPACE to PLAY!", 250, 425);
        text("Press ESC to QUIT!", 250, 450);
    }

    if(gameState === 4) {
        fill("white");
        textSize(15);
        textAlign(CENTER);
        text("Score: " + score, 55, 25);

        // High Score
        if(score2 > 0) {
            text("High Score: " + score2, 60, 40);
        }

        if(score2 === 0) {
            text("High Score: " + score, 60, 40);
        }

        // lives
        text("Lives: " + lives, 450, 25);

        if(lives === 3) {
            text("You're doing great!", 250, 40);
        }

        if(lives === 2) {
            text("You're doing alright!", 250, 40);
        }

        if(lives === 1) {
            text("You're not doing too good!", 250, 40);
        }

        text("Stamina: " + stamina, 445, 40);

        // AI difficulty
        if(level == 1 || level == 2 || level == 3) {
            text("Floby Difficulty: NORMAL", 250, 25);
        }

        if(level == 4 || level == 5 || level == 6) {
            text("Floby Difficulty: INTERMEDIATE", 250, 25);
        }

        if(level == 7 || level == 8 || level == 9) {
            text("Floby Difficulty: HARD", 250, 25);
        }

        if(level == 10 || level == 11 || level == 12) {
            text("Floby Difficulty: IMPOSSIBLE", 250, 25);
        }

        text("Move around with the arrow keys! Don't get tagged by FLOBY 3 times!", 250, 55);
        text("Press ENTER to sprint! Don't run out of stamina!", 250, 70);
    }


    if(gameState === 5) {
        fill("white");
        textAlign(CENTER);
        textSize(35);
        text("Floby wins!", 250, 50);
        textSize(20);
        text("You lose!", 250, 75);
        textSize(20);
        text("Press ENTER to try again!", 250, 450);
        textSize(15);
        text("Score: " + score, 250, 470);
        text("High Score: " + score2, 250, 485);
    }

    if(gameState === 6) {
        fill("white");
        textAlign(CENTER);
        textSize(35);
        text("You made it past level " + level + "!", 250, 50);
        textSize(20);
        text("Press SPACE to continue!", 250, 450);
        textSize(15);
        text("Score: " + score, 250, 470);
    }

    if(gameState === 7) {
        fill("white");
        textAlign(CENTER);
        textSize(35);
        text("You made it past level " + level + "!", 250, 50);
        textSize(20);
        text("Press SPACE to continue!", 250, 450);
        textSize(15);
        text("Score: " + score, 250, 470);
    }

    if(gameState === 8) {
        fill("white");
        textAlign(CENTER);
        textSize(35);
        text("You made it past level " + level + "!", 250, 50);
        textSize(20);
        text("Press SPACE to continue!", 250, 450);
        textSize(15);
        text("Score: " + score, 250, 470);
    }

    if(gameState === 9) {
        fill("white");
        textAlign(CENTER);
        textSize(30);
        text(score, 330, 405);
        textSize(20);
        text("Press SPACE to continue!", 250, 475);
    }

    if(gameState === 11) {
        fill("white");
        textAlign(CENTER);
        if(score < 1500) {
            textSize(45);
            text("You didn't make top 5!", 250, 400);
        }
        if(score >= 1500 && score < 2500) {
            textSize(45);
            text("5th place! Cool!", 250, 400);
        }
        if(score >= 2500 && score < 3500) {
            textSize(45);
            text("4th place! Not bad!", 250, 400);
        }
        if(score >= 3500 && score < 4500) {
            textSize(45);
            text("3th place! Well done!", 250, 400);
        }
        if(score >= 4500 && score < 10000) {
            textSize(45);
            text("2th place! Congrats!", 250, 400);
        }
        if(score >= 10000) {
            textSize(45);
            text("1th place! Incredible!", 250, 400);
        }
        textSize(20);
        text("Press ENTER to play again!", 250, 450);
    }


    if(introTimer >= 10 && introTimer < 25 && gameState === 1) {
        fill("blue");
        textAlign(CENTER);
        textSize(30);
        text("Solo developed by Jerod Abraham!", 250, 50);
        textSize(20);
        text("from Shelton High School in Shelton, CT", 250, 80);
        textSize(20);
        text("Created for the 2022 CT FBLA Spring Competition!", 250, 450);
    }
}


 