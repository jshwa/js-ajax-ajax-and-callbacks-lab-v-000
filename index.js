function getRepositories() {
  console.log("WTF")
  const username = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

$(document).ready(function (){

});
