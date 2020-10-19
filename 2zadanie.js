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

