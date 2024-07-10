// const promiseForIntern = new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         reject("no internship");
//     }, 5000);
// });
// console.log(promiseForIntern);
// promiseForIntern
// .then((value) =>{
//     console.log(value);
//     console.log(promiseForIntern);
// })
// .catch((err)=>{
//     console.log(err);
//     console.log(promiseForIntern);
// });
const getUserData = ()=>
    {
        return new Promise((resolve,reject)=> {
            resolve({id:1, name:"basanti",age:10});
        });
    };
    getUserData()
    .then((user)=>{
        console.log(user)
        return {id:2,name:"nirjala"}
    
    })
    .catch((err)=> {};)