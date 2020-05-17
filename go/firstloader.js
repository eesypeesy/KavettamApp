
//DOM elements for theme switcher
const ticon = document.getElementById('themeIcon');
const body = document.body;
const theme = localStorage.getItem('theme');

//theme toggler
function toggleTheme(){
  if(body.classList == 'light') {
    toggleDark();
  }
  else {
    toggleLight();
  }
}

function toggleDark() {
  body.classList.replace("light" , "dark");
  ticon.src = "../assets/sun.png";
  localStorage.setItem('theme' , 'dark');
}

function toggleLight() {
  body.classList.replace("dark" , "light");
  ticon.src = "../assets/moon.png";
  localStorage.setItem('theme' , 'light');
}

//applying cache theme, if it exists
function cacheTheme() {
  if(theme) {
    if(theme == "dark") {
      toggleDark();
    }
    else {
      toggleLight();
    }
  }
}

