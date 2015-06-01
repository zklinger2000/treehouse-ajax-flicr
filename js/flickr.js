//This is going to send the text of the button clicked to flickr's public API
//and return a feed of photos with that search term

//'ready' is a method from the DOM that runs as soon as the page is fully loaded
$(document).ready(function () {
  //select the form element on page and add an Event handler
  $('form').submit(function (evt) {
    //stop the browser's normal response to an event, in this case
    //it stops the normal submit button press from making the broswer leave the page
    evt.preventDefault();
    //jQuery function to get the text input element
    var $searchField = $('#search');
    //jQuery function to get the submit button
    var $submitButton = $('#submit');
    //this makes it so the search field can't be used while server is working on the response
    $searchField.prop("disabled", true);
    //this also sets the button text to "searching..."
    $submitButton.attr("disabled", true).val("searching...");
    
    //VARIABLES AJAX for using the flickr.com API
    //the url to public photo feed
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //the text from the input field
    var animal = $searchField.val();
    //jQuery expects a JavaScript object for options below
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    //this is our callback function
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function (i, photo) {
        //adding the class for the CSS
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        //adding the link to the image
        photoHTML += '<a href="' + photo.link + '" class="image">';
        //adding the <image>
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });//END each
      //add closing list tag
      photoHTML += '</ul>';
      //use jQuery to replace the html in the div id='photos'
      $('#photos').html(photoHTML);
      //re-enable the search fields and submit button
      $searchField.prop("disabled", false);
      //this also sets the button text back to Search"
      $submitButton.attr("disabled", false).val("Search");
    }//END callback function displayPhotos(data)
    //this is sending an AJAX request with url, JavaScript object, and callback function
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
});//END ready


//CHALLENGE
//1. Replace the button click event with a form submit avent
$('form').submit(function(evt) {
  //Stop the form from submitting
  evt.preventDefault();
  //Retrieve the value the visitor typed in the input field
  var searchTerm = $('#search').val();
});

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