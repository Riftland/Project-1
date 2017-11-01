function Game(players) {
  this.players = players;
}

Game.prototype.isOverlapping = function(){
  if(this.players[0].x + this.players[0].radius > this.players[1].x
  && this.players[0].x < this.players[1].x + this.players[0].radius + this.players[1].radius
  && this.players[0].y + this.players[0].radius + this.players[1].radius > this.players[1].y
  && this.players[0].y < this.players[1].y + this.players[0].radius + this.players[1].radius){
    var colX = (
      (this.players[0].x * this.players[1].radius) + (this.players[1].x * this.players[0].radius)
      / (this.players[0].radius + this.players[1].radius)
    );
    var colY = (
      (this.players[0].y * this.players[1].radius) + (this.players[1].y * this.players[0].radius)
      / (this.players[0].radius + this.players[1].radius)
    );
    console.log("Collision in: " + colX, colY + "!");

    this.collision();
    //this.collisions();
    /*
    this.players[0].vx = (this.players[0].vx * (this.players[0].mass - this.players[1].mass) + (2 * this.players[1].mass * this.players[1].vx)) / (this.players[0].mass + this.players[1].mass);
    this.players[0].vy = (this.players[0].vy * (this.players[0].mass - this.players[1].mass) + (2 * this.players[1].mass * this.players[1].vy)) / (this.players[0].mass + this.players[1].mass);
    this.players[1].vx = (this.players[1].vx * (this.players[1].mass - this.players[0].mass) + (2 * this.players[0].mass * this.players[0].vx)) / (this.players[0].mass + this.players[1].mass);
    this.players[1].vy = (this.players[1].vy * (this.players[1].mass - this.players[0].mass) + (2 * this.players[0].mass * this.players[0].vy)) / (this.players[0].mass + this.players[1].mass);
    */
  }
}

Game.prototype.collision = function(){
  //Delta pos between players
  var dx = this.players[0].x - this.players[1].x;
  var dy = this.players[0].y - this.players[1].y;

  var len = Math.pow(dx, 2) + Math.pow(dy, 2);

  var min = this.players[0].radius + this.players[1].radius;
  var minDelta = Math.pow(min, 2);

  var aTheta = Math.atan2(dy, dx);

  if(len < minDelta){
    console.log("posiciones bola 1: " + this.players[0].x, this.players[0].y);
    var dist = Math.sqrt(len);

    this.players[0].tx = this.players[0].x - this.players[0].vx;
    this.players[0].ty = this.players[0].y - this.players[0].vy;
    this.players[1].tx = this.players[1].x - this.players[1].vx;
    this.players[1].ty = this.players[1].y - this.players[1].vy;

    var fact = (dist - min) / dist;
    this.players[0].x -= dx * fact * 0.5;
    this.players[0].y -= dy * fact * 0.5;
    this.players[1].x += dx * fact * 0.5;
    this.players[1].y += dy * fact * 0.5;

    console.log("posiciones bola 1: " + this.players[0].x, this.players[0].y);

    var v1 = Math.sqrt(Math.pow(this.players[0].vx, 2) + Math.pow(this.players[0].vy, 2));
    var v2 = Math.sqrt(Math.pow(this.players[1].vx, 2) + Math.pow(this.players[1].vy, 2));

    var a1 = Math.atan2(this.players[0].vy, this.players[0].vx);
    var a2 = Math.atan2(this.players[1].vy, this.players[1].vx);

    var rvx1 = v1 * Math.cos(a1 - aTheta);
    var rvy1 = v1 * Math.sin(a1 - aTheta);
    var rvx2 = v2 * Math.cos(a2 - aTheta);
    var rvy2 = v2 * Math.sin(a2 - aTheta);

    var evx1 = ((this.players[0].mass - this.players[1].mass) * rvx1 + (this.players[1].mass * 2) * rvx2) / (this.players[0].mass + this.players[1].mass);
    var evx2 = ((this.players[1].mass * 2) * rvx1 + (this.players[1].mass - this.players[1].mass) * rvx2) / (this.players[0].mass + this.players[1].mass);
    var evy1 = rvy1;
    var evy2 = rvy2;

    this.players[0].vx = Math.cos(aTheta) * evx1 + Math.cos(aTheta + Math.PI / 2) * evy1;
    this.players[0].vy = Math.sin(aTheta) * evx1 + Math.sin(aTheta + Math.PI / 2) * evy1;
    this.players[1].vx = Math.cos(aTheta) * evx2 + Math.cos(aTheta + Math.PI / 2) * evy2;
    this.players[1].vy = Math.sin(aTheta) * evx2 + Math.sin(aTheta + Math.PI / 2) * evy2;
    
  } else{

    this.players[0].vx = this.players[0].x - this.players[0].tx;
    this.players[0].vy = this.players[0].y - this.players[0].ty;
    this.players[1].vx = this.players[1].x - this.players[1].tx;
    this.players[1].vy = this.players[1].y - this.players[1].ty;

  }
}
