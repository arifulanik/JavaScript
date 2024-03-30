class car{
    constructor(company, model,year){
        this.company=company,
        this.model=model,
        this.year=year
    }

    getCarInfo(status){
        return `My car company is ${this.company} and the model is ${this.model} and my car ${status}`;
    }
}

const myCar=new car("Tesla","t1",2019);
console.log(typeof myCar);

let carInfo=myCar.getCarInfo("condition is very bad");

console.log(carInfo);