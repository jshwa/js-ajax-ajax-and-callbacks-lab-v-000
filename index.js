$(document).ready(function (){

  function seachRepositories() {
    const searchInput = document.getElementById("searchTerms").innerHTML;
    const searchTerms = searchInput.split(" ").join("+")
    debugger
    $get("https://api.github.com/search/repositories?q=" + searchTerms)
  }

});
