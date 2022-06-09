class Ratio
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    toString()
    {
        return this.x + "/" + this.y;
    }
    add(z)
    {
        return this.x*z.y+this.y*z.x+'/'+this.y*z.y;
    }
    sub(z)
    {
        return this.x*z.y-this.y*z.x+'/'+this.y*z.y;
    }
}

var r1 = new Ratio(1,3); 
var r2 = new Ratio(2,4);
var r3 = r1.add(r2);
console.log(r3.toString());