// const arr = new Array()
// arr[0] = 1;
// arr[1] = 2;
// console.log(arr)
// const names = ["riya", "prajeena", "pabitra","prajeena", "nirjala"]
// names[0]= "riya khanal"

// //works as stack
// names.push("rinkey");
// names.pop();

// names.unshift("shisir")
// //for (const key in person)
// for(let name in names)
//     {
//         console.log(name)
//     }

//     console.log(names.flat(-1))


// let matrix = [[ 9, 13, 5, 2], [1, 11, 7, 6], [3, 7, 4, 1],[6, 0, 7, 10]];
// for(let row of matrix){
//     console.log(row);
// }

// const greet = (name) => console.log(`hello, ${name}`);
// names.forEach((name, index) => {
//     console.log('hello,${name}',index);
// })

// const numbers=[1,2,3,4,5];
// // const doubleNumbers= []
// // numbers.forEach((number,index) => {
// //     doubleNumbers[index]= number * 2
// // })
// //for changing same size of data
// const doubleNumbers = numbers.map((number) =>
// {
//     return number*2;
// });
// //for retrieving a specific data use filter
// const numberGreaterThan30 = numbers.filter((number)=>{
//     return number > 30;
// })
// const products = [

// ]
const product = [
    {name :"Tv", price:300},
    {name :"Phone", price:300},
    {name :"laptop", price:300},
];
const prices = products.map((product) =>{
    return product.prices;
});
const productlabel = product.map((product) =>{
    return `$(product.name),Rs$(product.price)`
});
console.log(prices);
console.log(productlabel);

const priceofphone = products.filter((product)=>
{
    return product.name == "phone"
});

const productHigherThan190 = product.filter((product)=>
    {
        product.price>190;
    });

    const hasCheapProduct = product.some((product) =>  product.price <200)
    console.log(hasCheapProduct)

//const shopISCheap = true
