const title = document.querySelector("div.hello:first-child h1"); 
//("div.hello:first-child h1")
//div안에 있는.hello 클래스 첫번째 아이 해딩 1아~
console.dir(title); // h1의 스타일(Style 섹션 가면 요소 나열), 이벤트(on으로 시작) 확인 가능
console.log(title);

function onClickChangeColor() {           //function ()잊어 버리면 안된다
    title.style.color = "pink";
} 

title.addEventListener("click", onClickChangeColor); //Event 추가 

