class Snow{
    constructor(x, y, r){
        var options ={
            restitution: 0.4,
            density: 1.2 
            
        }
        this.image=loadImage("snow5.webp");
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        this.image.scale=0.001;
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}