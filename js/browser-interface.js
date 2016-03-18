var user = require('./../js/user.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#searchButton').click(function(){
    $('#results').empty();
    var userInput = $('#inputBox').val();
    if (userInput.length !== 0){
      user.getRepos(userInput);
    } else {
      alert("Please enter a GitHub username!");
    }
  });
});
