function Player(ctx, keysPressed){
  this.ctx = ctx;
  this.keysPressed = keysPressed;
  this.x = Math.random() * 500;
  this.y = Math.random() * 500;
  this.vx = 10;
  this.vy = 10;
  this.radius = 30;
  this.color = '#' + (Math.floor(Math.random() * 16581375)).toString(16);
  this.buffer;
}

Player.prototype.draw = function(){
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
}

Player.prototype.moveUp = function(){
  this.y -= this.vy;
}

Player.prototype.moveRight = function(){
  this.x += this.vx;
}

Player.prototype.moveDown = function(){
  this.y += this.vy;
}

Player.prototype.moveLeft = function(){
  this.x -= this.vx;
}

Player.prototype.dash = function(){
  this.vx = 30;
  this.vy = 30;
  setTimeout(function(){
    this.vx = 10;
    this.vy = 10;
  }.bind(this), 200);
}
