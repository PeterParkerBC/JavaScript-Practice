/*

const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() { 
    const clickedClass ="active";
    if (h1.className === "clickedClass") 
    { 
        h1.className = "";              
    } else {
        h1.className = "clickedClass";   
    }                                   
}                                       

h1.addEventListener("click", handleTitleClick); 

*/ 

//이번엔 버그(bug)가 될수 있는 html의 클래스 이름을 유지하면서 
// 우리가 원하는 클래스를 그때마다 add하고 remove할 수 있는 방법을 살펴보자 

/*

const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() {
    const clickedClass = "clicked"; 
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass); 
    } 
    } else {
        h1.classList.add(clickedClass);
    }

h1.addEventListener("click", handleTitleClick); 

*/
//classList/*전체 class 포함여부 확인*/
//이번엔 .toggle (즉 on/off 기능을 알아서 해주는 기능을 알아보자)

const h1 = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() {
    const clickedClass = "clicked"; 
   h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitleClick);  

// 만약 (CSS)clicked클래스 기능을를 .toggle에 한번만 사용할거면 구지 변수생성 X (안에"clicked")클래스만 입력.
//끝 대박 ㅋ 