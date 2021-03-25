class logs
{
   constructor(x,y,height,angle)
   {
       var options = {
           'restitution' : 0.8,
           'friction': 1.0,
           'density' : 1.0
       }
   this.body = Bodies.rectangle(x,y,20,height,options);
   this.width = 20
   this.height = height
   Matter.Body.setAngle(this.body,angle)
   World.add(world,this.body)
   }

   display()
   {
    var angle = this.body.angle
    push() //  add new positions
    translate (this.body.position.x,this.body.position.y) // change its old positions
    rotate(angle) // rotating the body at some angle
    rectMode(CENTER);
    fill("brown")
    rect(0,0,this.width,this.height);
    pop() // remove new positions
   }


}