/*
너무 신기한게 이제 자바스크립트의 진짜 속성을 아는 거 같다. 
이벤트라는 것은 '접촉'을 의미한다 
엄청 많은 이벤트가 있지만 일단 click을 배웠다 
1. 먼저 내가 원하는 목적에 맞게 선택자를 소환 
ex. document.querySelector("div.hello:first-child h1"); 
2. Function을 선언 
3. 구체적으로 원하는 기능 {title(요소1), style(요소2), color(요소3) = "blue"; }
4. .addEventListener("click") 
    - 접촉을 듣는 함수 
    - 듣고 Respond를 ("click")도 있지만 다양 
    - title.addEventListener기능 ("click", handleTitleClick);
    해석: 듣고 클릭이 되면 파란색으로 타이틀을 바꿔라
*/


const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick () {
    title.style.color = "blue";
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);

