// When you pass a function as an
// argument, remember not to use parenthesis
// console.log("Asynchronous Programming in JS");

// // synchronous Programming
// function fun2(){
//     console.log("Fun 2 is running ")
// }
// function fun1 () {
//     console.log("Fun 1 is running ");
//     fun2();
//     console.log("Fun 1 is ended ");
// }
// fun1();
// Asynchronous Programming 
function fun2(){
    setTimeout(function(){
        console.log("Fun 2 is running "); 
    } , 5000)  //time in miliseconds 
}

function fun1(){
  console.log("Fun 1 is running ");
  fun2();
  console.log("Fun 1 is ended ");
}
fun1(); //call 

// Asynchronous programming is a technique that enables your program to start
//  a potentially long-running task and still be able to be responsive toother 
// events while that task runs, rather than having to wait until that task 
// has finished. 