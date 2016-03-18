var user = require('./../js/user.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#searchButton').click(function(){
      $('#results').empty();
    var userInfo = user.getRepos($('#inputBox').val());
  });
});
