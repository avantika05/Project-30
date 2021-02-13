class Box extends BaseClass {
    constructor(x, y, width, height){
        super(x,y,width,height);
        this.visibility = 225;
    }
    display() {
        if(this.body.speed<3) {
            super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility-5;
            tint(255,this.Visiblity);
            pop();
        }
    }    
  };
  