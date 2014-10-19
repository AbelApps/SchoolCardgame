function dealCard() {
    
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    var player1av = true;
    var player2av = true;
    var player3av = true;
    var player4av = true;
    
    var Heart = [7, 8, 9, 10, 11, 12, 13, 14];
    var Diamond = [7, 8, 9, 10, 11, 12, 13, 14];
    var Spade = [7, 8, 9, 10, 11, 12, 13, 14];
    var Club = [7, 8, 9, 10, 11, 12, 13, 14];
    
    var suitsavail = 4;
    var playeravail = 4;
    var allplayers = ["player1", "player2", "player3", "player4"];
    
    for (i = 1; i < 33; i++) {
        console.log(allplayers.length);
        var chosen = Math.floor(Math.random() * (allplayers.length + 1));
        console.log(chosen);
        switch(chosen) {
                case 0:
                var player = allplayers[0];
                break;
                case 1:
                var player = allplayers[1];
                break;
                case 2:
                var player = allplayers[2];
                break;
                case 3:
                 var player = allplayers[3];
                break;
        };
        
        if(player == "player1"){
            player = player1;
        };
        
        if(player == "player2"){
            player = player2;
        };
        
        if(player == "player3"){
            player = player3;
        };
        
        if(player == "player4"){
            player = player4;
        };
        
        player.push("kaart");
        
        if(player1av){
            if(player1.length == 8) {
                allplayers.splice(player1.indexOf(), 1)
                player1av = false;
            };
        };
        
        if(player2av){
            if(player2.length == 8) {
                allplayers.splice(player2.indexOf(), 1)
                player1av = false;
            };
        };
        
        if(player3av){
            if(player3.length == 8) {
                allplayers.splice(player3.indexOf(), 1)
                player1av = false;
            };
        };
        
        if(player4av){
            if(player4.length == 8) {
                allplayers.splice(player4.indexOf(), 1)
                player1av = false;
            };
        };
        console.log(player1);
        console.log(player2);
        console.log(player3);
        console.log(player4);
    };
};