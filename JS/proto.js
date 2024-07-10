// const person={
//     name:"riya",
//     age:10,
//     sayhello3(){
//         console.log("hello")
//     },
// };
// console.log(person);
// console.log(person.hasOwnProperty("name"));

// const animal={
//     nooflegs:6
// };
// animal._proto_=person;
// console.log(animal.age);
// console.log(animal.hasOwnProperty("nooflegs"));
// function Person(name,age){
//     this.name="kalu"
//     this.age=30
//     // this.sayhello =() => console.log("hello")
// }
// Person.prototype.sayhello= function(){
//     console.log("hello")
// };

// const shisir = new Person("shisir",23);
// shisir.sayhello();

// const prajeena = new Person("prajeena",78);
// prajeena.sayhello();
// console.log(shisir);
// console.log(prajeena);
// function Student(name,age,school){
//     // this={}
//     Person.call(this,name,age)
//     this.school = school;
//     //this = {}
// }
// Object.setPrototypeOf(Student.prototype,Person.prototype)

// Student.prototype.getschool = function(){
//     console.log(this.school);
// };
// const akash = new Student("akash",10,"nbps")
// akash.sayhello();
// akash.getschool();

// class  Person{
//     constructor(name,age){
//     this.name=name;
//     this.age=age;
// }
// sayHello(){
//     console.log(`${this.name}:Hello`);
// }
// }
// class Student extends Person{
//     constructor(name,age,school)
//     {
//         super(name,age)//Person.call(this,name,age)
//         this.school = school;
//     }
//     getSchool()
//     {
//         console.log(this.school);
//     }
// }
// class Book{
//     constructor(title,author,genre,pages){
//         this.title=title;
//         this.author=author;
//         this.genre=genre;
//         this.pages=pages;
//     }
//     displayInfo(){
//         console.log()
//     }
// }
class Person{
    constructor(fullname,age){
        this.#fullname = fullname;
        this.age = age;
    }
    sayHello()
    {
        console.log(`${this.name}: Hello`);
    }
    get name(){
        return rhis.#fullname
    }
    set name(value){
        this.#fullname = value;
    }
}
const p =new Person('riya',10)
console.log(p.name)

