  // $(document).ready(function(){
            //  jQuery code
        // })
// or 
// $(function(){
//     // jQuery content
// })
         
$(document).ready(function(){
    // $-jquery
// console.log($);
// console.log(jQuery);
// cdn - content delivery network

// syntax of jQuery 
// $('selector').action(); //By Default action is an event 
// $('p').click(function(){
//     console.log("You have clicked on <p>");
// });

// hide function 
// $('p').click(function(){
// //  $('p').hide(); //hide all p tag 
// $(this).hide();   // hide specific object using this keyword

// });

//     $('#first').hide();

// $(".cnt").hide();
// });
// selectors in jQuery 
// 1.element selector 
// 2.id selector
// 3.class selector

// element selector
// $('p').click();

// id selector
//  $(#id).click();

// class selector
//  $(.class).click();

// * selector selects all elements
//  $('*').click();

// $('element.classname').click();

// $('p:first').click();
// 


// Events in jQuery 

// 1.Mouse Events=click,dbclick,mouseenter,mouseleave
  // $('p').dblclick(function(){
  //   console.log("Double Clicked",this)
  // });

  // $('p').hover(function(){
  //   console.log("Hovered",this);
  
  
  
  // 2.Keyboard events = keypress,keydown,MediaKeyStatusMap
  // 3.Form Events = submit,change,focus,blur
  // 4.Document/ Window events = load,resize,scroll,unload
  
  // Multiple events in one single element 
  // $('p').on({
  //   click: function(){
  //     console.log("Thanks for Clicking",this);
      
  //   },
  //   mouseleave: function(){
  //     console.log("Mouseleave is happening",this);
  //   }
  // });

  //  $('#dummy').hide(5000,function(){
  //   console.log("hidden");
  //  });

  //  $('#dummy').show(5000,function(){
  //   console.log("Show");
  //  });

  // for toggeling of hide and show
  // $('#btn').click(function(){
  //   $('#dummy').toggle(5000);
  // });

  // Transition 
  // fade out
  // $('#btn').click(function(){
  //   $('#dummy').fadeOut(2000);
  // })

//  fadeIn
  // $('#dummy').hide();
  // $('#btn').click(function(){
  //   $('#dummy').fadeIn(2000);  //fadeIn only works when method is hide
  // })

// fadeToggle
// $('#dummy').hide();
// $('#btn').click(function(){
//   $('#dummy').fadeToggle(2000);  //fadeIn only works when method is hide
// })

// $('#btn').click(function(){
//   $('#dummy').fadeOut(2000);
//   $('#dummy').fadeIn(2000);
//   $('#dummy').fadeToggle(2000);
//   $('#dummy').fadeTo(2000);
// })

//  slide method
// 1. slideup
//  $('#dummy').slideUp(4000,function(){
//   console.log("Done");
//  });

// 2. slidedown - first hide function 
// $('#dummy').hide();
// $('#dummy').slideDown(4000,function(){
//   console.log("Done");
//  });

// 3. Slide Toggle
// $('#dummy').slideToggle(4000,function(){
//   console.log("Done");
// });

  
 // ADD ANIMATION 
//     $("#dummy").animate({
//    opacity: 0.7,
//    height:'100px',
//    width: '500px'
// },"slow"); //instead of 4000 use "fast" or "slow"

//  $("#dummy").animate({opacity:0.3},5000);
//  $("#dummy").animate({height:"100px"},5000);
//  $("#dummy").animate({width:"500px"},5000);

// DOM MANIPULATION 
// To change the text in DOM 
// $('#dummy').text("I have changed this text")

// To modify HTML content in div
// $("#dummy").html("<h1>Again Changed </h1>")

// Form Manipulation

$('#txtArea').val("Modified using jQuery");

// Empty the content 
//  $('#dummy').empty();

//  Remove element from DOM
// $('#btn').remove();

// Adding class name using jQuery 
// $('#inp').addClass('InputTag');
// $('#inp').click(function(){
//   console.log(this);
// });

// adding CSS using jQuery 
 $('#dummy').css('background-color','aqua');

//  AJAX using jQuery
// GET REQUEST 
//  $.get('https://code.jquery.com/jquery-3.6.3.min.js');

// $.get('https://code.jquery.com/jquery-3.6.3.min.js',function(data,status){
//   // alert(data);
//   alert(status);
// });

// POST REQUEST 
$.post('url',{name:'Roshni',Age:18},function(data,status){
  alert(status);
});
  });