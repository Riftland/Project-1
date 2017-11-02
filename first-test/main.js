var keyPressed = {};
var players = [];
var ctx;
window.onload = function(){
  //Create Canvas
  var canvas = document.getElementById('tutorial');
  ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  //Start the game!
  var game = new Game();
  game.start();

  //Capture keydown and keyup
  document.onkeydown = function(e){
    keyPressed[e.keyCode] = true;
  }

  document.onkeyup = function(e){
    delete keyPressed[e.keyCode];
  }
}
