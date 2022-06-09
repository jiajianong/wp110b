function x(n){
    var y = 0;

    for(var i = 1 ; i<=n; i++){
        if(n % i == 0){
            y += 1;
        }
    }

    if(y == 2){
        return true;
    }
    else{
        return false;
    }
}
console.log("isPrime(31)=>",x(31));