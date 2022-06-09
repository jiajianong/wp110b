function f(x){
    var a=new Array(x);
    a[0]=1;
    a[1]=1;
    for( let i=2;i<x;i++){
        a[i]=a[i-1]+a[i-2];
    }
    console.log("f(7) =>",(a[x-1]));
}
f(7);
