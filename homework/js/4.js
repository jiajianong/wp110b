function x(i,j){
    var y = []
    for(var a = i;a<=j;a++){
        if (a%3!=0 && a%5!=0 && a%7!=0)y.push(a)
    }
    return y
}
console.log("filter357(3,20)=",x(3,20))
console.log("filter357(4,30)=",x(4,30))