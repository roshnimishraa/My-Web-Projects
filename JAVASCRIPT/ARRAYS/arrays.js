console.log("Arrays in JS ");
// 2 syntax to create array
// let arr=[3,4,5,'cs',null];
let arr1=new Array(1,2,3,4,'cse');
// console.log(arr1);

let arr2=['1st elem','2nd elem','3rd elem'];
// console.log(arr2[0]);
// 3rd element 
// console.log(arr2[arr2.length-1]);

// indexOf() function/method
let students=['Roshni','Satish','Ashish'];
let a=students.indexOf('Ashish');
// console.log(a);

// sort 
// let arr3=[34,45,65,67,32,23];
// console.log(arr3.sort());

//reverse 
let arr3=[34,45,65,67,32,23];
console.log(arr3.reverse());

// concat
let alpha=['computer','science','engineering'];
let numeric =[1,3,4];
let alphanumeric=alpha.concat(numeric)
console.log(alphanumeric)

//push() --from end
let city=['Delhi','Mumbai','Masoorie']
      city.push('UttarPradesh');
    //   console.log(city);

//pop() --from end
city.pop();
// console.log(city);

// shift()--delete first item
city.shift();
// console.log(city);
//unshift -- adds at front 
// city.unshift('Africa');
// console.log(city);

// Objects in javascript 
// 2 syntax 
// let user={
//     name:'Roshni',
//     age:18,
//     language:'JavaScript'
// }
// console.log(user);
// console.table(user);
let user = new Object();
user.name='Roshni Mishra';
user.age=18;
user.language='JavaScript';
console.log(user);