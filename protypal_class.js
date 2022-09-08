//Defining class
function Person(name,age){
    this.name = name;
    this.age =age;
}
//Adding a method
Person.prototype.display = function (id){
    this.id = id;
    console.log(this.name, this.age, this.id)
}
//Student class
function Student(name,age,reg){
    Person.call(this,name,age);
    this.reg = reg;

}
//Adding student class to Person class prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.display = function (id){
    this.id = id;
    console.log(this.name, this.age, this.reg, this.id);
}
let ochi = new Person("Ochieng", 40);
ochi.display("456");

let laster = new Student("Laster", 25, 'cit-221-057/2017');
laster.display('3621');



