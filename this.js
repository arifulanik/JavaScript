/*
  this ->refers to an object
   arrow functions do not have their own this. Instead, they inherit this from the parent scope.


*/

const person={
    firstName: "Ariful ",
    lastName: "islam",
    id: 1704071,
    fullName: function(){
        //return `My name is ${this.firstName} ${this.lastName}. and my id is ${this.id}`;
        return this;
    }
};

console.log(person.fullName());


function myFunction(){
    return this;
}

//console.log(myFunction());
