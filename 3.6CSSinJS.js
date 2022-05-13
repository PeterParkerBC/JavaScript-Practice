
/*Goal 
1. 제목을 클릭 할때마다 색이 '오렌지' 와 '파란색'으로 변하게 만든다. 
2. if 와 else를 적절히 사용해서 Function을 만들어라 
*/ 
const h1 = document.querySelector("div.hello:first-child h1");
function ChangeClickColor() {
  
if (h1.style.color === "blue") {
    h1.style.color = "orange";
}  else {
    h1.style.color = "blue";
}
}

h1.addEventListener("click", ChangeClickColor); 

//더 깔끔하게 코드를 작성하기 위해서 h1.style.color를 하나의 객체로 선포 

const h1 = document.querySelector("div.hello:first-child h1");
function ChangeClickColor() {
    const currentColor = h1.style.color;
    let newColor;
if (currentColor === "blue") {
    newColor = "orange";
}  else {
    newColor = "blue";
    }
    h1.style.color = newColor;
} 

h1.addEventListener("click", ChangeClickColor); 

/* 해설
1. 일단 default로 검정색이기 때문에 파란색으로 색을 바꿔줘야 하는데 
그전 먼저 if로 우리가 원하는 기능을 먼저 선포하고 그 다음 필요한 기능을 
else에 담으면 된다. 
함수를 작성할때는 조금 꺼꾸로 생각할 필요가 있다. If(만약)이란 단어는 조건 즉 
너가 이것을 한다면~이기 때문이다. 아니면 else로 byebye. 
2. 개속해서 객체의 요소를 불러오는 것은 효율적인 코드 X. 하나의 변수로 선포해주면 더 좋다. 
    const currentColor = h1.style.color;
3. if (currentColor === "blue") {
    newColor = "orange"; <-- 원하는 기능 추가 
4. else 에서도 newcolor 변수 선포 
5. 함수 선포가 끝난 후 newcolor 변수 지정 
why? let을 사용했기 때문에 update가 가능하다 orange, blue 
6. 마지막에 h1.style.color = newColor; 는 update 수정이 가능하다는 것을 
선포. */