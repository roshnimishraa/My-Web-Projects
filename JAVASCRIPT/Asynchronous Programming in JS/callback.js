
// function fun1(){
//     console.log("Fun1 is executing");

// }
// function fun2(){
//     console.log("Fun2 is executing");

// }
// fun1();
// fun2();

// using callback function 

function msg(str){
    setTimeout(function() {
        console.log("Callback works ");
    },5000);
}
msg();
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished