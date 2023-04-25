// AJAX = Asynchronous JavaScript And XML.
// Syntax when sending request with AJAX to the server 
// var request = new XMLHttpRequest();
// request.open("GET","URL");
// request.send;

let btn=document.getElementById("btn");
btn.addEventListener('click',loadAboutInformation);

function loadAboutInformation(){
    var request=new XMLHttpRequest();
    request.open("GET","about1.html");
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.responseText);
            document.getElementById("container").innerHTML=this.responseText;

        }
    }
 request.send();
}