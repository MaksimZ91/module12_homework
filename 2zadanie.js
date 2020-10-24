let book ={
    name: 'Мастер и Маргарита',
    autor:'Булгаков М.А.',
    numberOfPages: 300,
    anons: function (){
        console.log("Мастер и Маргарита, роман-загадка, книга, выходящая за рамки своего времени, заставляющая возвращаться к себе вновь и вновь.")
    }
}
function strInObj (str,obj){
   return console.log(str in obj)
};

strInObj("name",book);
strInObj("size",book);

// Всё верно, есть только небольшое замечание: строчка return console.log(str in obj) не имеет смысла, потому что так функция возвращает undefined (результат выполнения console.log) и это значение всё равно нигде не используется. Лучше написать либо просто console.log(str in obj), либо return str in obj и тогда обернуть в console.log сам вызов функции ниже.