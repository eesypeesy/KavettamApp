
const bar = document.getElementById("menubar");
const menuName = document.getElementById("menuname");
const header = document.getElementById("menuhead");
const themeIcon = document.getElementById("themeIcon");

bar.onmouseover = () => {
  menuName.style.opacity = ".5";
  header.style.opacity = ".5";
  themeIcon.style.opacity = ".5";
  
}
bar.onmouseout = () => {

  menuName.style.opacity = "1";
  header.style.opacity = "1";
  themeIcon.style.opacity = "1";
}

