const title = document.querySelector("div.hello:first-child h1"); 

function onClickChangeColor() {          
    title.style.color = "pink";
    console.log(onClickChangeColor);
}  

function onmouseEnter() {
    title.innerText = "Welcome";
}

function whenMouseLeaves() {
    title.innerText = "Come Back";
}

title.onclick = onClickChangeColor; 
title.onmouseenter = onmouseEnter;
title.onmouseleave = whenMouseLeaves;


/* 
방법 1) title.addEventListener("click", onClickChangeColor);
방법 2) title.onclick = OnClickChangeColor;

방법 1)처럼 하면 코드는 길지만 나중에 .removeEventListener 같이 제어 할수 있다. 
*/