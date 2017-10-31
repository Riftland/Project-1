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
    //this.collisions();
    this.players[0].vx = (this.players[0].vx * (this.players[0].mass - this.players[1].mass) + (2 * this.players[1].mass * this.players[1].vx)) / (this.players[0].mass + this.players[1].mass);
    this.players[0].vy = (this.players[0].vy * (this.players[0].mass - this.players[1].mass) + (2 * this.players[1].mass * this.players[1].vy)) / (this.players[0].mass + this.players[1].mass);
    this.players[1].vx = (this.players[1].vx * (this.players[1].mass - this.players[0].mass) + (2 * this.players[0].mass * this.players[0].vx)) / (this.players[0].mass + this.players[1].mass);
    this.players[1].vy = (this.players[1].vy * (this.players[1].mass - this.players[0].mass) + (2 * this.players[0].mass * this.players[0].vy)) / (this.players[0].mass + this.players[1].mass);
  }
  console.log("velocidades de player 2  ->" + this.players[1].vx + " - " + this.players[1].vy)

}
/*
Game.prototype.collisions = function(){
  this.players[0].vx = this.players[1].vx * (this.players[0].mass + this.players[1].mass);
  this.players[0].vy = this.players[1].vy * (this.players[0].mass + this.players[1].mass);
}
*/
