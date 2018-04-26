// 아름다운 코드

let a = 0;
let b = 0;

let calList = document.querySelectorAll(".op-main")
let dot  = document.querySelector(".num-dot")
let pm = document.querySelector(".op-neg")
let per = document.querySelector(".op-percent")
let ac = document.querySelector(".op-ac")
let dis = document.querySelector(".display")




function clicked () {
  for (let i = 0; i < calList.length; i++) {
    calList[i].style.backgroundColor = white;
  }
  this.style.backgroundColor = yellow;
}



function mainClick () {
  setCal = this.textContent
  a = parseFloat(display1.textContent)
  }


  function clickEql () {
    b = parseFloat(diplay1.textContent)
  switch (setCal) {
    case "÷":
     return a = a/b
    case "x":
     return a = a*b
    case "-":
     return a = a-b
    case "+":
     return a = a+b
  }
}








