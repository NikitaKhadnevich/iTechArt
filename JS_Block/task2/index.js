

//_______________SubTask 'А'___________________//
/*Необходимо найти ошибку в коде, исправить её и написать функцию
bind, которая позволяет привязать контекст (значение this) к функции. Пример задания указан ниже. */

window.x = 1;
var context = { x: 2 };

function testThis(y) {
   console.log(`x=${this.x}, y=${y}`);
}
//testThis(100); // x=1, y=100
const boundFunction = testThis.bind(context);
boundFunction(100); // x=2, y=100


function bind(myFunc, myContext) {
   return function(y) {
      return myFunc.call(myContext, y)
      //or
      return myFunc.apply(myContext, [y])
      //or
      return myFunc.bind(myContext)(y)
   }
}
const boundFunction2 = bind(testThis, context);
boundFunction2(100); // x=2, y=100



function bind(func, data) {
   return function(y) { // added closure
      data.func = func
      data.func(y) //call it
   }
}
const boundFunction3 = bind(testThis, context);
boundFunction3(100); // x=2, y=100
//---- OR-----//

function bind(func, data) {
   return function(y) { // added closure
      const WRAP = {
         x: data.x,
         func
      }
      WRAP.func(y)
   }
}
const boundFunction4 = bind(testThis, context);
boundFunction4(100);


//_______________SubTask 'Б'___________________//
/*Используя следующие функции, выведите в консоль ответы, указанные ниже, посредством bind, call или apply. Кроме того, исправьте ошибку в конструкторе.*/
   class Robot { 
      constructor(name) {
         this.name = name;
      }
   }

   function add (op1, op2) {
      this.name = this.name || 'Human';
      return this.name + ' can count to ' + (op1 + op2);
   }

   const voltron = new Robot('Voltron');
      'Human can count to 1' //0 + 1
      'Voltron can count to 3' //1 + 2
      'Voltron can count to 50' //20 + 30

   const getBind = add.bind({name: false}, 0,1)
   console.table(
      getBind(),
      add.call(voltron, 1,2),
      add.apply(voltron, [20, 30])
   )


