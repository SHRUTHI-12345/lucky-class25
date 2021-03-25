class box
{
   constructor(x,y,width,height)
   {
       var options = {
           'restitution' : 0.8,
           'friction': 1.0,
           'density' : 1.0
       }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width
   this.height = height
   World.add(world,this.body)
   }

   display()
   {
    var angle = this.body.angle
    push() //  add new positions
    translate (this.body.position.x,this.body.position.y) // change its old positions
    rotate(angle) // rotating the body at some angle
    rectMode(CENTER);
    fill("white")
    rect(0,0,this.width,this.height);
    pop() // remove new positions
   }


}


// https://whitehatjr.github.io/AngryBirds-1/ //