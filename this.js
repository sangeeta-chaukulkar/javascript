//this inside global scope
this.table='window scope';
console.log(window.table);

//this inside an object
let johnsRoom ={
    table: 'johns table',
};
console.log(johnsRoom.table);

//this inside a method
let johnsRooms ={
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};
johnsRooms.cleanTable();

//this inside a function
const cleanTable= function(){
    console.log(`cleaning ${this.table}`)
}
cleanTable();

//call function to rescue
const cleanTables= function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}
cleanTables.call(this,'some soap');
cleanTables.call(johnsRoom,'some soap');

//this inside an innner function
const cleanTabless= function(soap){
    const innerfunction= (soap) => {
        console.log(`cleaning ${this.table} using ${soap}`);
    }
    innerfunction(soap);
}
cleanTabless.call(this,'some soap extra');

//this inside a constructor
let createRoom = function(name){
    this.table=`${name}s room`
}
createRoom.prototype.cleanTable= function (soap){
   console.log(`cleaning ${this.table} using ${soap}`);
}
const jilsRoom = new createRoom('jill');
jilsRoom.cleanTable('some soap');

//this inside a class
class createRooms{
    constructor(name){
        this.table=`${name}s room`
    }
    cleanTable(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const jilsRooms = new createRooms('jill');
jilsRooms.cleanTable('some soap');

class Student{
    static count=0;
    constructor(name,age,phone,marks){
        this.name=name,
        this.age=age,
        this.phone=phone,
        this.marks=marks,
        Student.count +=1
    }
    static numberOfStud(){
        console.log(Student.count);
    }
    eligible(){
        if (this.marks >= '40'){
            console.log('Eligible');
        }
        else{
            console.log('Not eligible');
        }
    }
}
const obj=new Student('sachine','66','5643567865','98');
obj.eligible();
const obj1=new Student('kalpana','55');
const obj2=new Student('archana','84');
const obj3=new Student('rahul','36');
const obj4=new Student('dhoni','13');
const obj5=new Student('radhika','74');
console.log(obj1.name);
Student.numberOfStud();




