function Player(ctx, keysPressed){
  this.ctx = ctx;
  this.keysPressed = keysPressed;
  this.x = Math.random() * 500;
  this.y = Math.random() * 500;
  this.acc = 0.5;
  this.mass = 30;
  this.vx = 0;
  this.vy = 0;
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
  console.log(this.vx, this.vy);
  this.moveX(this.vx);
  this.moveY(this.vy);
}

Player.prototype.moveX = function(vX){
  this.x += vX;
}

Player.prototype.moveY = function(vY){
  this.y += vY
}

Player.prototype.moveUp = function(){
  this.vy = -10;
}

Player.prototype.moveRight = function(){
  this.vx = 10;
}

Player.prototype.moveDown = function(){
  this.vy = 10;
}

Player.prototype.moveLeft = function(){
  this.vx = -10;
}

Player.prototype.dash = function(){
  this.vx *= 2;
  this.vy *= 2;
  setTimeout(function(){
    this.vx /= 2;
    this.vy /= 2;
  }.bind(this), 100);
}
