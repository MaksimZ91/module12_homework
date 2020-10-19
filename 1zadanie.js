let book ={
    name: 'Мастер и Маргарита',
    autor:'Булгаков М.А.',
    numberOfPages: 300,
    anons: function (){
        console.log("Мастер и Маргарита, роман-загадка, книга, выходящая за рамки своего времени, заставляющая возвращаться к себе вновь и вновь.")
    }
}

function find (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)&&typeof obj[key] !=="function")
            console.log(`Ключ - ${key}, Значение - ${obj[key]}`)
    }
}
book.anons()
find(book)

/*function find  (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key))
            console.log(`Ключ - ${key}, Значение - ${obj[key]}`)
    }
}*/