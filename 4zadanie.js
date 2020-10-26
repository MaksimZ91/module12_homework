function Electircalappl (power){
    this.voltage=220,
    this.frequency=50,
    this.power=power,
    this.amper=0,
    this.status = false // по умолчанию прибор выключен
}
Electircalappl.prototype.closeCircuit= function(){
    if (this.status){
        this.amper =(this.power/this.voltage).toFixed(2)
        let energy = ((this.amper*this.voltage)/1000).toFixed(2)
    console.log (`Эл.прибор включен в сеть, потребление составило ${energy} кВт*час, при токе ${this.amper} ампер.!`)
    }else{
        console.log ("Эл.прибор в сеть не включен!")
    }
    return this.amper
}

Electircalappl.prototype.turnOn = function() {
    this.status = true;
}

Electircalappl.prototype.turnOff = function() {
    this.status = false;
}

function Lamp (power,color,factory){
    this.voltage=220,
    this.frequency=50,
    this.power=power,
    this.color=color,
    this.amper=0,
    this.factory=factory,
    this.status = false,
    this.illumination=function (){if (this.amper!==0)
        console.log(`Лампа производства завода ${this.factory} ярко горит ${this.color} светом и освещает светлое будущие!`)
    }
}
Lamp.prototype= new Electircalappl(110)
let myLamp= new Lamp(110,"белым","Зенит")


function Electricstove (power,color,type){
    this.voltage=220,
    this.frequency=50,
    this.power=power,
    this.color=color,
    this.amper=0,
    this.factory="Горение",
    this.type=type,
    this.status = false,
    this.cooking= function(food){
        if(this.amper!==0&&food===true){
            console.log("Скоро будет готов вкусный обед!")
        }
    }
}
Electricstove.prototype= new Electircalappl(110)
let myElectricstove = new Electricstove(1500,"синий","Индукционная")


function test (obj){
    for (let key in obj){
        if (typeof obj[key] !=="function")
            console.log(`Ключ - ${key}, Значение - ${obj[key]}`)
    }
}


myLamp.closeCircuit()
myLamp.illumination()
test(myLamp)
myElectricstove.closeCircuit()
myElectricstove.turnOn()
myElectricstove.closeCircuit()
myElectricstove.cooking(true)
test(myElectricstove)


// В основном всё верно, но есть несколько замечаний:

// 1. По заданию нужно было определить для родительской функции-конструктора 2 метода, отвечающих за включение\выключение прибора. Сейчас этих методов нет
// 2. У дочерних функций-конструкторов должны быть заданы все те же самые свойства, что есть в прототипе, иначе это свойство будут разделять все наследники одного объекта-прототипа
// 3. В конструкторе Electircalappl у вас определен входной параметр power, но при создании экземпляров new Electircalappl() этот параметро не задается
// 4. Есть вопросы к методу closeCircuit у Electircalappl. По логике, status (т.е. состояние вкл\выкл) также является своством объекта и не должно задаваться извне. 
// Выше исправила указанные недочеты