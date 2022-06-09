let text = "name:lujiarong age:20 height:180 email:jiajianong@gmail.com"

let r1 = /[0-9]+/g;
let r2 = /[a-z]+/g;
let r3 = /:([0-9a-zA-Z])+/g;
let r4 = /:\w+/;
let r5 = /:\d+/g;
let r6= /:\D+/g;
let r7 = /\w+@[\w\.]+/g;

console.log(text.match(r1));
console.log(text.match(r2));
console.log(text.match(r3));
console.log(text.match(r4));
console.log(text.match(r5));
console.log(text.match(r6));
console.log(text.match(r7));
