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
}

var z = new Ratio(1,3);
console.log(z.toString());