class HangWall{

    constructor(x,y,width,height){

  var options={restitution:0.3,isStatic:true,friction:0.5,density:1.2}
  this.body=Bodies.circle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
  
  

    }

display(){

var pos=this.body.position;
fill("white");
rectMode(CENTER);
rect(this.pos.x,this.pos.y,this.width,this.height);




}



}