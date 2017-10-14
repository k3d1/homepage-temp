function Ship() {
    this.x = windowWidth/2;
    this.y = height - 50;
    this.speed = 1;

    this.render = function() {        
        stroke(255);
        strokeWeight(1);
        fill(255, 255, 255, 50);
        //ellipse(this.x, this.y, 100, 50);
        imageMode(CENTER);
        image(img, this.x, this.y);
    }

    this.update = function() { 
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
    }
}
