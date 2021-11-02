//---SubTask---А.
//Необходимо дополнить код, используя Promise. Функция должна вывести ‘hi’ через 2 секунды.//

function delay(duration){
  console.log('...Request') 
  const promise = new Promise((resolve, reject) => { // Created Promise
    setTimeout(() => { //Make some delay like a request to serv
      resolve()        // recive result
    }, duration);      // delay for request
  })
  return promise       
}

function logHi(){
  console.log('Hi');
}

delay(2000).then(logHi) //chaining



