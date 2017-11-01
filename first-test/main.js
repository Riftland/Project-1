

window.onload = function(){

  //Object keys
  var keyPressed = {};

  //Create Canvas
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var players = [];
  var player1 = new Player (ctx, keyPressed);
  var player2 = new Player (ctx, keyPressed);
  var player3 = new Player (ctx, keyPressed);

  //Make Board
  var board = new Board(ctx);

  //Make players list
  players.push(player1);
  players.push(player2);
  players.push(player3);

  //Initialize Game
  var game = new Game();

  //Initialize Powerups
  var powers = new Powerups(ctx);

  //Board Time!
  var counter = 0;
  //State for powerup aparition
  var state = false;
  setInterval(function(){
    playerControls(keyPressed, player1, player2, player3);
    board.update(players, powers, state);
    for(var a = 0; a < players.length; a++){
      for(var b = a + 1; b < players.length; b++){
        game.isOverlapping(players[a], players[b]);
      }
      if(state)state = game.catchPower(players[a], powers, state);
    }
    //Siempre que el state esté true no debe contar
    if(counter == 150){
      state = true;
      counter = 0;
    }
    if(!state)counter ++;
  }, 1000/24);

  //Métodos para coger las teclas en función de los jugadores
  document.onkeydown = function(e){
    keyPressed[e.keyCode] = true;
  }

  document.onkeyup = function(e){
    delete keyPressed[e.keyCode];
  }
}

function playerControls (keyPressed, player1, player2, player3) {

  //Player 1
  if(keyPressed[87])player1.moveUp();
  if(keyPressed[83])player1.moveDown();
  if(keyPressed[68])player1.moveRight();
  if(keyPressed[65])player1.moveLeft();
  if(keyPressed[32])player1.dash();

  //Player 2
  if(keyPressed[38])player2.moveUp();
  if(keyPressed[40])player2.moveDown();
  if(keyPressed[39])player2.moveRight();
  if(keyPressed[37])player2.moveLeft();
  if(keyPressed[96])player2.dash();

  //Player 3
  if(keyPressed[85])player3.moveUp();
  if(keyPressed[74])player3.moveDown();
  if(keyPressed[75])player3.moveRight();
  if(keyPressed[72])player3.moveLeft();
  if(keyPressed[76])player3.dash();

}
