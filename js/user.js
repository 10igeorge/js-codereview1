var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#results').show();
    $('#results').append("<img id='userImage' src='"+response.avatar_url+"'</img><h3><a href='https://github.com/"+response.login+"'>"+response.login+"</a></h3><h4>"+response.name+"</h4><dl class='dl-horizontal'><dt>Followers</dt><dd>"+response.followers+"</dd><dt>Following</dt><dd>"+response.following+"</dd></dl><br><p id='joinDate'>Joined: "+moment(response.created_at).format('LL')+"</p><h5>Public Repositories: </h5><br>");
    $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(repo){
      for(var i=0; i < repo.length; i++){
        if (repo[i].description.length != 0){
          $('#results').append("<p><a href='https://github.com/10igeorge/"+repo[i].name+"'>"+repo[i].name+"</a></p><p id='repoInfo'>Created: "+moment(repo[i].created_at).format('LL')+"</p><p id='repoInfo'>Description: "+repo[i].description+"</p><hr>");
        } else {
          $('#results').append("<p><a href='https://github.com/10igeorge/"+repo[i].name+"'>"+repo[i].name+"</p></a><p id='repoInfo'>Created: "+moment(repo[i].created_at).format('LL')+"</p><hr>");
        }
      }
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
