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


// Касательно задания:
// Тут повторяются ошибки из предыдущего задания с методами turnOn/turnOff и closeCircuit. Также заметила, что в конструкторе Electircalappl объявлены 4 входных параметра, но используются из них только 1. Остальные можно убрать за ненадобностью. Попробуйте исправить эти ошибки самостоятельно, основываясь на моих исправлениях в предыдущем задании

// Касательно книжек:
// Какое-то время назад я публиковала на канале подборку книжек, которые мне понравились (там не только по JS, но и в целом по программированию), дублирую список:
// 1. Стив Макконнелл “Совершенный код”
// 2. Эрик Фримен, Элизабет Фримен, Кэтти Сьерра, Берт Бейтс “Паттерны проектирования”
// 3. Дастин Босуэлл, Тревор Фаучер “Читаемый код, или Программирование как искусство”
// 4. Дэвид Флэнаган "JavaScript. Подробное руководство"
// 5. Онлайн-учебник с ресурса https://learn.javascript.ru/  
// 6. Дуглас Крокфорд “JavaScript: сильные стороны”
// 7. Мэтт Вайсфельд “Объектно-ориентированное мышление”

// Пункты 4 и 7 у меня есть в формате PDF, можете написать мне в Slack и я вам их скину :)