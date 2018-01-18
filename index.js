function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, displayResults())
}

function displayResults() {
  const searchResults = JSON.parse(this.responseText);
  const results = $('#results').html();
  results = searchResults.map(r => r.name)
}

$(document).ready(function (){

});
