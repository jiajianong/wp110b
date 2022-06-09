function t(a)
{
    var x=Array.from(Array(a[0].length),()=>new Array(a.length));
    for (var i=0;i<a.length;i++)
    {
        for (var j=0;j<a[0].length;j++)
        {
           x[j][i]=a[i][j];
        }
    }
    return x;
}
console.log("transpose([[2,4,6], [3,6,9]]) =>",t([[2,4,6],[3,6,9]]));