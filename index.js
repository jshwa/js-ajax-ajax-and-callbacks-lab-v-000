function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    $("#results").html("<ul>" + data.items.map(item => "<li>" + item.name + "- <a href='#' data-url='" + item.url + "/commits" + "'onclick='showCommits(this)'> Get Commits</a></li>") + "</ul>")
  }).fail(displayError())
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el) {
  $.get(el)
}

$(document).ready(function (){

});
