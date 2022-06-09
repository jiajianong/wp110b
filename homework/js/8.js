function a(x1,x2)
{
    for (var i=0;i<x1.length;i++)
    {
        for (var j=0;j<x1.length;j++)
        {
           x1[i][j]+=x2[i][j];
        }
    }
    return x1;
}
console.log("add([[6,9],[8,7]],[[6,6],[6,6]]) => ",a([[6,9],[8,7]],[[6,6],[6,6]]));