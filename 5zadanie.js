class Electircalappl {
    constructor(power,voltage,frequency,amper){
        this.voltage=220;
        this.frequency=50;
        this.power=power;
        this.amper=0;
    }

    closeCircuit (status){
        if (status===true){
            this.amper =(this.power/this.voltage).toFixed(2)
            let energy = ((this.amper*this.voltage)/1000).toFixed(2)
            console.log (`Эл.прибор включен в сеть, потребление составило ${energy} кВт*час, при токе ${this.amper} ампер.!`)
        }else{
            console.log ("Эл.прибор в сеть не включен!")
        }
        return this.amper
    }
}

class Lamp extends Electircalappl{
    constructor(power,color,factory,){
        super(power);
        this.color=color;
        this.factory=factory;
    }
    illumination (){if (this.amper!==0)
        console.log(`Лампа производства завода ${this.factory} ярко горит ${this.color} светом и освещает светлое будущие!`)
    }
}
let myLamp= new Lamp(110,"белым","зенит")

class Electricstove extends Electircalappl{
    constructor(power,color,factory,type){
        super(power);
        this.color=color;
        this.factory=factory;
        this.type=type;
    }
    cooking (food){if(this.amper!==0&&food===true){
        console.log("Скоро будет готов вкусный обед!")
    }
    }
}
let myElectricstove = new Electricstove(1500,"синий", "Горение", "индукционная")



function test (obj){
    for (let key in obj){
        if (typeof obj[key] !=="function")
            console.log(`Ключ - ${key}, Значение - ${obj[key]}`)
    }
}


myLamp.closeCircuit(true)
myLamp.illumination()
test(myLamp)

myElectricstove.closeCircuit(true)
myElectricstove.cooking(true)
test(myElectricstove)

//Доброго времени суток!))Посоветуйте хорошую книжку по JS пожалуйста?)