const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() { 
    const clickedClass ="active";
    if (h1.className /*getter & setter*/ === "clickedClass") { //===checking (getting)
        h1.className = "";              //=updating (setter)
    } else {
        h1.className = "clickedClass";        //raw value (원시값) 즉 변하면 안되는 클래스 등 이름
    }                                    //이것을 해결하기 위해 자바스크립트에서 Class을 생성
}                                       //h1.className = "active";  //1. CSS에서 클래스 "active" 속성 가지고 온다 2. Getter와 Setter 둘다 기능 가능

h1.addEventListener("click", handleTitleClick); 

/*
1. 적은 코드로 훨씬 더 효율적인 코드를 작성 가능 
2. 하지만 아직도 문제가 될수 있는 건 html에서 h1클래스를 변경해도, 내가 JS에서 
클래스 이름을 다른것으로 해노면 JS가 Overtake 이긴다. 
3. Html -> CSS -> JS에서 모두 이름을 바꾸는 것은 효율적이지 않다. 
*/