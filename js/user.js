var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/10igeorge?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.avatar_url);
    console.log(response.login);
    console.log(response.name);
    console.log(response.repos_url);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
