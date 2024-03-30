const myLife={
    name:"Ariful islam",
    wife:"Jannatul ferdusy",
    siblings:{
        brother:"Anisur Rahman",
        sister:"Israt jahan Maria"
    },
    cars:["Tesla T1","BMW","Audi"],
    getMyInfo:()=>{
        return `my name is ${myLife.name} my wife is ${myLife.wife} my siblings are ${JSON.stringify(myLife.siblings)}.
         I have a collection of cars and they are ${myLife.cars}. Oh I forgot to tell you that i'm working at ${myLife.currentCompany}`;
    }
}

console.log(myLife);
//adding new property
myLife.currentCompany="Frontier Semiconductor";
myLife['age']=24;

// adding a method to an object..
myLife.getMySiblingsInfo = ()=>{
   return  `my siblings are ${JSON.stringify(myLife.siblings)}`
};

// calling an object method.
const info=myLife.getMyInfo();
console.log(info);

// if we use for..in loop in an array then it will give us the index inside->i
for(let i in myLife.cars){
    console.log(myLife.cars[i]);
}

console.log(myLife.getMySiblingsInfo());

// return an array with the valuse of every property of the object
console.log(Object.values(myLife.siblings))


let text='My siblings are->';
for(sibling  in myLife.siblings){
    text+=`<br>${myLife.siblings[sibling]} `;
}
//document.getElementById('demo').innerHTML=text;

//object constructor function. 
// it is a bluePrint of an object..
function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    };

}

const arif=new Person("ariful","Islam",24);
const jannat=new Person("Jannatul","Ferdus",23);

console.log(jannat.fullName());

//adding property to a specific object
// this property will be availabe only in jannat. but not in arif or any other object created from Person constructor.
jannat.maritalStatus="married";
console.log(arif);
//can't add property to the Constructor. 
//but you can add property dynamically to the object's prototype

Person.prototype.country="Bangladesh";
const rohan=new Person("rohan","karim",7);
console.log(`rohan is from ${rohan.country}`);

// making an object iterable using Symbol.iterator as a property
const myNumbers={};

myNumbers[Symbol.iterator]=function(){
    let n=0;
    let done=false;
    return {
        next(){
            n+=10;
            if(n===120)done=true;
            return {
                value:n, 
                done:done
            }
        }
    }
}

for(let num of myNumbers){
    // console.log(num);
}

let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
  console.log(result.value);
}