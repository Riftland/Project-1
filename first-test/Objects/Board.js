function Board(ctx) {
  this.ctx = ctx;
  this.x = 930;
  this.y = 500;
  this.radius = 1000;//window.innerHeight / 2.1;
  this.end = Math.PI * 2;
  this.color = "#ccffff";
}

Board.prototype.drawBoard = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Board.prototype.update = function(players, powers, state){
  this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if(this.radius >= 0){
    this.drawBoard();
    this.radius -= 0.1;
  }
  players.forEach(function(e){
    e.draw();
  })
  if(state)powers.draw();
}
