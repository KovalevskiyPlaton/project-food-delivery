"use strict";

// const p = document.querySelectorAll('p');
// console.log(p);
// //скрипты defer никогда не блокируют страницу, и выполняются когда, дом дерево уже готова 
// //async - асинхронные скрипты, не зависимые друг от друга и от других скриптов, выполняются в очереди: кто первый загрузился
// //при их использовании мы должны быть , уверены в том, что они также не зависят и от DOM структуры и других скриптов
// const script = document.createElement('script');
// script.src = "test.js";
// document.body.append(script);

// 037 ClassList и делегирование событий

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');



 
// console.log(btns[0].classList.item(1)); 
// console.log(btns[1].classList.add('red')); 
// console.log(btns[0].classList.remove('blue')); 
// console.log(btns[0].classList.toggle('blue')); //удаляет в случае если уже есть или добавляет классы если таких нет


//тайм код 01:02

// if (btns[1].classList.contains('red')){
//     console.log('red');
// }
btns[0].addEventListener('click', ()=>{
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red'); //тоже работает как и 28-33
}); 


// console.log(btns[0].className); //устаревший способ


//делегирование событий

wrapper.addEventListener('click', (event) =>  {
//   console.dir(event.target); //console.dir применяется для того, чтобы уивдеть  event.target в качестве объекта  
if (event.target && event.target.tagName == "BUTTON");{           //срабатывает класс button срабатывает класс c классом DIV
    console.log('Hello');
}

 });
