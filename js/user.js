var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userImageResult').append("<img src='"+response.avatar_url+"'</img>");
    $('#userNameResult').append("<h3"+response.name+"</h3>");
    $('#userLoginResult').append("<h5>"+response.login+"</h5>");
    $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(repo){
      for(var i=0; i < repo.length; i++){
        $('#repoNameResult').append("<p>"+repo[i].name+"</p>");
      }
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
