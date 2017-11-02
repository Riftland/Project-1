
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
    this.moreMass,
    this.justMoreRadius
  ];

  this.powers[n](ball);
}

Powerups.prototype.moreSpeed = function(ball){
  var oldSpeed = 0.5;
  var newSpeed = 3;
  ball.speed = ball.speed * newSpeed;
  this.powerTime;
  console.log(ball.speed);
}

Powerups.prototype.moreRadius = function(ball){
  var oldRadius = 30;
  var newRadius = 200;
  ball.radius = newRadius;
  this.powerTime;
  console.log(ball.radius);
}

Powerups.prototype.moreMass = function(ball){
  var oldMass = ball.radius * 0.5;
  var newMass = 500;
  ball.mass = newMass;
  this.powerTime;
  console.log(ball.mass);
}

Powerups.prototype.justMoreRadius = function(ball){
  var oldRadius = 30;
  var newRadius = 250;
  ball.mass = oldRadius * 0.5;
  ball.radius = newRadius;
  this.powerTime;
  console.log(ball.mass, ball.radius);
}

Powerups.prototype.powerTime = function(){
  var counter = 0;
  console.log("hola1");
  var t = setInterval(function(){
    if(counter == 6)clearInterval(t); console.log("hola");
    counter++;
  }, 1000);
}
