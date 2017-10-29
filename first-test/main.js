window.onload = function(){
  //Create Canvas
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  var keys = [
    {87: false},
    {83: false},
    {68: false},
    {65: false},
    {38: false},
    {40: false},
    {39: false},
    {37: false}
  ]

  //Make Board
  var board = new Board(ctx);
  //Make players list
  var players = [];
  var player = new Player(ctx);
  players.push(player);
  var player = new Player(ctx);
  players.push(player);

  //Board Time!
  board.timeLimit(players);

  //Key move Players
  document.onkeydown = function(e){
      if(keys[87])players[0].moveUp();
      if(keys[83])players[0].moveDown();
      if(keys[68])players[0].moveRight();
      if(keys[65])players[0].moveLeft();
      if(keys[38])players[1].moveUp();
      if(keys[40])players[1].moveDown();
      if(keys[39])players[1].moveRight();
      if(keys[37])players[1].moveLeft();
  }

  document.onkeydown = function(e){
    keys[e.keyCode] = true;
    console.log(keys[e.keyCode]);
  }

  document.onkeyup = function(e){
    keys[e.keyCode] = false;
    console.log(keys[e.keyCode]);
  }
}
