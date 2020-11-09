class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,25,options);
    this.radious = 25;
    
    World.add(world, this.body);
  }
  fly(){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110})
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0, 0, this.radious, this.radious);
    pop();
  }
};
   