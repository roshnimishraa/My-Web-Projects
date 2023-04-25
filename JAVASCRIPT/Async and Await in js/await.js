
// Syntax for async functions 

// async function name(params){
    //     // statements
    // }
    
    // async function fun1(){
    //     console.log('async function');
    //     return Promise.resolve(1);
    // }
    // fun1().then(function(res){
    //     console.log(res);
    // });
  
// Syntax for await keyword
//  let result = await Promise ;

 async function fun2() {
   let promise = new Promise((resolve,reject) => {
  setTimeout(() => resolve("Async/Await functions "),1000);
   })
   let result = await promise ; 
   console.log(result);
 }
fun2();
// async function always return a promise 
// await makes a function wait for a Promise 
// The await keyword can only be used inside an async func
