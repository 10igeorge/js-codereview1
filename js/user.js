var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userImageResult').append("<img src='"+response.avatar_url+"'</img>");
    $('#usernameResult').append("<h3>"+response.login+"</h3>");
    $('#repoNameResult').append(response.login);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
