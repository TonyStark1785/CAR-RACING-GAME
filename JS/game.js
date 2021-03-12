class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }
        update(state){
            database.ref('/').update({
                gameState:state
            })
    }
    async start(){
        if (gameState === 0){
            player=new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount()
            }
            form=new Form();
            form.display()
        }
    } 
    play(){
        form.hide();
        textSize(30)
        text("Start Game", 120, 100)
        Player.getPlayerInfo()
        if (allPlayers!==undefined){
            var displaypos=130
            for (var plr in allPlayers){
                if (plr ==="player"+player.index)
                    fill("yellow")
                else
                    fill("cyan")
            displaypos+=20
            textSize(14)
            text(allPlayers[plr].name+";"+allPlayers[plr].distance,120,displaypos);
            }

        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=15
            player.update();
        }
    }
    
}