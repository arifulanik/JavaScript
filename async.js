const payment=true;
const marks=90;

const enroll=(callback)=>{
    console.log("course enroll on progress");

    setTimeout(function(){
        if(payment){
            callback();
        }else{
            console.log("payment failed!!");
        }
    },2000);
}
const progress=(callback)=>{
    console.log("Course on progress");
    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log("Sorry you will not get the certificate");
        }
    },3000);

}

const getCertificate=()=>{
    console.log("Certificate on progress");

}

enroll(()=>progress(getCertificate));


// example two

const takeOrder=(customer,callback)=>{
    console.log(`take order for ${customer}`)
    callback(customer)
}

const processOrder =(customer,callback)=>{
    console.log(`order processing for ${customer}`);
    setTimeout(()=>{
        console.log(`order processed ${customer}`);
        callback(customer);
    },3000);
}

const completeOrder=(customer)=>{
    console.log(`completed order for ${customer}`)
}

takeOrder('arif',(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    })
});

takeOrder('jannat',(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    });
});

//output scenario

// take order for arif
// order processing for arif
// take order for jannat
// order processing for jannat
// order processed arif
// completed order for arif
// order processed jannat
// completed order for jannat