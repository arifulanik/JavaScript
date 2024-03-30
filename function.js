//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
const x=function(...pars){
    let sum=0;
    for(let par of pars)sum+=par;
    return sum;
}

let total=x(1,2,3,4,5,6);
console.log(total);

total=x(5,10,15,20,25);
console.log(total);

// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).
// This way you can simply use a function to find (for instance) the highest value in a list of numbers:
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }

  function sumAll(){
    let total=0;
    for(let arg of arguments){
        total+=arg;
    }
    return total;
  }

  console.log(sumAll(20,-10,100,40,50));
