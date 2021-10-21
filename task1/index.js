const notes = [ {
   id: 1,
   title: 'Recipe',
   description: 'Ingredients include 2 eggs...',
   pagesCount: 2,
   isMarked: false,
   access: [],
   }, {
   id: 2,
   title: 'Workouts',
   description: '3 sets of squats...',
   pagesCount: 1,
   isMarked: true,
   access: []
   }, {
   id: 3,
   title: 'Passwords', 
   description: 'VISA ...',
   pagesCount: 6, 
   isMarked: true,
   access: []
   }, {
   id: 4,
   title: 'To Do 2021',
   description: '1. Learn JS...',
   pagesCount: 3,
   isMarked: false,
   access: []
   }]


//_______________SubTask 'А'___________________//
//---MAP---//
let done = 'I had done New Key/Value'

const mapFunc = (basicArr) => {
   let newArr = basicArr.map(item => {
      return {...item, done}
      }
   ) 
   return newArr// 
}
//console.log(`mapFunc`, mapFunc(notes)) // Made it without Poli

const poliMap = (basicArr) => {
   let newArr = []
   for (i = 0; i < basicArr.length; i++) {
      basicArr[i].data = done 
      newArr.push(basicArr[i])      
   }
   return newArr
}
//console.log('poliMap', poliMap(notes)) //Made with Poli MAP


//---FILTER---//
const filterFunc = (basicArr) => {
   let newArr = basicArr.filter(item => {
      return item.isMarked === true
   })
   return newArr
}
//console.log(`filterFunc`, filterFunc(notes)) // Made it without Poli

const polFilter = (basicArr) => {
   let newArr = []
   for (i = 0; i < basicArr.length; i++) {
      let filterLine = basicArr[i].isMarked
      filterLine !== false ? newArr.push(basicArr[i]) : newArr
   }
   return newArr
}
//console.log('polFilter', polFilter(notes)) //Made with Poli FILTER


//---REDUCE---//
const reducerFunc = (basicArr) => {
   let newArr = basicArr.reduce((accum, item) => {
      return (
         accum + item.id
      )
   }, 0);
   return [...basicArr, {lengthID: `Итоговая сумма значений id Масива - ${newArr}`}] //Made it without Poli, with final result
}   
//console.log('reducerFunc', reducerFunc(notes))


const polReducer = (basicArr, accum) => {
   let newArr = []
   for (let i = 0; i < basicArr.length; i++) {
      accum += basicArr[i].id;
      basicArr[i].lengthID = `Текущая сумма значений id Масива - ${accum}`
      newArr.push(basicArr[i])
   }
   return newArr
}
// console.log('polReducer', polReducer(notes, 0)) //Made it with Poli, with intermediate result


//_______________SubTask 'Б'___________________//
/* ---1---
1. Используя массив, представленный ниже, и функцию map, реализованную в предыдущем задании, необходимо получить новый массив вида [{id: ..., title: ... },...]
*/

const poliMapB_1 = (basicArr) => {
   let newArr = []
   for (i = 0; i < basicArr.length; i++) {
      let ability = {
         id: basicArr[i].id,
         title: basicArr[i].title
      } // Created new Obj

      basicArr[i].ability = ability // Added current value

      delete basicArr[i].id 
      delete basicArr[i].title // Deleted dublicate from current array

      newArr.push(basicArr[i]) // Push accurate elems 
   }
   return newArr
}
// console.log(`poliMapB_1`, poliMapB_1(notes))


/* ---2---
Используя массив и функцию filter, реализованную в предыдущем задании, необходимо получить новый массив, состоящий только из помеченных элементов (isMarked: true).
*/
const polFilterB_2 = (basicArr) => {
   let newArr = []
   for (i = 0; i < basicArr.length; i++) {
      let filterLine = basicArr[i].isMarked
      filterLine !== false ? newArr.push(basicArr[i]) : newArr
   }
   return newArr
}
// console.log(`polFilterB_2`, polFilterB_2(notes))


/* ---3---
Используя массив и функцию reduce, реализованную в предыдущем задании, необходимо получить общее количество страниц, которое занимают заметки (сумма страниц). 
*/
const polReducerB_3 = (basicArr, accum) => {
   let newArr = []
   for (let i = 0; i < basicArr.length; i++) {
      accum += basicArr[i].pagesCount;
      newArr = `Итоговая сумма страниц - ${accum}`
   }
   return newArr
}
// console.log(`polReducerB_3`, polReducerB_3(notes, 0))


//_______________SubTask 'В'___________________//
// Написать функцию, не используя какие-либо библиотеки, которая будет получать массив чисел и возвращать число, которое встречается в этом массиве только один раз. При условии, что этот элемент точно существует и он единственный. Необходимо учитывать сложность алгоритма!//
const testArray = [1,1,1,2,2,3,4,4,5,5,5,5]

const findSingleNumber1 = (basicArr) => {
   let uniqData = []
   for (let i = 0; i < basicArr.length; i++) { //Frst iteration
      let element = basicArr[i]; 
      let counter = 0; //Created helpers

      for (let t = 0; t < basicArr.length; t++) { //scnd iteration
         if (element === basicArr[t]) {
            counter++ // changed counter
         }
      }
      if (counter === 1) {
         uniqData.push(element) // conditions 
      }
   }
   return uniqData.join(', ') //  based on O(n^2) not good
}
//console.log('findSingleNumber, Уникальное число/ла :', findSingleNumber1(testArray))


const findSingleNumber2 = (basicArr) => {
   let uniqData = basicArr.filter((item) => {
      console.table(basicArr.indexOf(item), basicArr.lastIndexOf(item))
      return basicArr.indexOf(item) === basicArr.lastIndexOf(item) 
      // search from head - indexOf
      // search from back = lastindexOf
      // If our number positions is particular, we have to return true/unq number 
   })
   return uniqData.join(', ') // to string
}

//console.log('findSingleNumber2, Уникальное число/ла:', findSingleNumber2(testArray))
