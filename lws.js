// let date=new Date();
// console.log(date)
// //date=new Date("2015-03-25T12:00:00z");
// console.log(date.getMinutes());

// sorting integer numbers using comparison fucntion
//const rollNumber=[5,6,1,8,3,4];
//rollNumber.sort((a,b)=>{return a>b?1:-1;});
//console.log(rollNumber);

//leap year function javascript
// const leapYear=(year)=>{
//     if((year%400===0) || (year%4===0 && year%100!==0)){
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }
// leapYear(2024);


//count vowles in a sentence 
// const vowles=['a','e','i','o','u','A','E','I','O','U'];

// const sentence="I love Bangladesh";
// const countVowels=(sentence)=>{
//     let count=0;
//     const letters=Array.from(sentence);

//     letters.forEach((value)=>{
//         if(vowles.includes(value)){
//             count++;
//         }
//     })
//     return count;
// };

// console.log(countVowels(sentence));


// return duplicate numbers in an array
//using filter...
// --- array.filter(value,index,array) 
// const numbers=[1,1,2,5,6,7,9,5,7,2];

// const duplicate=numbers.filter((value,index,array)=>{
//     return array.indexOf(value)!==index;
// })

// console.log(duplicate);


// for in loop
//--- used to access the object property
// const person={
//     fName:"Ariful",
//     lname:"Islam",
//     age:24
// };

// for(let x in person){
//     console.log(x);//fName lname age
//     console.log(person[x]);//
// }


// Array.froEach()
// it uses a callback function with value,index,array

const numbers=[45,4,9,16,25];

let txt="";

numbers.forEach((value,index,array)=>{
    txt+=value+" ";
});
console.log(txt);