const number = [];
const resultNumber = [];
let n = -1;
let tstr;
function btnclick() {
  let x = document.getElementById("result").innerText;
  let y = document.getElementById("display").innerText;
  console.log(x.length);
  if (this.innerText == ".") {
    deci();
  } else {
    if (x.length == 0) {
      if (y == 0) {
        display.innerText = "";
      }
      number[0] = display.innerText;
      number[0] += this.innerText;
      if (display.innerText.includes(".")) {
        number[0] = display.innerText;
        number[0] += this.innerText;
        display.innerText = number[0];
        console.log("nope");
      } else {
        comma(0);
      }
    } else {
      if (y === "0") {
        let p = parseInt(this.innerHTML);
        display.innerHTML = p + parseInt(display.innerHTML);
        number[2] = display.innerHTML;
      } else {
        if ((y.length > 1 && number[1] == null) || number[1] == undefined) {
          result.innerText = "";
          number[0] = this.innerText;
          if (display.innerText.includes(".")) {
            number[0] = display.innerText;
            number[0] += this.innerText;
            display.innerText = number[0];
            console.log("nope");
          } else {
            comma(0);
          }
        } else {
          number[2] = display.innerText;
          number[2] += this.innerText;
          if (display.innerText.includes(".")) {
            number[2] = display.innerText;
            number[2] += this.innerText;
            display.innerText = number[2];
            console.log("nope2");
          } else {
            comma(2);
          }
        }
      }
    }
  }

  console.log(number[0], number[1], number[2]);
}

