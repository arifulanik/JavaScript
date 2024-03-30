const hasmeeting=false;

const meeting= new Promise((resolve,reject)=>{
    const meetingDetails={
        name:`weekly meeting`,
        location:`google meet`,
        time:'10:00 pm'
   }

    if(!hasmeeting){
        resolve(meetingDetails);
    }else{
        reject(new Error("meeting already scheduled"));
    }
});

// const addtoCalender=(meetingDetails)=>{
//     return new Promise((resolve,reject)=>{
//         const calendar=`${meetingDetails.name} has beed shceduled on ${meetingDetails.location}
//         at ${meetingDetails.time}`;
//         resolve(calendar);
//     });
// };

const addtoCalender=(meetingDetails)=>{
    const calendar=`${meetingDetails.name} has beed shceduled on ${meetingDetails.location}
    at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

meeting
    .then(addtoCalender)// promise chaining.. 
    .then((value)=>{
        console.log(JSON.stringify(value));
    })
    .catch((err)=>{
        console.log(`${err.message}`)
    });

// multiple promise 

const promise1= Promise.resolve("promise 1 resolved");
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved");
    },2000);
});

// promise1.then((res)=>console.log(res))
// promise2.then((res)=> console.log(res))


// multiple promise to resolve at the same time...
Promise.all([promise1,promise2]).then((res)=>{
    console.log(res);
})

// Promise race--> which promise resolve first will be printed

Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})