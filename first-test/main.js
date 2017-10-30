
var player1Controls =[87, 83, 68, 65];
var player2Controls =[38, 40, 39, 37];

window.onload = function(){

  //Object keys
  var keyPressed = {};

  //Create Canvas
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var player1 = new Player (ctx, keyPressed, player1Controls);
  var player2 = new Player (ctx, keyPressed, player2Controls);

  //Make Board
  var board = new Board(ctx);
  //Make players list
  var players = [];
  players.push(player1);
  players.push(player2);

  //Board Time!
  setInterval(function(){
    playerControls(keyPressed, player1, player2);
    board.update(players);
  }, 1000/24);
  //setInterval(playerControls(keyPressed, player1, player2), 30);

  //Métodos para coger las teclas en función de los jugadores
  document.onkeydown = function(e){
    keyPressed[e.keyCode] = true;
    //playerControls(keyPressed, player1, player2);
  }

  document.onkeyup = function(e){
    delete keyPressed[e.keyCode];
  }
}

function playerControls (keyPressed, player1, player2) {
  //Player 1
  if(keyPressed[87])player1.moveUp();
  if(keyPressed[83])player1.moveDown();
  if(keyPressed[68])player1.moveRight();
  if(keyPressed[65])player1.moveLeft();

  //Player 2
  if(keyPressed[38])player2.moveUp();
  if(keyPressed[40])player2.moveDown();
  if(keyPressed[39])player2.moveRight();
  if(keyPressed[37])player2.moveLeft();
}
