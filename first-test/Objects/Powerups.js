
function Powerups(ctx) {
  this.ctx = ctx;
  this.x = window.innerWidth / 2;
  this.y = window.innerHeight / 2;
  this.radius = 50;
  this.color = "red";
}

Powerups.prototype.draw = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Powerups.prototype.choosePower = function(n, ball){

  this.powers = [
    this.moreSpeed,
    this.moreRadius,
    this.lessRadius,
    this.moreMass,
    this.justMoreRadius
  ];

  this.powers[n](ball);
}

Powerups.prototype.moreSpeed = function(ball){
  ball.speed = ball.speed * 3;
  game.powers.powerTime(ball);
}

Powerups.prototype.moreRadius = function(ball){
  ball.radius = 250;
  game.powers.powerTime(ball);
}

Powerups.prototype.lessRadius = function(ball){
  ball.radius = 5;
  game.powers.powerTime(ball);
}

Powerups.prototype.moreMass = function(ball){
  ball.mass = 500;
  game.powers.powerTime(ball);
}

Powerups.prototype.justMoreRadius = function(ball){
  ball.mass = 30 * 0.5;
  ball.radius = 250;
  game.powers.powerTime(ball);
}

Powerups.prototype.powerTime = function(ball){
  var counter = 0;
  console.log(ball);
  var t = setInterval(function(){
    if(counter == 6){
      ball.speed = ball.speed * 0.5;
      ball.radius = 30;
      ball.mass = ball.radius * 0.5;
      clearInterval(t);
    }
    counter++;
  }.bind(this), 1000);
}
