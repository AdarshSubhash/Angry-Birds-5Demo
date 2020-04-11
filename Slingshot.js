class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,180,20);
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
       push();
            stroke(48,22,8);
            
             if(pointA.x<220){
                strokeWeight(5);
                line(pointA.x-15, pointA.y-6, pointB.x, pointB.y);
            line(pointA.x-15,pointA.y+6,pointB.x+25,pointB.y)
             image(this.image3,pointA.x-20,pointA.y-10,20,25);
             }
             else{
                 strokeWeight(3);
                 line(pointA.x-15, pointA.y-6, pointB.x, pointB.y);
            line(pointA.x-15,pointA.y+6,pointB.x+25,pointB.y)
             image(this.image3,pointA.x-20,pointA.y-10,20,25);
             }
             pop();
        }
    }
    
}