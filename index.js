function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.getJSON("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    $("#results").html(
      data)
  })
}

$(document).ready(function (){

});
