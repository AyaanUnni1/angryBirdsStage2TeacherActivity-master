class Bird extends Parent{
    constructor(x, y) {
        super(x,y,50,50);

        this.image = loadImage("sprites/bird.png");
    };
    diplay(){

      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }

  };
  