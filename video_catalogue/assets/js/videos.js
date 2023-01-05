function toggle(a) {
  if (a === 0) {
    document.getElementById("download_page").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
  }
  if (a === 1) {
    document.getElementById("download_page").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("play").style.display = "block";
    document.getElementById("image_poster").style.display = "block";
    document.getElementById("video_preview").style.display = "none";
  }
}
let i,
  k = "E";
function check(h) {
  let f = document.getElementsByClassName("display_pic")[h].src,
    g = document.getElementsByClassName("video_name")[h].innerText;
  document.getElementById("image_poster").src = f;
  document.getElementById("ng").innerText = g;
  toggle(1);
  i = String( 1 + h);
  language()

}
function language(m) {


  if (m === 0) {
    document.getElementById("pwg").style.display = "none";
    document.getElementById("en").style.display = "none";
    document.getElementById("eng").style.display = "none";
    document.getElementById("lang_text").style.display = "block";
    document.getElementById("lang_text").innerText = "ENGLISH";

    k = "E";
    for (let z = 0; z < 12; z++) {
      y = document.getElementsByClassName("video_name")[z].innerText;
      let x = y.replace("De Do Wetin Go Make Peace Dey", "Pursue Peace");
      document.getElementsByClassName("video_name")[z].innerText = x;
      console.log(x);
    }
  }
  if (m === 1) {
    document.getElementById("pwg").style.display = "none";
    document.getElementById("en").style.display = "none";
    document.getElementById("eng").style.display = "none";
    document.getElementById("lang_text").style.display = "block";
    document.getElementById("lang_text").innerText = "NIGERIAN ENGLISH";
    k = "ENG";

    for (let z = 0; z < 12; z++) {
      y = document.getElementsByClassName("video_name")[z].innerText;
      let x = y.replace("De Do Wetin Go Make Peace Dey", "Pursue Peace");
      document.getElementsByClassName("video_name")[z].innerText = x;
      console.log(x);
    }
  }
  if (m === 2) {
    document.getElementById("en").style.display = "none";
    document.getElementById("pwg").style.display = "none";
    document.getElementById("eng").style.display = "none";
    document.getElementById("lang_text").style.display = "block";
    document.getElementById("lang_text").innerText = "PIDGIN(WEST AFRICAN)";
    for (let z = 0; z < 12; z++) {
      y = document.getElementsByClassName("video_name")[z].innerText;
      let x = y.replace("Pursue Peace", "De Do Wetin Go Make Peace Dey");
      document.getElementsByClassName("video_name")[z].innerText = x;
    }
    k = "PGW";
  }

  if(i.length ===1 ){
    i="0"+i
  }
  let j = "videos/CO-r22_"  + k + "_"+ i + "_r360p.mp4",
  s="videos/CO-r22_" + k + "_"+  i + "_r720p.mp4";

  console.log(j,s)
  document.getElementById("download_720p").setAttribute("href", s)
  document.getElementById("download_360p").setAttribute("href", j)
  document.getElementById("video_preview").src = j
}
let c, d, e, l;
c = document.getElementById("en");
d = document.getElementById("eng");
e = document.getElementById("pwg");

function mtoggle() {
  document.getElementById("eng").style.display = "block";
  document.getElementById("en").style.display = "block";
  document.getElementById("pwg").style.display = "block";
  document.getElementById("lang_text").style.display = "none";
}
function playVideo(){
    document.getElementById("play").style.display = "none";
    document.getElementById("image_poster").style.display = "none";
    document.getElementById("video_preview").style.display = "block";
    var myVideo = document.getElementById("video_preview"); 
    myVideo.play(); 

}
