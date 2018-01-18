function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.getJSON("https://api.github.com/search/repositories?q=" + searchTerms, function(data){
    $("#results").html("<ul>" + data.items.map(item => "<li>" + item.name + "</li>") + "</ul>")
  })
}

$(document).ready(function (){

});
