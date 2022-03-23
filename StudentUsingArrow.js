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
    elibieForPlacement(boardMarks,ageCriteria){
        const eli = () => {
            if (this.marks >= boardMarks && this.age >= ageCriteria ){
                return true;
            }
            return false;
        };
        return eli
    }
}
const obj=new Student('sachine','66','5643567865','98');
// obj.eligible();
const obj1=new Student('kalpana','15','5643567665','98');
const obj2=new Student('archana','84','6789564738','55');
const obj3=new Student('rahul','36','785637594','54');
const obj4=new Student('dhoni','25','7895947384','89');
const obj5=new Student('radhika','74','7846378595','65');
// console.log(obj1.name);
// Student.numberOfStud();
var Iseligible= obj.elibieForPlacement('80','22');
var eligi= Iseligible.bind();
console.log(eligi());
if (eligi()) {
    console.log(obj.name);
}

var Iseligible1= obj1.elibieForPlacement('80','22');
var eligi1= Iseligible1.bind();
if (eligi1()) {
    console.log(obj1.name);
}

var Iseligible2= obj2.elibieForPlacement('80','22');
var eligi2= Iseligible2.bind();
if (eligi2()) {
    console.log(obj2.name);
}
var Iseligible3= obj3.elibieForPlacement('80','22');
var eligi3= Iseligible3.bind();
if (eligi3()) {
    console.log(obj3.name);
}

var Iseligible4= obj4.elibieForPlacement('80','22');
var eligi4= Iseligible4.bind();
if (eligi4()) {
    console.log(obj4.name);
}
