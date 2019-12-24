// Write a class Cuboid that contains height, width and length as properties.
// It should also contain surfaceArea and volume as methods.
// After making the Cuboid class extend it into a new Cube class

class cuboid
{
    constructor(length,width,height){
        this.length=length;
        this.width=width;
        this.height=height;
    }
    //methods
    volume(){
        return (this.length*this.width*this.height);
    }
    surface_area(){
        return (2*(this.length*this.width))+(2*(this.width*this.height))+(2*(this.height*this.length));
    }
}

let cuboid1=new cuboid(20,30,10);

console.log("volume of cuboid: ", cuboid1.volume());
console.log("surface area of cuboid: ", cuboid1.surface_area());

class cube extends cuboid{
    constructor(side){
        super(side,side,side);
    }
}

let cube1=new cube(20);

console.log("volume of cube: ", cube1.volume());
console.log("surface area of cube: ", cube1.surface_area());