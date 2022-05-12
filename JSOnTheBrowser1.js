/*
1. JS에서 documnet 객체를 불러 올수 있다 
2. document 객체는 html의 모든 element, property, attributes 등 모든 요소를 
가져올수 있다. 엄청난 기능. 
3. 대부분 우리는 이 document를 소환해서 JS와 Html을 modify(수정) 할 것이다. 
4. 소환할때 document. (쩜) 을 통해 소환할 객체의 종류를 찾을 수 있는데 
    1).getElementById() =         ID에 해당하는 모든 요소를 불러올수 있다. ID는 보통 1개. 
    2).getElementsByClassName() = Class에 해당 하는 모든 요소 Array (배열) 형식으로 불러온다 
    3).getElementsByTagname() =    Tag "           "           "           "       

5. .querySelector() CSS 선택자로 요소를 선택 (모든 요소 소환 가능) but, 선택자에 해당하는 '첫번째' 
요소만 선택된다. 
6. .querySelectorAll() 특정 선택자 모든 요소를 배열로 가지고 온다 
*/ 

const title = document.getElementById("hello"); 
console.log(title); 

/*결과:
<div class="apple" id="hello">
<h1>Grab me!</h1>
</div> 
 */

const apple1 = document.getElementsByClassName("apple"); 
console.log(apple1);

/*결과: HTMLCollection(4) [div#hello.apple, 
div#mango.apple, div#pineapple.apple, 
div#cola.apple, hello: div#hello.apple, 
mango: div#mango.apple, pineapple: div#pineapple.apple, 
cola: div#cola.apple]*/  

const Tagger = document.getElementsByTagName("body"); 
console.log(Tagger); 

/*결과: 
1. 모든 body에 있는 속성 (요소) property를 다 확인 가능. 
감탄스러운 것은 아직 사용하지 않은 속성들도 다 보여주고, 
나중에 무엇이 잘못되었는지 디버깅 할때도, 좋을꺼 같다. 
2. 같은 태그가 여러번 사용되면, Array (배열)로 해당 태그들을 다 보여준다
*/ 

const CSSselector = document.querySelector(".apple h1");
console.log("CSSselector");

/* 특정 요소를 선택할수 있다. 
CSS에서 지정 요소 선택 방법과 동일: .은 Class, #는 아이디 
getElementById와 비슷하지만 ID외에도 여러 세부 요소 불러옴*/

const CSSselectorall = document.querySelectorAll(".apple");
console.log(CSSselectorall)

/* getElementsByClassName와 비슷. 모든 .apple에 해당하는 class 속성값 
가져옴. 