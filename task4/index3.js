//---SubTask---В. 
//Написать Promise который выводит console.log в случае если время выполнения не превысило 2 секунд, и console.error в случае если превысило. Время должно определяться случайным образом, использовать внутренний обработчик ошибок для Promise.//

createError = () => error = new Error('Time out...');
createSuccess = () => createSuccess = 'Well done!';
generatorHelper = () => number = Math.floor(Math.random()*10)*1000;

function generatorCheker(delay) {
  console.log('Start Number Generator...')
  console.log(delay)
  let promise = new Promise((resolve, reject) => {
     setTimeout(() => {
        delay <= 2000 ? resolve() : reject()
     }, delay)
  })
  return promise
}

generatorCheker(generatorHelper())
  .then(() => console.log(createSuccess()))
  .catch(() => console.error(createError()))
