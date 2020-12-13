class Polygon extends BaseClass {
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("polygon.png");
    }
  
    display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 60, 60);
        pop();
        super.display();
    }
  }