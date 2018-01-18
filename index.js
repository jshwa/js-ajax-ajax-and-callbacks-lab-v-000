function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, displayResults).fail(displayError())
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el) {
  $.get(el.dataset.url, function (data) {
    $('#details').html("<ul>"+data.map(commit => "<li>" + commit.commit.author.name + "</li>")+"</ul>")
  })
}

$(document).ready(function (){

});
