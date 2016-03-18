var user = require('./../js/user.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#searchButton').click(function(){
    user.getRepos($('#inputBox').val());
  });
});
