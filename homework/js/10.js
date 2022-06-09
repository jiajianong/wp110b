function i(f,a,b)
{
    var y = 0;
    for(let x = a ; x < b ; x +=0.001)
    {
        y += f(x) * 0.001;
    }
    return y;
}

console.log("integral((x)=>x*x, 1, 3) =>",i((x)=>x*x , 1 ,3))