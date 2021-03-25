class birds
{
   constructor(x,y)
   {
       var options = {
           'restitution' : 0.5,
           'friction': 1.0,
           'density' : 0.5,
       }
   this.body = Bodies.rectangle(x,y,50,50,options);
   this.width = 50
   this.height = 50
   World.add(world,this.body)
   }

   display()
   {
    this.body.position.x = mouseX
    this.body.position.y = mouseY
    var angle = this.body.angle
    push() //  add new positions
    translate (this.body.position.x,this.body.position.y) // change its old positions
    rotate(angle) // rotating the body at some angle
    rectMode(CENTER);
    fill("blue")
    rect(0,0,this.width,this.height);
    pop() // remove new positions
   }


}
