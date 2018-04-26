// 아름다운 코드
let display1 = document.querySelector('.display');
let number = 
[document.querySelector('.num-0'),document.querySelector('.num-1'),document.querySelector('.num-2'),
 document.querySelector('.num-3'),document.querySelector('.num-4'),document.querySelector('.num-5'),
 document.querySelector('.num-6'),document.querySelector('.num-7'),document.querySelector('.num-8'),
 document.querySelector('.num-9'),document.querySelector('.num-dot')];

//숫자 눌러주는것은 디스플레이에 보여주는 로직
function displayOutput(){
  number.forEach((el,index) => {
    if(index !== 10){
    el.addEventListener('click',() => {
      display1.textContent += index.toString();
      display1.textContent = parseFloat(display1.textContent).toString();
    })
  }
    else{
      el.addEventListener('click',() => {
      display1.textContent += '.';
    })
    }
  })
}




displayOutput();

