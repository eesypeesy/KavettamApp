
const bar = document.getElementById("menubar");
const menuName = document.getElementById("menuname");
const themeIcon = document.getElementById("themeIcon");

bar.onmouseover = () => {
  menuName.style.opacity = ".1";
  
}
bar.onmouseout = () => {

  menuName.style.opacity = "1";
}

