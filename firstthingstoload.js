
//loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 0);
  //cacheTheme();
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
