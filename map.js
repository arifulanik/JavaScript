//creating and initializing a map
/*
   maps properties
   1-> mapName.set(key,value)
   2->mapName.get(key)->return the value of associated with the key
   3->mapName.has(key)->return valueAvailabe?true:false;
   4->mapName.keys()->return the keys of the map
   5->mapName.values()->return the values of the map
   6->nmapName.entries()->return [key,value]
   7->mapName.forEach(value,key)-
   8->Array.from(mapName)->convert the map into a 2D array
   9->mapName.delete(key)->delete [key,value]
   10->mapName.size->return the number of [key,value] in the map


  *** Map's key and value can be of any type ***
*/
const studentInfo=new Map([
    [1,"Ariful"],
    [10,"Fahim"],
    [20,"Ahasan"]
]);

// inserting into map-> map.set() method

studentInfo.set(5,"Sudipta");
studentInfo.set(8,"Asif");

// maps are like iterable arrays.. 
for(const id of studentInfo){
        console.log(`Id of ${id[1]} is ${id[0]}`);//access the
}

// iteratign map with forEach()
studentInfo.forEach((value,key)=>{
    console.log(`${key}=${value}`);
});

// storing array as map value
const roomAllotment=new Map([
    [211,["Ariful","Fahim","Ahasan","Sudipta","Asif"]],
    [210,["Amdad","Rafin","Anto","Sakib","Niloy"]],
    [213,["Pranto","Rifat","Saiful","Montachir","Promit"]]
]);

// inserting into map-> map.set() method

// maps are like iterable arrays.. 
for(const id of roomAllotment){
    let roomMates=Array.from(id[1]);
    console.log(`alloted person's in room ${id[0]} are = ${roomMates}`);//access the
        console.log( roomMates);
        console.log(id[1]);
}

// iteratign map with forEach()
roomAllotment.forEach((value,key)=>{
    console.log(`${key}=${value}`);
});