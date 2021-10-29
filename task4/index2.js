//---SubTask____Б.
//Перепишите код, чтобы в консоль выводилось последовательное "D0", "D1", ...,"D9".//

//---First var---//
// function makeDroids() {
//   const droids = [];
//     for (let i = 0; i < 10; i++) { //var to let))//
//     const droid = () => {
//       console.log('D' + i);
//     };
//     droids.push(droid);
//     }
//     return droids;
// }
// for (let d of makeDroids()) {
//   d();
// }


//---Second var---//
// function makeDroids() {
//   const droids = [];
//     (function() {for (let i = 0; i < 10; i++) { //IIFE//
//     const droid = () => {
//       console.log('D' + i);
//     };
//     droids.push(droid);
//     }
//     })()
//     return droids;
// }
// for (let d of makeDroids()) {
//   d();
// }

//---Third var---(for work will comment above 'couple'//
function makeDroids() { 
  const droids = [];
  return function() { 
    for (let i = 0; i < 10; i++) { //With Closure//
    const droid = () => {
      console.log('D' + i);
    };
    droids.push(droid);
    }
    return droids;
  }
}
const data = makeDroids()

for (let d of data()) {
  d();
}