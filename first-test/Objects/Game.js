function Game() {}

Game.prototype.isOverlapping = function(ball1, ball2){

  if(ball1.x + ball1.radius > ball2.x
  && ball1.x < ball2.x + ball1.radius + ball2.radius
  && ball1.y + ball1.radius + ball2.radius > ball2.y
  && ball1.y < ball2.y + ball1.radius + ball2.radius){

    this.collision(ball1, ball2);

  }
}

Game.prototype.collision = function(ball1, ball2){

  var dx = ball1.x - ball2.x;
  var dy = ball1.y - ball2.y;

  var len = (dx * dx) + (dy * dy);

  var min = ball1.radius + ball2.radius;
  var minDelta = min * min;

  var aTheta = Math.atan2(dy, dx);

  if(len < minDelta){

    var dist = Math.sqrt(len);

    var fact = (dist - min) / dist;
    ball1.x -= dx * fact * 0.5;
    ball1.y -= dy * fact * 0.5;
    ball2.x += dx * fact * 0.5;
    ball2.y += dy * fact * 0.5;

    var v1 = Math.sqrt(Math.pow(ball1.vx, 2) + Math.pow(ball1.vy, 2));
    var v2 = Math.sqrt(Math.pow(ball2.vx, 2) + Math.pow(ball2.vy, 2));

    var a1 = Math.atan2(ball1.vy, ball1.vx);
    var a2 = Math.atan2(ball2.vy, ball2.vx);

    var rvx1 = v1 * Math.cos(a1 - aTheta);
    var rvy1 = v1 * Math.sin(a1 - aTheta);
    var rvx2 = v2 * Math.cos(a2 - aTheta);
    var rvy2 = v2 * Math.sin(a2 - aTheta);

    var evx1 = ((ball1.mass - ball2.mass) * rvx1 + (ball2.mass + ball2.mass) * rvx2) / (ball1.mass + ball2.mass);
    var evx2 = ((ball1.mass + ball1.mass) * rvx1 + (ball2.mass - ball1.mass) * rvx2) / (ball1.mass + ball2.mass);
    var evy1 = rvy1;
    var evy2 = rvy2;

    ball1.vx = Math.cos(aTheta) * evx1 + Math.cos(aTheta + Math.PI / 2) * evy1;
    ball1.vy = Math.sin(aTheta) * evx1 + Math.sin(aTheta + Math.PI / 2) * evy1;
    ball2.vx = Math.cos(aTheta) * evx2 + Math.cos(aTheta + Math.PI / 2) * evy2;
    ball2.vy = Math.sin(aTheta) * evx2 + Math.sin(aTheta + Math.PI / 2) * evy2;

  }
}

Game.prototype.catchPower = function(ball, power, state){

  if(ball.x + ball.radius > power.x
  && ball.x < power.x + ball.radius + power.radius
  && ball.y + ball.radius + power.radius > power.y
  && ball.y < power.y + ball.radius + power.radius){
    console.log("Cogido!");
    return false;
  } else{
    return true;
  }

}
