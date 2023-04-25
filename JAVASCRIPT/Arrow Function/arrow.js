// Creating Regular Function 
// function fun1(){
//     console.log("This is a Normal Function ");
// }
// fun1();

// Storing regular function inside a variable 

// const fun1=function(){
//     console.log("This is Normal Function ");
// }
// fun1();

// Arrow Function 
// let fun1=() =>{
//      console.log("This is Arrow Function ");
// }
// fun1();

//Arrow function declaration in one line 
// let fun1 = () => "This is One line arrow function declaration ";
//  console.log(fun1());

// Passing 1 parameter in arrow function 
// let fun1 = name => 'Hello'+name;
// console.log(fun1('Roshni '));

// Multiple Parameter in arrow function 
// let fun1 = (name,surname) => 'Hello '+ name+" "+surname;
// console.log(fun1('Roshni','Mishra'))

// const sq=(a) =>{
//     return a*a;
// }
// console.log(sq(5));


// Arrow function using this keyword 
// arrow functions the this keyword always represents the object that 
//defined the arrow function.

// $ : It is typically used as a selector
//  (i.e. a function that returns a set of elements found in the DOM).
const inventor = {
    inventorName : 'Brendan Eich',
   JavaScript: function() {
    return `${this.inventorName} is Father of Javascript `
   },
};
console.log(inventor.JavaScript());

