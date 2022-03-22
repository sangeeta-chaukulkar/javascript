let multiply =function(x,y){
    console.log(x*y);
}
let mutiply =function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo= multiply.bind(this,2);
multiplyByTwo(4);

let multiplyByThree= multiply.bind(this,3);
multiplyByThree(4);

let multiplyBy2= mutiply(2);
multiplyBy2(3);

let multiplyBy3= mutiply(3);
multiplyBy3(3);