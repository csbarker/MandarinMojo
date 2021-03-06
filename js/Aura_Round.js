//(function() {

window.game = window.game || { };

game.Aura_Round = function(pos, color, lifespan, opacity) {
    this.pos = pos;
    this.color = color;

    //this.lifespan = lifespan;
    this.opacity = opacity;
    this.opacitydrop = opacity/lifespan; //amount opacity drops per second

    this.radius = 0;
    this.age = 0;
}
game.Aura_Round.prototype = new game.Thing();
game.Aura_Round.prototype.constructor = game.Aura_Round;

game.Aura_Round.prototype.draw = function() {
    drawCircle(gContext, this.pos[0], this.pos[1], this.radius, this.color, this.opacity);
};
game.Aura_Round.prototype.update = function(dt) {
    this.radius += dt * 50;
    this.age += dt;
    this.opacity -= this.opacitydrop * dt;
    //return this.age < this.lifespan;
    return this.opacity > 0.0;
};

//}());
