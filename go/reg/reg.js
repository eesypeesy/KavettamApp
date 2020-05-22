
const bar = document.getElementById("menubar");
const menuName = document.getElementById("menuname");
const bottom = document.getElementById("bod");
bar.onmouseover = () => {
  if(window.innerWidth < 500){
  menuName.style.opacity = ".1";
  bottom.style.marginTop = "20%";}
}
bar.onmouseout = () => {
  if(window.innerWidth < 500){
  menuName.style.opacity = "1";
  bottom.style.marginTop = "0%";}
}
function sendProblem() {
  window.open("https://api.whatsapp.com/send?phone=+918281058094&text=SFI%20Online%20Kalotsavam%20Registration%20problem%20:%20%22your%20problem%20here%22");
}function Branch() {
  document.getElementById("branchlist").style.display = "block";
}	function checkBranch(arg) {
  const a= String(arg);
  let b = document.getElementById(a).innerHTML;
  document.getElementById("selectBranch").value = b;
  document.getElementById("branchlist").style.display = "none";
}	function Event() {
  document.getElementById("eventlist").style.display = "inline";
}function checkEvent(arg) {
  const a= String(arg);
  let b = document.getElementById(a).innerHTML;
  document.getElementById("selectEvent").value = b;
  document.getElementById("eventlist").style.display = "none";
}function display(idname) {
  if(document.getElementById(idname).style.display =="none"){
    document.getElementById(idname).style.display = "block";
  }else{
    document.getElementById(idname).style.display ="none";
  }
}