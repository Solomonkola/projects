var b = 1;
function toggle(a) {
  if (a == 1) {
    document.getElementById("side_bar").style.display = "block";
    document.getElementById("toggle_buttn").style.display = "none";
    document.getElementById("blur").style.display = "block";
    document.getElementById("over_flow").style.overflow = "hidden";
    // document.getElementById("toggle").style.display = "flex";
    b++;
  } else if (a == 2) {
    document.getElementById("side_bar").style.display = "none";
    document.getElementById("toggle_buttn").style.display = "flex";
    document.getElementById("blur").style.display = "none";
    document.getElementById("over_flow").style.overflow = "auto";
    b--;
  }
  console.log(b);
}

/*for (let i = 0;i<=3;i++){
  
  }
  document.getElementById("demo").innerHTML = text;
  function plusSlides(n) {
  let showslide = numbertext.innerHTML;
  ocument.getElementById("toggle_butto").style.display = "flex";
  
  console.log(showslide)
  
  }*/
let slideInde = 0;
showSlides(slideInde);
function plusSlides(n) {
  showSlides((slideInde += n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("fade");
  if (n > slides.length) {
    slideInde = 1;
  }
  if (n < 1) {
    slideInde = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideInde - 1].style.display = "block";
}
let slideIndex = 0,slideButton=document.getElementsByClassName("slide_button");
showSlide();
 
function showSlide() {

  let slides = document.getElementsByClassName("fade");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slideButton[i].style.backgroundColor = "white";
  }
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
   
  slides[slideIndex - 1].style.display = "block";
  slideButton[slideIndex - 1].style.backgroundColor = "blue";
  setTimeout(showSlide, 5000);
}
let  q = setInterval(check, 1000),c;
function check() {
 c= window.innerWidth

 view()
}
function view() {
  c;
   

   if (c > 750) {
   // document.getElementById("side_bar").style.display = "block";
   document.getElementById("side_bar").style.display = "block";
    document.getElementById("toggle_buttn").style.display = "none";
    document.getElementById("blur").style.display = "block";
  } 
 
  }

check();


let e = document.getElementsByClassName("fade"),
  d = document.getElementsByClassName("slide_button");

function image(m) {
  if (m === 0) {
    e[0].style.display = "block";
    e[1].style.display = "none";
    e[2].style.display = "none";
    d[0].style.backgroundColor = "blue";
    d[1].style.backgroundColor ="white";
    d[2].style.backgroundColor = "white";
  } else if (m === 1) {
    e[0].style.display = "none";
    e[1].style.display = "block";
    e[2].style.display = "none";
    d[0].style.backgroundColor = "white";
    d[1].style.backgroundColor = "blue";
    d[2].style.backgroundColor = "white";
  } else {
    e[0].style.display = "none";
    e[1].style.display = "none";
    e[2].style.display = "block";
    d[0].style.backgroundColor = "white";
    d[1].style.backgroundColor = "white";
    d[2].style.backgroundColor = "blue";
  }
}