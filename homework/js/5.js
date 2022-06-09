var x=[];
function y(x)
{
    var i,j=0;
    for(i=0;i<x.length;i++)
    {
        j=j+x[i];
    }
    return j/x.length;

}
console.log("mean([2,4,6,8,10]) =>",y([2,4,6,8,10]));