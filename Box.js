class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255;
      //this.image = loadImage("polygon.png");
    }
  
    display(){
      
      if(this.body.speed <3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightgreen");
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        pop();
      }

    }

    score(){
      if(this.visibility < 0 && this.visibility >- 105){
        score++;
      }
    }
}
  