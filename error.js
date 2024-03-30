/* 
    error can be of two types

    1-> javascript syntax error --> error object generated  
        error object has two properties--> error={
            name:"error Name",
            message:"error message"
        }

    2->custom error --> throw 
        The throw statement allows you to create a custom error.
        Technically you can throw an exception (throw an error).
        *You can throw anything as error message->like string, object,JSON

   
*/ 

try{
    eval("alert('Hello)");
}catch(err){
    console.log(err.message);//syntax error for not using ' after Hello
}

let x=14;

try{
 if(x=="")throw "empty";
 if(isNaN(x))throw "Not a number";
 x=Number(x);
 if(x<5)throw "too low";
 if(x>10)throw {
    message:"Too High",
    name:"High value occur error"
 }
}catch(err){
    console.log(err.name);// throw the custom error 
}



let a=10;

function A(){
    //let a=5;
    console.log(a);// print 10 for global scope
}
A();
console.log(a);// print 10 for global scope

p=5;
console.log(`p=${p}`);
var p;