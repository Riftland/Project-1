
function Powerups(ball) {
  this.powers = [
    this.moreSpeed(ball),
    this.moreRadius(ball),
    this.moreMass(ball)
  ];
}

Powerups.prototype.moreSpeed = function(ball){
  var oldSpeed = 0.5;
  var newSpeed = 100;
  ball.speed = newSpeed;
}

Powerups.prototype.moreRadius = function(ball){
  var oldRadius = 30;
  var newRadius = 200;
  ball.radius = newRadius;
}

Powerups.prototype.moreMass = function(ball){
  var oldMass = ball.radius * 0.5;
  var newMass = 500;
  ball.mass = newMass;
}

Powerups.prototype.justMoreRadius = function(ball){
  var oldRadius = 30;
  var newRadius = 250;
  ball.mass = oldRadius * 0.5;
  ball.radius = newRadius;
}

Powerups.prototype.powerTime = function(nStat, ball){
  var counter = 0;
  var t = setInterval(function(){
    if(counter == 30)clearInterval(t);
    counter++;
  }, 1000);
}
