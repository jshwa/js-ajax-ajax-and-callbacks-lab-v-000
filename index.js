function searchRepositories() {
  const searchTerms = $('#searchTerms')
  $.get("https://api.github.com/search/repositories?q=" + searchTerms)
}

$(document).ready(function (){

});
