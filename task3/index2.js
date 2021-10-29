//Б. Создать два поля для ввода текста (привязка к одной форме). При обновлении одного из них, изменения дублируются во втором спустя секунду после того, как пользователь перестал печатать.//

const main = document.getElementById('main') 
const depend = document.getElementById('depend') // Our inputs

function onChange() {
  console.log(main.value)
  depend.value = main.value;  //5. transmited
}

const transmitter = (onChangeFn, delay) => {
  let setTime; //1. Init 
  return function () { // Wrapper for local context
      //2. Just call callWraper using context and arguments main-input
      const callWrapper = () => { 
        onChangeFn.apply(this, ...arguments) 
        //this - our input, arguments - our target value, its too important!
      }

      clearTimeout(setTime); //3. If we should make any actions with input - cancel our Timeout

      setTime = setTimeout(callWrapper, delay) //4. will make TimeOut great again:)) //
  };
}

onChangeTimer = transmitter(onChange, 1000);
main.addEventListener('keyup', onChangeTimer);

