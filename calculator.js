// 아름다운 코드
let display1 = document.querySelector(".display");
let reset = document.querySelector('.op-ac');
let change = document.querySelector('op-neg');
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
let operator = [
  document.querySelector(".op-plus"),
  document.querySelector(".op-minus"),
  document.querySelector(".op-multi"),
  document.querySelector(".op-divide"),
  document.querySelector(".op-eql")
]

let countNumber = 0;

//숫자 눌러주는것은 디스플레이에 보여주는 로직
function displayOutput() {
  number.forEach((el, index) => {
    el.addEventListener("click", () => {
      if (display1.textContent.length < 8) {
        if (index !== 10) {
          display1.textContent += index.toString();
          display1.textContent = parseFloat(display1.textContent).toString();
          countNumber = parseFloat(display1.textContent);
          console.log(countNumber);
        } else if 
        (!display1.textContent.includes(".")) {
          display1.textContent += ".";
        }
      }
    });
  });
  resetDispaly();
}

function resetDispaly(){
  reset.addEventListener('click',()=>{
    display1.textContent = 0 ;
  })
}

function operatorAll(){
  operator.forEach((el,index)=>{
    el.addEventListener('click', () =>{
      if(el[index] === 0){
        display1.textContent = countNumber;
      }
      else if(el[idex] === 1){

      }


    });
  });
}



displayOutput();
