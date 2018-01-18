$(document).ready(function (){

  function seachRepositories() {
    const searchInput = document.getElementById("searchTerms").value;
    const searchTerms = searchInput.split(" ").join("+")
    debugger
    $.get("https://api.github.com/search/repositories?q=" + searchTerms)
  }

});
