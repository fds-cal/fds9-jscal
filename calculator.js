// 아름다운 코드

let a = 0;
let b = 0;
let c = 0;

let calList = []

for (let i = 0; i < document.querySelectorAll(".op-main").length-1; i++) {
let t = document.querySelectorAll(".op-main")[i];
calList.push(t)
}
  
  
let dot  = document.querySelector(".num-dot")
let pm = document.querySelector(".op-neg")
let per = document.querySelector(".op-percent")
let ac = document.querySelector(".op-ac")
let dis = document.querySelector(".display")
let setCal = "";

// 아름다운 코드
let display1 = document.querySelector(".display");
let number = [
  document.querySelector(".num-0"),
  document.querySelector(".num-1"),
  document.querySelector(".num-2"),
  document.querySelector(".num-3"),
  document.querySelector(".num-4"),
  document.querySelector(".num-5"),
  document.querySelector(".num-6"),
  document.querySelector(".num-7"),
  document.querySelector(".num-8"),
  document.querySelector(".num-9"),
  document.querySelector(".num-dot")
];

//숫자 눌러주는것은 디스플레이에 보여주는 로직
function displayOutput() {
  number.forEach((el, index) => {
    el.addEventListener("click", () => {
      if (display1.textContent.length < 8) {
        if ( setCal && parseFloat(display1.textContent) && !c ){
          display1.textContent = ""
          if (index !== 10) {
            display1.textContent += index.toString();
            display1.textContent = parseFloat(display1.textContent).toString();
          } else if (!display1.textContent.includes(".")) {
            display1.textContent += ".";
          }
          c++
        } else {

          if (index !== 10) {
            display1.textContent += index.toString();
            display1.textContent = parseFloat(display1.textContent).toString();
          } else if (!display1.textContent.includes(".")) {
            display1.textContent += ".";
          }
          
          
        }
          

          
      }
    });
  });
}
displayOutput();

// function



function clicked (el) {
  for (let i = 0; i < calList.length; i++) {
    calList[i].style.backgroundColor = "#ced4da";
  }
  el.style.backgroundColor = "yellow";
}



function mainClick (el) {
  // console.log('mainclick')
  setCal = el.textContent
  console.log(setCal)
  a = parseFloat(display1.textContent)
  console.log("a", a)
  }


  function calClickFunc () {

    calList.forEach((el,index) => {
      el.addEventListener("click", function () {
        clicked(el)
        mainClick(el)})
    })  
    
  }

  calClickFunc()






  function clickEql () {
    console.log("Eql")
    b = parseFloat(display1.textContent)
    console.log("b",b)
    c = 0;
    console.log("setCal", setCal)

  switch (setCal) {
    case "÷":
    console.log("switch getin")
     a = a/b
     console.log("re a", a)
     break
    case "×":
    console.log("switch getin")
     a = a*b
     console.log("re a", a)
     break
    case "−":
    console.log("switch getin")
      a = a-b
      console.log("re a", a)
      break
    case "+":
    console.log("switch getin")
      a = a+b
      console.log("re a", a)
      break
      default :
      console.log("fail")
  }
  display1.textContent = a.toString()
}



document.querySelector(".op-eql").addEventListener("click",
() => clickEql())



function percenter () {
  display1.textContent.includes("%") ? (parseFloat(display1.textContent)/100).toString(): 
  ((parseFloat(display1.textContent)*100).toString() + "%")
}

function pmFunc () {
(parseFloat(display1.textContent)*(-1)).toString()
}
