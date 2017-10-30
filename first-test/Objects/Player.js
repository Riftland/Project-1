function Player(ctx, keysPressed){
  this.ctx = ctx;
  this.keysPressed = keysPressed;
  this.x = Math.random() * 500;
  this.y = Math.random() * 500;
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
}

Player.prototype.moveRight = function(){
  this.x += 10;
}

Player.prototype.moveDown = function(){
  this.y += 10;
}

Player.prototype.moveLeft = function(){
  this.x -= 10;
}
