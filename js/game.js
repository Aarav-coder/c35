class Game{
    constructor(){
    
    }
    getState(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
            gameState = data.val();

        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new player();
            player.getCount();
            form = new FormData();
            form.display();
        }
    }
}