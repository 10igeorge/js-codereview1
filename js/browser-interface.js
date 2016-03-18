var users = require('./../js/users.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#searchButton").click(function(){
    var username = $("#inputBox").val();
    users.getRepos();
    console.log(username);
  });
});
