function Board(ctx) {
  this.ctx = ctx;
  this.x = 930;
  this.y = 500;
  this.radius = 1000;
  this.end = Math.PI * 2;
  this.color = 'grey';
}

Board.prototype.draw = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Board.prototype.update = function(players){
  this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  this.draw();
  this.radius -= 0.1;
  players.forEach(function(e){
    e.draw();
  })
}

Board.prototype.timeLimit = function(players){
  //Estudiar esto
  setInterval(function() {
    this.update(players);
  }.bind(this), 1000/24);
}
