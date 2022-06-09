function x(n){
    var a=1;
    for(var i=1;i<=n;++i){
        a = a * i;
    }
    return a;
}

console.log("5!=",x(5));