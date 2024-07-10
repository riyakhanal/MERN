// let numbers = [2,4,10,15];
// let sum = 0;
// for(let i = 0; i<numbers.length;i++)
//     {
//         sum+=numbers[i];
//     }
//     console.log(sum);

//     const total = numbers.reduce((prev,current)=> {
//         console.log({prev,current})
//         return prev+current;
//     },0)
//     console.log(total)
    // const cart =[
    //     {name:"Laptop", price:300},
    //     {name:"Phone", price:200},
    //     {name:"Tablet", price:150},
    //     {name:"Monitor", price:400},
    // ]
    // const totalPrice = cart.reduce((total,product)=>total + product.price, 0)
    // console.log(totalPrice);
    // const person = {
    //     name:"riya",
    //     age:20,
    //     education:{
    //     school:"bkvm",
    //     location:"brt"
    //     }//creator
     

    // }
    // const anotherPerson = {
    //     ...person,
    //     education:{...person.education}
    // };
    // console.log(anotherPerson);
    // anotherPerson.name="riya khanal";
    // anotherPerson.education.school="nbps";
    // console.log(anotherPerson)
    // //const personName = person.name;
    // const {name:personName,age,education:{school},...remainingProps } =person;
    // console.log(personName,age,school);
    // console.log(remainingProps)

    // const {
    //     name:personName,age,education{school},...remainingProps
    // }=person;//destructor



    // function printPersonDetails(p){
    //     console.log(`Name:${name}, Age:${age}`)
    // }
    // printPersonDetails(person);
    // const numbers =[10,20,30]
    // const firstnum = number[0];
    // const secondnum = number[1];

    // const[first,second, ...remainingNums]=numbers;
    // console.log(first,second,remainingNums);

    // function test(...v)
    // {
    //     console.llog(v);
    // }
    // test(10,20,30);

    const person= {
        name:"api",
        age:10,
    };
    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(Object.entries(person));

    for(let [key,value] of Object.entries(person)){
        console.log(`${key}:${value}`);
    };