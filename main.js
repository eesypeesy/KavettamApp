
const bar = document.getElementById("menuname");
const header = document.getElementById("menuhead");
const yorum = document.getElementById("yorum");
const image = document.getElementById("image");

bar.onmouseover = () => {
  image.style.opacity = ".5";

  //menuName.style.opacity = ".3";
  header.style.opacity = ".3";
  yorum.style.marginTop = "30%";
}
bar.onmouseout = () => {
  image.style.opacity = ".9";

  //menuName.style.opacity = "1";
  header.style.opacity = "1"; 
   yorum.style.marginTop = "20%";

}