function comma(a) {
  let num,
    text = number[a],
    rep;
  rep = text.replace(/,/g, "");
  // if (num1 > 1) {
  //   inte = rep.slice(0, num1);
  //   flot = rep.slice(num2, lenth);
  //   console.log(inte, flot, num1);
  //   deci()
  // } else {
  num = parseInt(rep);
  console.log(num, typeof num);
  number[a] = num.toLocaleString();
  display.innerText = number[a];
  console.log(number[a]);
  //}
  // if (container.innerText.includes(".")) {
  //   console.log(text);
  //   container.innerText += b;
  // } else {
  //   // container.innerText = text2.toLocaleString();
}
function deci() {
  if (display.innerText.includes(".")) {
    console.log("ok");
  } else {
    display.innerText += ".";
  }
}
function add() {
  if (number[2] == null) {
    if (number[0] == null) {
      let add = display.innerText + " " + "+";
      document.getElementById("result").innerText = add;
      display.innerText = 0;
      number[1] = "+";
    } else {
      result.innerText = number[0] + " " + "+";
      number[1] = "+";
      display.innerText = 0;
    }
  } else {
    equal();
    add();
  }
}
function minus() {
  if (number[2] == null) {
    if (number[0] == null) {
      let minus = display.innerText + " " + "-";
      document.getElementById("result").innerText = minus;
      display.innerText = 0;
      number[1] = "-";
    } else {
      result.innerText = number[0] + " " + "-";
      number[1] = "-";
      display.innerText = 0;
    }
  } else {
    equal();
    minus();
  }
}
function per() {
  let a = number[0];
  display.innerText = parseFloat(a) / 100;
}
function multiply() {
  if (number[2] == null) {
    if (number[0] == null) {
      let Multiply = display.innerText + " " + "×";
      document.getElementById("result").innerText = Multiply;
      display.innerText = 0;
      number[1] = "*";
    } else {
      result.innerText = number[0] + " " + "×";
      number[1] = "*";
      display.innerText = 0;
    }
  } else {
    equal();
    multiply();
  }
}
function divide() {
  if (number[2] == null) {
    if (number[0] == null) {
      let divide = display.innerText + " " + "÷";
      document.getElementById("result").innerText = divide;
      display.innerText = 0;
      number[1] = "/";
    } else {
      result.innerText = number[0] + " " + "÷";
      number[1] = "/";
      display.innerText = 0;
    }
  } else {
    equal();
    divide();
  }
}
function equal() {
  let ind = 0,
    num1,
    num2,
    num,
    flot,
    lenth,
    rep1,
    rep2,
    text = number[0],
    text2 = number[2],
    inte = "";
  console.log(text);
  num1 = text.indexOf(".");
  num2 = 1 + num1;
  number[0] = text.replace(/,/g, "");
  number[2] = text2.replace(/,/g, "");
  console.log(number[0], number[2], text, text2);
  if (number[1] == "*") {
    //multiplication
    let a = number[0],
      b = number[1],
      c = number[2],
      result,
      test,
      test2;

    result = parseFloat(a) * parseFloat(c);
    num = result.toString();
    flot = num.indexOf(".");
    test = result.toString().slice(flot, num.length);
    console.log(result, num,flot, test);
    if(num.includes(".")){
      display.innerHTML = parseInt(result).toLocaleString() + test;
    }else{
      display.innerHTML = parseInt(result).toLocaleString();
    }

    resultNumber[ind] = a + b + c;
    ind++;
    console.log(a,c)
    document.getElementById("result").innerHTML =
      parseInt(a).toLocaleString() +
      " " +
      "×" +
      " " +
      parseInt(c).toLocaleString();
  } else if (number[1] == "/") {
    //division
    let a = number[0],
      b = number[1],
      c = number[2],
      result;
    result = parseFloat(a) / parseFloat(c);
    check = result.toString();
    if (check.length > 12) {
      console.log(check.length);
      let decimal = check.slice(12, 14);
      console.log(decimal, check);
      console.log(check.indexOf("."));
    } else {
      display.innerHTML = parseInt(result).toLocaleString();
      document.getElementById("result").innerHTML =
        parseInt(a).toLocaleString() +
        " " +
        "÷" +
        " " +
        parseInt(c).toLocaleString();
    }
    resultNumber[ind] = a + b + c;
    ind++;
  } //addition start
  else if (number[1] == "+") {
    let a = number[0],
      b = number[1],
      c = number[2],
      result;
    result = parseFloat(a) + parseFloat(c);
    display.innerHTML = parseInt(result).toLocaleString();
    console.log(ind);
    resultNumber[ind] = a + b + c;
    ind++;
    document.getElementById("result").innerHTML =
      parseInt(a).toLocaleString() +
      " " +
      "+" +
      " " +
      parseInt(c).toLocaleString();
    //addition end
  } //subtraction start
  else if (number[1] == "-") {
    //subtraction
    let a = number[0],
      b = number[1],
      c = number[2],
      result;
    result = parseFloat(a) - parseFloat(c);
    display.innerHTML = parseInt(result).toLocaleString();
    resultNumber[ind] = a + b + c;
    ind++;
    document.getElementById("result").innerHTML =
      parseInt(a).toLocaleString() +
      " " +
      "-" +
      " " +
      parseInt(c).toLocaleString();
  } //subtraction end

  delete number[0];
  delete number[1];
  delete number[2];
  console.log(number, resultNumber, ind);
  number[0] = display.innerText;
  if (number[2] == null) {
    console.log(number[2]);
  }
}
function ac() {
  document.getElementById("result").innerText = "";
  document.getElementById("display").innerText = "0";
  number[0] = "0";
  delete number[1];
  delete number[2];
}
let keyboard = document.getElementById("display");
window.onload = function () {
  document.getElementById("display").focus();
  console.log("please work");
};
function test(event) {
  let tst = event.key,
    buttn = document.getElementsByClassName("number"),
    numeric = /[0-9]/g,
    b,
    y = document.getElementById("display").innerText;
  console.log(tst, event.keyCode);
  if (tst.match(numeric)) {
    color(tst);
    console.log("please", result.innerText.length == 0);
    if (result.innerText.length == 0) {
      if (y == 0) {
        display.innerText = "";
      }
      console.log("it works", tst, display.innerText);
      number[0] = display.innerText;
      number[0] += tst;
      document.getElementById("display").innerText = number[0];
    } else {
      if (y == 0) {
        display.innerText = "";
      }
      number[2] = display.innerText;
      number[2] += tst;
      document.getElementById("display").innerText = number[2];
    }

    function color(a) {
      b = parseInt(a) - 1;
      console.log(b);
      buttn[b].style.backgroundColor = "rgb(138, 149, 160)";
      timeout = setTimeout(function () {
        buttn[b].style.backgroundColor = " rgb(206, 205, 205)";
      }, 300);
    }

    function resetColor(a) {
      console.log(a);
      buttn[a].style.backgroundColor = "white";
    }
  } else if (tst == "+") {
    add();
    24;
  } else if (tst == ".") {
    deci();
  } else if (tst == "-") {
    minus();
  } else if (tst == "/") {
    divide();
  } else if (tst == "*") {
    multiply();
  } else if (tst == "=" || tst == "Enter") {
    equal();
    // }else if(tst == "backspace"){
    //   console.log("ok")
  }
}
function backspace(event) {
  console.log(event.key);
  if (event.keycode == 8) {
    console.log("ok");
  }
}
function del() {
  let str = display.innerText,
    st,
    nu,
    doc = document.getElementById("result").innerText;
  console.log(typeof doc);
  if (doc.length < 1) {
    nu = number[0].length - 1;
    if (str === "0") {
      console.log("ok");
    } else {
      st = str.slice(0, nu);
      console.log(typeof display.innerText, nu, st);
      display.innerText = st;
      number[0] = st;
    }
    console.log(number[0].length);
  } else {
    nu = number[2].length - 1;
    if (str === "0") {
      console.log("ok");
    } else {
      st = str.slice(0, nu);
      console.log(typeof display.innerText, nu, st);
      display.innerText = st;
      number[2] = st;
    }
    console.log(number[0].length);
  }
}
function copy() {
  let copyText = document.getElementById("display");
   //copyText.select();
   //copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.innerText);
  alert("Copied the text: " + copyText.innerText);
}
