function searchRepositories() {
  const searchTerms = $('#searchTerms').value
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(response){
    $('#results').html(response)
  })
}

$(document).ready(function (){

});
