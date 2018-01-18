function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, displayResults).fail(displayError)
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function displayResults(data) {
  resultsHTML = data.items.map (result =>
    ` <a href="${result.html_url}">${result.name}</a>
      <p><a href="#" data-url="${result.url}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>`)
  $("#results").html(resultsHTML)
}

function showCommits(el) {
  $.get(el.dataset.url, function (data) {
    $('#details').html("<ul>"+data.map(commit => "<li>" + commit.commit.author.name + "</li>")+"</ul>")
  })
}

$(document).ready(function (){

});
