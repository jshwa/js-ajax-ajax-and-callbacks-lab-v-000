function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(response){
    $('#results').html(response)
  })
}

$(document).ready(function (){

});
