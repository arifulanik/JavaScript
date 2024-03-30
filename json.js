 const srh=`{
    "employees":[
    {"firstName":"Ariful","lastName":"Islam"},
    {"firstName":"Iftekhar","lastName":"Fahim"},
    {"firstName":"Ahasan","lastName":"Kabir"}
 ]
}`

const obj=JSON.parse(srh);// JSON -> object

console.log(obj.employees[0].firstName);

const json=JSON.stringify(obj);// object -> JSON

console.log(json);