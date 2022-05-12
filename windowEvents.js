const h1firstHeading = document.querySelector("div.hello:first-child h1");

console.dir(h1firstHeading);


function h1ChangeColor() {
    h1firstHeading.style.color = "red";
} 
function OnMouseEnter() {
    h1firstHeading.innerText = "Nice to meet you";
} 
function OnMouseLeave() {
    h1firstHeading.innerText = "Click ME!!";
}
function ResizeColor() {
    document.body.style.backgroundColor = "purple";
}
function DetactCopy() {
    alert("I'am Angry! Copppppiiiier!!!!!!!");
}
function WIFIOFF() {
    alert("Oh..no..Wifi..gone..Out of order...:(");
}
function WIFION() {
    alert("You are back on!!!!!!");
}


h1firstHeading.addEventListener("click", h1ChangeColor);
h1firstHeading.addEventListener("mouseenter", OnMouseEnter);
h1firstHeading.addEventListener("mouseleave", OnMouseLeave);
window.addEventListener("resize", ResizeColor);
window.addEventListener("copy", DetactCopy); 
window.addEventListener("offline", WIFIOFF);
window.addEventListener("online", WIFION);
/*
Goal 요구사항: 
1. click --> change color to banana
2. mouse enter --> say "nice to meet you"
3. mouse leave --> say "don't go~~~"
4. resize window to tomatoe color
5. when copy alert "I'am Angry! Copppppiiiiier!!!!!"
6. Wifi on "Your Wifi is on. You are good to go~!"
7. Wifi off "Urgent! Wifi out of order!" 

와우!

참고: Web API 
1) queryselctor에서 가지고 와야 하는 하는 API
2) .Window에 기본적으로 내장되어있는 API
*/ 