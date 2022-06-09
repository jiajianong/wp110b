var x=[];
function f(n){
    for(var i=2;i<=n;i++){
        if(n % i == 0)
        {
            n /= i;
            x.push(i);
            i = 2;
        }
    }
    return x;
}
console.log("factor(87)=>",f(87));