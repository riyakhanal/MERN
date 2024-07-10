// const person = {
//     name:"Riya",
//     age:9,
//     fruits:{
//         apple:1,
//         orange:2,
//         watermelon:8,
//         banana:4,
//     },
//     subjects:["c", "dsa"],
//     greetArrow: () => {
//         console.log("Arrow Func");
//         console.log(this); //window
//     },

//     greet:function(){
//         console.log(this);
//         const anotherArrow = ()=>
//             {
//             console.log("call another normal function")
//             console.log(this);
//             };
//             anotherArrow();
//             console.log(this);
//         },
//     };
   // console.log("say hello")
// console.log(person.fruits.watermelon);
// console.log(person.fruits.banana);
// console.log(person.vegetable?.tomato ?? "no tomato");
// person.greet();
// console.log(person.subjects);

// let string = prompt("what data do you want?");
// alert(person[string]);

// const personkey = prompt("what do you want to see")
// const result = person[personkey] ?? invalid ;
// console.log(result);
const student = {}
while(1)
    {
        const key = prompt("enter student key");
        if(key == 'exit'){
            break;
        }
        const value = prompt("enter the values");
        student[key] = value;
    }

console.log(student);
