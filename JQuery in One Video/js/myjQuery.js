//important
//  $(document).ready(function(){
// your code
//  })

$(document).ready(function () {
  console.log("New File");
  console.log("JQuery");

  // JQuery Syntax
  // $('selector').action()

  $("p").click(); //click on p
  $("p").click(function () {
    console.log("you clicked on p", this);

    // Hide all p
    // $('p').hide();
    // Only hide p which is clicked
    // $(this).hide();
  });

  // Selectors
  // 1.Element
  // 2.ID
  // 3.Class
});
