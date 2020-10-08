class BoxBody {
	constructor(x,y,w,h){
		var option={
			isStatic:true
		}
		fill("red");
		this.Bodies=Bodies.rectangle(x,y,w,h,option);
		this.Width=w;
		this.Height=h;
		World.add(world,this.Bodies);
	}
	display(){
		var position=this.Bodies.position;
		
		rectMode(CENTER);
		rect(position.x,position.y,this.Width,this.Height);
		
	}
}
