var user = require('./../js/user.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#searchButton').click(function(){
    var userInfo = user.getRepos($('#inputBox').val());
    $('#results').show();
  });
});
