// // Problem 
// // Fix only the last 2 statements in this Javascript snippet, 
// // so that the mapper function is called and the resultant object is logged.

// var employees = [
//     { 
//       id: 1, 
//       value: { name: 'test1' } 
//     },
//     { 
//       id: 2, 
//       value: { name: 'test2' } 
//     },
// ];

// function mapper(obj) {
//   return new Promise( (resolve) => {
//     obj.id = obj.id + 10;
//     resolve(obj);
//   } );
// }

// // Fix the below 2 statements so that mapper() is called and the result is printed as
// // [{ id: 11, value:'test1' }, { id: 12, value: 'test2'}]
// // const result = employees.map();
// // console.log(result);


// // Solution
// Promise.all(employees.map(mapper)).then((results) => {
//   const _employees = results.map((result) => ({
//       id: result.id, 
//       name: result?.value?.name,
//     }));
//   console.log(_employees);
// });


// /////////MCQ////////////////

// let __XYZ__ = 1;
// const o = {
//   __XYZ__: 2,
//   m() {
//     let __XYZ__ = 3;
//     console.log(this.__XYZ__ + __XYZ__);
//   },
// };


// (o.m, o.m)();

// // const arr = [1, 5, 3, 2, 4]

// // const sorted = arr.sort((a, b) => a - b)
// // sorted[0] = null

// // console.log(arr)

