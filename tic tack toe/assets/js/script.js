const xo = ["X", "O"];
var move = [];
a = document.getElementsByClassName("grid_item");
c = 0;
f = 1;
r = document.getElementById("play");
j = 1;
t = "O wins";
u = "X wins";
z = 0;
y = document.getElementsByClassName("game");
function tic(b) {
  if (a[b].innerText === "X" || a[b].innerText === "O" || j === 0) {
    console.log("nope");
  } else {
    if (c === 0) {
      //adds the x's and o's to the space tapped
      a[b].innerText = xo[0];
      c++;
      r.innerHTML = "Next player:" + xo[c];
    } else {
      a[b].innerText = xo[1];
      c--;
      r.innerHTML = "Next player:" + xo[c];
    }
    //shows the current game
    y[z].innerText = "See move" + " " + (1 + z);

    move[z] = b;
    z++;
  }
  if (a) {
  } else {
    //stops the game once a player has won
  }
  for (let i = 0; i < 7; i += 3) {
    //tells us when theres a complete row of x or o
    let x, y, z;
    x = i;
    y = i + 1;
    z = i + 2;
    if (
      a[x].innerText === "O" &&
      a[y].innerText === "O" &&
      a[z].innerText === "O"
    ) {
      r.innerText = t;
      j = 0;
    } else if (
      a[x].innerText === "X" &&
      a[y].innerText === "X" &&
      a[z].innerText === "X"
    ) {
      r.innerText = u;
      j = 0;
    }
  }

  for (let i = 0; i < 3; i++) {
    //tells us if there is a complete column of x or o
    let d, e, f;
    d = i;
    e = i + 3;
    f = i + 6;
    if (
      a[f].innerText === "O" &&
      a[d].innerText === "O" &&
      a[e].innerText === "O"
    ) {
      r.innerText = t;
      j = 0;
    } else if (
      a[f].innerText === "X" &&
      a[d].innerText === "X" &&
      a[e].innerText === "X"
    ) {
      r.innerText = u;
      j = 0;
    }
  }
  if (
    //tells us if x or o is complete diagonally
    (a[2].innerText === "O" &&
      a[4].innerText === "O" &&
      a[6].innerText === "O") ||
    (a[0].innerText === "O" && a[4].innerText === "O" && a[8].innerText === "O")
  ) {
    r.innerText = t;
    j = 0;
  } else if (
    (a[2].innerText === "X" &&
      a[4].innerText === "X" &&
      a[6].innerText === "X") ||
    (a[0].innerText === "X" && a[4].innerText === "X" && a[8].innerText === "X")
  ) {
    r.innerText = u;
    j = 0;
  }
  if (move.length === 9 && j == 1) {
    r.innerText = "No side wins";
  }
}
//resets the background color for the moves shown
function Move(k) {
  a[move[k]].style.backgroundColor = "white";
  y[k].style.backgroundColor = "blue";
  y[k].style.color = "white";
}
//resets the background color after 10s of inactivity
setInterval(resetColor, 10000);
function resetColor() {
  for (let n = 0; n < a.length; n++) {
    a[n].style.backgroundColor = "rgb(121, 142, 207)";
    y[n].style.backgroundColor = "white";
    y[n].style.color = "black";
  }
}
//resets the game
function reset() {
  for (let n = 0; n < a.length; n++) {
    a[n].innerText = "";
    j = 1;
    y[n].innerText = "";
    a[n].style.backgroundColor = "rgb(121, 142, 207)";
  }
  r.innerHTML = "Next player:" + xo[0];
  move = [];
  z = 0;
}
