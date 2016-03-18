var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#results').show();
    $('#userImageResult').append("<img id='userImage' src='"+response.avatar_url+"'</img>");
    $('#userLoginResult').append("<h3><a href='https://github.com/"+response.login+"'>"+response.login+"</a></h3>");
    $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(repo){
      for(var i=0; i < repo.length; i++){
        if (repo[i].description.length != 0){
          $('#repoNameResult').append("<p><a href='https://github.com/10igeorge/"+repo[i].name+"'>"+repo[i].name+"</p>");
          $('#repoNameResult').append("<p id='info'>"+repo[i].description+"</p><hr>");
        } else {
          $('#repoNameResult').append("<p><a href='https://github.com/10igeorge/"+repo[i].name+"'>"+repo[i].name+"</p><hr>");
        }
      }
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
