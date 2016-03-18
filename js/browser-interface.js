var users = require('./../js/users.js');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  console.log('yo! I am working!');
  users.getRepos();
});
