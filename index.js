function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    $("#results").html(data.items.map(item => item.name))
  })
}

$(document).ready(function (){

});


