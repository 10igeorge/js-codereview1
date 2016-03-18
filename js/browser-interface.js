var user = require('./../js/user.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#searchButton").click(function(event){
    event.preventDefault();
    var username = $("#inputBox").val();
    username.getRepos();

    console.log(user);
  });
});
