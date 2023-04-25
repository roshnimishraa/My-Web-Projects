// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

function fun1(){
    return new Promise(function(resolve,reject){
   setTimeout(function() {
    const error = false;
    if(!error){
        console.log("Promise operation is Successful");
        resolve();
    }
    else{
        console.log("Promise operation is Unsuccessful")
        reject("Mission Failed");
    }
   }, 3000);
    })
}

fun1().then(function (){    // then when promise is resolve()
    console.log("Thanks ");

}).catch(function(error){     //catch when promise is reject()
    console.log("No thanks "+error);
})

