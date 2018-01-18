function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms)
}

function displayResults(response) {
  const searchResults = JSON.parse(response);
  const results = $('#results').html();
  results = searchResults.map(r => r.name)
}

$(document).ready(function (){

});
