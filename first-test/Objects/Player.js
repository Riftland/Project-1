function Player(ctx){
  this.ctx = ctx;
  this.x = Math.random() * 200;
  this.y = Math.random() * 200;
  this.vx = 0;
  this.vy = 0;
  this.radius = 30;
  this.color = '#' + (Math.floor(Math.random() * 16581375)).toString(16);
}

Player.prototype.draw = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.moveUp = function(){
  this.y -= 10;
  //if(this.y > this.ctx.canvas.height || this.y < 0){
  //  this.y *= -1
  //}
}

Player.prototype.moveRight = function(){
  this.x += 10;
  //if(this.x > this.ctx.canvas.height || this.x < 0){
  //  this.x *= -1
  //}
}

Player.prototype.moveDown = function(){
  this.y += 10;
  //if(this.y > this.ctx.canvas.height || this.y < 0){
  //  this.y *= -1
  //}
}

Player.prototype.moveLeft = function(){
  this.x -= 10;
  //if(this.x > this.ctx.canvas.height || this.x < 0){
  //  this.x *= -1
  //}
}
