var obj={num:2};

var addToThis= function(a,b,c){
    return this.num+a+b+c;
};

console.log(addToThis.call(obj,5,3,1));
var arr=[5,3,1];
console.log(addToThis.apply(obj,arr));

var bound=addToThis.bind(obj);
console.log(bound(1,2,3));

var student={
    age:20
}
var printAge= function(){
    return this.age;
}
var age= printAge.bind(student);
console.log(age());
