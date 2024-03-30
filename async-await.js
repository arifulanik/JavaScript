const isPayment=false;
const marks=70;

function enroll(){
    console.log("Course enrollment is in progress")

    const enrollment=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPayment){
                resolve("enrollment done now!!!")
            }else{
                reject(new Error("payment failed!!!"))
            }
        })
    },2000);

    return enrollment;
}

function progress(){

    console.log("course is in ongoing!!!")

    const progressCourse= new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(marks>=80){
                resolve("Ohh hello you will get the certificate");
            }else{
                reject(new Error("Not enoguh marks to get certificate"));
            }
        },3000);
    });
    return progressCourse;

}

function getCertificate(){
    console.log("Preparing your certificate!!");

    return Promise.resolve("Congrats!!! You got the certificate")
}



async function course(){
    try{
        const enrollmentInfo=await enroll();
        console.log(enrollmentInfo);
        const courseProgress=await progress();
        console.log(courseProgress);  
        const certificat=await getCertificate();
        console.log(certificat);
    }catch(err){
        console.log(err.message)
    }
}

course()