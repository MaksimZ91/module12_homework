function Electircalappl (power){
    this.voltage=220,
    this.frequency=50,
    this.power=power,
    this.amper=0
}
Electircalappl.prototype.closeCircuit= function(status){
    if (status===true){
        this.amper =(this.power/this.voltage).toFixed(2)
        let energy = ((this.amper*this.voltage)/1000).toFixed(2)
    console.log (`Эл.прибор включен в сеть, потребление составило ${energy} кВт*час, при токе ${this.amper} ампер.!`)
    }else{
        console.log ("Эл.прибор в сеть не включен!")
    }
    return this.amper
}
function Lamp (power,color,factory){
    this.power=power,
    this.color=color,
    this.amper=0,
    this.factory=factory,
    this.illumination=function (){if (this.amper!==0)
        console.log(`Лампа производства завода ${this.factory} ярко горит ${this.color} светом и освещает светлое будущие!`)
    }
}
Lamp.prototype= new Electircalappl()
let myLamp= new Lamp(110,"белым","Зенит")


function Electricstove (power,color,type){
    this.power=power,
    this.color=color,
    this.amper=0,
    this.factory="Горение",
    this.type=type,
    this.cooking= function(food){
        if(this.amper!==0&&food===true){
            console.log("Скоро будет готов вкусный обед!")
        }
    }
}
Electricstove.prototype= new Electircalappl()
let myElectricstove = new Electricstove(1500,"синий","Индукционная")


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
