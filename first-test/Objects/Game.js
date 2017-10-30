function Game(players) {
  this.players = players;
}

Game.prototype.isOverlapping = function(){
  if(this.players[0].x + this.players[0].radius > this.players[1].x
  && this.players[0].x < this.players[1].x + this.players[0].radius + this.players[1].radius
  && this.players[0].y + this.players[0].radius + this.players[1].radius > this.players[1].y
  && this.players[0].y < this.players[1].y + this.players[0].radius + this.players[1].radius){
    console.log("Overlapping!");
  }
}
