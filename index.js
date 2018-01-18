function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, displayResults)
}

function displayResults() {
  const searchResults = JSON.parse(this.responseText)
  const results = $('#results')

}

$(document).ready(function (){

});
