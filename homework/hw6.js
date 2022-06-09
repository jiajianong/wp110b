class Vector {
    constructor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    length() {
      let [a,b,c] = [this.a,this.b,this.c]
      return Math.sqrt(a*a+b*b+c*c)
    }
  
    neg() {
      return new Vector(-this.a,-this.b,-this.c)
    }
  
    add(x2) {
      return new Vector(this.a+x2.a,this.b+x2.b,this.c+x2.c)
    }
  
    sub(x2) {
      return this.add(x2.neg())
    }
  
    dot(x2) {
      return this.a*x2.a,this.b*x2.b,this.c*x2.c
    }
  
    distance(x2) {
      return this.sub(x2).length()
    }
  
    toString() {
      return '(' + this.a + ',' + this.b + ',' + this.c+')';
    }
  }
  
  let x = new Vector(3,6,9), x2 = new Vector(2,4,6)
  console.log(x)
  console.log(x.toString())
  console.log(x+'')
  console.log('x.length()=', x.length())
  console.log('x.sub(x2)=', x.sub(x2))
  console.log('x.sub(x2).length()=', x.sub(x2).length())
  console.log('x.dot(x2)=', x.dot(x2))
  console.log('x.sub(x2).length()=', x.sub(x2).length())
  console.log('x.distance(x2)=', x.distance(x2))
