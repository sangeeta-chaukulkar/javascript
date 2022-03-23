"use strict"; 
let getA= a => a;
console.log(getA(1));

let square = a => a*a;
console.log(square(2));

let sq = (a) => {return a*a}; 
console.log(sq(2));

var a=4;
let s = _ => {return a*a}; //user () or _ even though you are not passing  argumnt
console.log(s(2));

let mul= (a,b) => {return a*b}; 
console.log(mul(2,4));

var x= function (){
    this.val=1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    },1)
};
var xx= new x();

var y= (...n) => {
    console.log(n[1]);
 }
 y(1,2,3);
 
