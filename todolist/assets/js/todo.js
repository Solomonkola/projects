const todo = [];
let text = document.getElementById("text"),
  a = 0;
  text.addEventListener("keypress", function(event){
if(event.key === "Enter"){
add()
}
  } )
var d = document.getElementsByClassName("pa");
function add() {
  if (text.value === "") {
    console.log("no text");
  } else {
    todo[a] = text.value;
    text.value = "";
    d[a].innerHTML += todo[a];

    a++;
  }
}
function p(c) {
  let f = document.getElementsByClassName("pa")[c];
  let g = document.getElementsByClassName("check")[c];
  if (f.innerText === "") {
    console.log("you havent acomplished anything");
  } else {
    if (f.style.textDecorationLine == "line-through") {
      f.style.textDecoration = "none";
      g.style.backgroundColor = "white";
    } else if ((f.style.textDecorationLine = "none")) {
      f.style.textDecoration = "line-through";
      g.style.backgroundColor = "blue";
    }
  }
}
