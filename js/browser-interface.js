var users = require('./../js/users.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  users.getRepos();
});
