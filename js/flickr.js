//'ready' is a method from the DOM that runs as soon as the page is fully loaded
$(document).ready(function () {
  //select all of the buttons on page and add an Event handler
  $('button').click(function () {
    //remove the 'selected' class from all buttons
    $('button').removeClass('selected');
    //add a class to the clicked on button
    $(this).addClass('selected');
  });
});//END ready