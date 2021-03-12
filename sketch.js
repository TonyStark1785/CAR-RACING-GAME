var allPlayers, database, position;
var gameState=0;
var playerCount=0;
var distance=0;
var game, form, player;

function setup(){
    
    database=firebase.database();
    createCanvas(400,400);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount===4){
        game.update(1)
    }
    if (gameState===1){
        clear()
        game.play();
    }
}

