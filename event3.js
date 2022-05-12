const title = document.querySelector("div.hello:first-child h1"); 

function onClickChangeColor() {          
    title.style.color = "pink";
    console.log(onClickChangeColor);
}  

function onMouseEnter() {
    title.innerText = "Welcome";
}

function whenMouseLeaves() {
    title.innerText = "Come Back";
}

title.addEventListener("click", onClickChangeColor); 
title.addEventListener("mouseenter", onMouseEnter);
title.addEventListener("mouseleave", whenMouseLeaves);

