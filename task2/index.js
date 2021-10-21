

//_______________SubTask 'А'___________________//
/*Необходимо найти ошибку в коде, исправить её и написать функцию
bind, которая позволяет привязать контекст (значение this) к функции. Пример задания указан ниже. */

window.x = 1;
const context = { x: 2 };

function testThis(y) {
   console.log(`x=${this.x}, y=${y}`);
}
testThis(100); // x=1, y=100


const boundFunction = testThis.bind(context);
console.log(boundFunction(100)); // x=2, y=100


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

   let getBind = add.bind({name: false}, 0,1)
   console.table(
      getBind(),
      add.call(voltron, 1,2),
      add.apply(voltron, [20, 30])
   )


