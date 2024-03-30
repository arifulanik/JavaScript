// implementation fo linear search 


const LinearSearch=(arr,val)=>{
    let id=0;
    for(let x of arr){
        if(x===val){
            return `${val} found at index ${id}`;
        }
        id++;
    }
    return "Not found";
};

const char = ['a','b','c','d','e'];
const searchVal='c';

const returnedVal=LinearSearch(char,searchVal);
console.log(returnedVal);

// maxLength string in a array and it's index 
const mxLenString=(arr)=>{
    let id=0,mxLen=0,foundat=0;
    for(let x of arr){
        if(x.length>mxLen){
            mxLen=x.length;
            foundat=id;
        }
        id++;
    }
    return `the maxLen name is ${arr[foundat]} and found at index ${foundat}`
};

const name = ['ariful','fahim','ahasan','pranto','nazrulIslam'];
const returnedName=mxLenString(name);
console.log(returnedName);

// numbers divisible by 3 or 5 or both.. 

const with3=[],with5=[],withBoth=[];

for(let num=1;num<=100;num++){
    if(num%3===0 && num%5===0){
        withBoth.push(num);
    }else if(num%3===0){
        with3.push(num);
    }else if(num%5===0){
        with5.push(num);
    }
}

console.log(`array divisible by only 3 is ${with3}`);
console.log(`array divisible by only 5 is ${with5}`);
console.log(`array divisible by both is ${withBoth}`);
