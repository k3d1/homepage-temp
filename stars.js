function Stars() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 4);
    this.clr = random(150, 200);
    this.spd = 0.15;

    this.render = function() {
        noStroke();
        fill(this.clr);
        rect(this.x, this.y, this.size, this.size);
    }

    this.update = function() {
        this.y += (this.spd * this.size);
        if (this.y > height) {
            this.x = random(width);
            this.y = random(-10, -30);
        }
    }
}
