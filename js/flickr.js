//'ready' is a method from the DOM that runs as soon as the page is fully loaded
$(document).ready(function () {
  //select all of the buttons on page and add an Event handler
  $('button').click(function () {
    //remove the 'selected' class from all buttons
    $('button').removeClass('selected');
    //add a class to the clicked on button
    $(this).addClass('selected');
    
    //VARIABLES for using the flickr.com API
    //the url to public photo feed
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne/jsoncallback=?";
    //the text from the button that was clicked
    var animal = $(this).text();
    //jQuery expects a JavaScript object for options below
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    //this is our callback function
    function displayPhotos(data) {
      
    }
    //this is sending an AJAX request with url, JavaScript object, and callback function
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
});//END ready

/*
THis is an alternative way to do the getJSON call that we will see
getJSON("http://api.flickr.com/services/feeds/photos_public.gne/jsoncallback=?",
        {
          tags: animal,
          format: "json"
        },
        function (data) {
        
        }
       );//END getJSON



*/