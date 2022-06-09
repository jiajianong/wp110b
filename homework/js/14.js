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
    mul(z)
    {
        return this.x*z.x+'/'+this.y*z.y;
    }
    div(z)
    {
        return this.y*z.x+'/'+this.y*z.y;
    }
    reduce()
    {
        var m,i;
        if(this.x>this.y)
        {
            m=this.y;
        }
        else
        {
            m=this.x;
        }
        for(i=2;i<=m;i++)
        {
            if(this.x%i==0&&this.y%i==0)
            {
                this.x=this.x/i;
                this.y=this.y/i;
                m=m/i;
                i=2;
            }
        }
    }
}

var r1 = new Ratio(6,9); 
 r1.reduce();
console.log(r1.toString());