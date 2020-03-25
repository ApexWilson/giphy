// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var custom_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$("#search-button").click(function(){ 
    fetch(custom_api_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        $(".text-center").html(`<img src ="${data.data[0].images.downsized_large.url}"><img>`);
      })
});