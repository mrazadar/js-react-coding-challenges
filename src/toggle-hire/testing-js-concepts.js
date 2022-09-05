function foo() {
  function bar() {
    return "bar1";
  }
  return bar();
  function bar() {
    return "bar2";
  }
}
console.log(foo());
// function sum(n){
//   var item =  function(value){
//       return sum(n + value)
//   }

//   item.valueof = item.toString() = function(){
//       return n;
//   }

//   return item;
// }

// console.log(sum()); // 0
// console.log(sum(1)()); // 1
// console.log(sum(1)(2)()); // 3
// console.log(sum(1)(2)(3)()); // 6
// console.log(sum(1)(2)(3)(4)()); // 10
// const {performance} = require('perf_hooks');
// const startDate = Date.now();
// console.log(performance.now())
// matrix = new Array(10).fill(new Array(10)) //10x10
// // console.log(JSON.stringify(matrix))
// matrix[0][0] = "first";
// matrix[1][0] = "second";
// // console.log(matrix[0][0], matrix[1][0], matrix[2][0]); // ?
// matrix.forEach(m => console.log(JSON.stringify(m)))
// console.log(performance.now())
// console.log(Date.now() - startDate)
// console.log(typeof []);
// console.log("foobar")

// [1, 2].forEach(console.log)

// const obj1 = {property1: 10};  
// Object.preventExtensions(obj1);
// const obj2 = { __proto__: obj1 };
// const obj3 = { __proto__: obj2 };
// const obj4 = Object.freeze(obj2);

// console.log(Object.isExtensible(obj1))
// // console.log(obj1)
// obj1.name = 'saaleem'
// // console.log(obj1)
// obj3.age = 'saaleem'
// console.log(obj3)

// console.log(obj2)
// obj2.name = 'saaleem'
// console.log(obj1)


// function Fox(age) {
//   this.age = age || 100;
// }
// Fox.prototype.say = function (num) {
//   console.log(this.age || 20 + Math.floor(Math.PI) * num);
// }
// var f = new Fox(10);
// f.say.call({}, 5);
// console.log(Math.floor(Math.PI))
// for(let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// should output 0 1 2 3 4 


// var employees = [
//   { 
//     id: 1, 
//     value: { name: 'test1' } 
//   },
//   { 
//     id: 2, 
//     value: { name: 'test2' } 
//   },
// ];

// function mapper(obj) {
// return new Promise( (resolve) => {
//   obj.id = obj.id + 10;
//   resolve(obj);
// } );
// }

// // Fix the below 2 statements so that mapper() is called and the result is printed as
// // [{ id: 11, value:'test1' }, { id: 12, value: 'test2'}]
// const result = employees.map(mapper);
// console.log(result);


// // Solution
// Promise.all(employees.map(mapper)).then((results) => {
//   const _employees = results.map((result) => ({
//       id: result.id, 
//       name: result?.value?.name,
//     }));
//   console.log(_employees);
// });

// function sum(x){
//   return function(y){
//       if(typeof y!== 'undefined'){
//           console.log(arguments.callee)
//           x=x+y;
//           return arguments.callee;
//       }
//       else{
//           return x;
//       }
//   }
// }

// console.log(sum(1)(2)(3)()); // 10


// console.log(2 ** 3)
// console.log(false || '' || [] || {} || new WeakSet() || 5)

// //Macro tasks and micro tasks

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

//1, 7, 3, 5, 2, 6, 4
// let i = 0;

// let start = Date.now();

// function count() {

//   // move the scheduling to the beginning
//   if (i < 1e9 - 1e6) {
//     setTimeout(count); // schedule the new call
//   }

//   do {
//     i++;
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     console.log("Done in " + (Date.now() - start) + 'ms');
//   }

// }

// count();

// // Currying example
// function curry(func) {

//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
// console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
// console.log( curriedSum(1)(2)(3) ); // 6, full currying

// // Note: adding more function in the later i.e curriedSum would 
// // break the code as the Sum is not expecting a fourth argument. 
// // The most appropriate usage of currying would be to make configurabel utils 
// // where the number of arguments and configurations are pre-defined.


// function fetchService (url){
//   return function fetch(authToken){
//     return {
//       create: ({
//         endpoint= '/create', 
//         data={}, 
//         ...args
//       })=> {
//         console.log('created: ', `${url}/${endpoint}`, data, args);
//       },
//       update: ({
//         endpoint= '/update', 
//         data={}, 
//         ...args
//       })=> {
//         console.log('updated: ', endpoint, data, args);
//       },
//       delete: ({
//         endpoint= '/delete', 
//         data={}, 
//         ...args
//       })=> {
//         console.log('deleted: ', endpoint, data, args);
//       }, 
//       patched: ({
//         endpoint= '/patch', 
//         data={}, 
//         ...args
//       })=> {
//         console.log('patched: ', endpoint, data, args);
//       },
//     }
//   }
// }

// const fetchInitializer = fetchService('http://www.nonoapi/users/');

// fetch.create({
//   endpoint: 'createUser',
// });


// // function sum(n1){

// //   console.log(arguments.length)
// //   console.log(func.length)
// //   return function(n2){
// //     return function(n3){
// //       return n1 + n2 + n3;
// //     }
// //   };
// // }

// // console.log(sum(1, 2)); //no currying
// // console.log(sum(1)(2)(3)); //with currying
