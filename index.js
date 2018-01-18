function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    $("#results").html("<ul>" + data.items.map(item => "<li>" + item.name + "</li>") + "</ul>")
  }).fail(displayError())
}

function displayError() {
  $("#results").html("I'm sorry, there's been an error. Please try again.")
}

$(document).ready(function (){

});
