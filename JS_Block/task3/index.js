// Необходимо реализовать простую таблицу из списка элементов,
// начальное значение которых представлено ниже. Создать кнопку, по нажатию на которую, спустя 3 секунды от клика, каждые 5 секунд будет запускаться проверка статусов элементов таблицы. Если хотя бы один элемент таблицы имеет статус “Pending”, то функция должна изменять его на статус “Done”. Когда “Pending”статусов больше не останется, необходимо завершить работу таймера. Каждый вызов функции сопровождается выводом в консоль “Check started”. За один вызов функции может быть изменён статус только ОДНОГО элемента таблицы.
//

const DOWNLOADS = [
   {id: 1, title: 'Recipe', status: 'Done'},
   {id: 2, title: 'Workouts', status: 'Pending'},
   {id: 3, title: 'Passwords', status: 'Pending'},
   {id: 4, title: 'To Do 2021', status: 'Pending'},
   {id: 5, title: 'Books', status: 'Failed'}
]
const button = document.getElementById("button")
const list = document.getElementById("list")

function state(arr) {
   const newArr = []
      for (let i = 0; i < arr.length; i++) {
         function timeOutWrapper(currentItem) {
            setTimeout(         
               () => {
                  console.log('Check started')
                  if (currentItem.status !== 'Pending') {
                     newArr.push(arr[i])
                     render(newArr)
                  }
                  else if (currentItem.status === 'Pending') {
                     let success = { ...currentItem, status: 'Done' }
                     newArr.push(success)
                     render(newArr)
                  }

                  (function(arr){
                     if (newArr.length == arr.length)	{
                           console.log('We did it!')
                           clearTimeout(timeOutWrapper)
                     }
                  })(arr)
                  }, 5000 * i)
         }
         timeOutWrapper(arr[i])
      }
}


button.addEventListener('click', () => setTimeout(state, 3000, DOWNLOADS));

const render = (arr) => {
   const items = arr.map((item, i) => {
   return (`<div id="downloads">
               <li id="number">${item?.id}</li>
               <li id="title">${item?.title}</li>
               <li id="status">${item?.status}</li>
            </div>`);
   });
   list.innerHTML = items;
}
render(DOWNLOADS)


//_______________SubTask 'Б'___________________//




