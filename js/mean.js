const a = 5;
const b = 2;
const names = 'lindsey';

console.log(a + b);
console.log(a * b);
console.log(a / b);
document.write(names);

Boolean

const amIFat = false;
console.log(amIFat);

let something;
console.log(something);
// undefined로 나타남   


// 5. Array--------------------

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[3]);

// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// 6. Objects--------------------

// 배열에 입력하면 무슨 의미인지 알 수 없다는 단점이 있음
const player = {
    names : 'nico',
    points : 10,
    fat : true,
};

console.log(player['names']);
console.log(player.names);

player.fat = false;
player.points = player.points + 5 ; 
// object 자체는 그대로(fat)이라는 객체는 const로 유지, 값만 변경

// 7. Function part 1 --------------------

function sayHello () {
    document.write("</br>hello! World!!");
}
sayHello();
sayHello();

// 8. Function part 2 --------------------

// sayHello('보낼 데이터');
// 보낼 데이터를 아직 받아올 수 없으므로 그걸 실행하보자
function sayHi (nameOfPerson , ages) {
    document.write("My name is "+ nameOfPerson + " and age is " + ages + "</br>");
}
sayHi('nico' , 10);
sayHi('Dal' , 12);
sayHi('Lindsey' , 28);

// simple clculator
function plus (a, b) {
    console.log (a + b);
}
plus(3, 5);
plus(4, 9);

// player object
const newPlayer = {
    names : 'nico',
    sayHello : function (otherPersonsName) {
        console.log("Hello!" + otherPersonsName);
    },
};
console.log(newPlayer.names);
newPlayer.sayHello("Flynn");

// 9, 10. Recap --------------------

// const 와 let 의 차이 
// data type = string, number, boolean, null
// null = empty = nothing is something
// undefined = exist but nothing inside
// 배열
// 함수

// exam -----------------------------

const exam = {
    add : function (a , b) {
        document.write(a + b)
    },
    minus : function (a , b) {
        document.write(a - b)
    },
    dupli : function (a , b) {
        document.write(a ** b)
    },
};
exam.add(10 , 5);
exam.minus(10 , 5);
exam.dupli(10 , 5);

// 11. return ------------------------

const ageAge = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(ageAge);
console.log(KrAge);
// return 뒤에 오는 값이 나타나게 됨
// 만약 ageOfForeigner 뒤에 return "hello" 가 있다면
// "hello"로 반환됨

// 12. return recap --------------------


// 13. conditionals 1 ------------------

const ageMsg = prompt("How old are you?")


console.log(typeof "5", typeof parseInt("5"));
console.log(ageMsg , parseInt(ageMsg));
// => empty

// final answer
const HAU = parseInt(prompt("How old are you!!"));
console.log(HAU);
// => 숫자로 변경해주고 아니라면 NaN으로 나타남

// 14. Conditionals 2 ------------------

console.log(isNaN(HAU));
// boolean을 반환함 숫자가 아니라는 것을 반환함
// 숫자가 아니면 true 가 나타남

if(isNaN(HAU)){
    alert("It's not Number")
};

// 15. Conditional 3 ------------------

if (isNaN(HAU) || HAU < 0){
    console.log("please write a real positive number");
}else if (HAU < 18){
    console.log("You are too young to drink.");
}else if (HAU >=18 && HAU<= 50){
    console.log("you can drink!");
}else {
    console.log("you are too old to drink!");
}

// 16. recap ----------------------------

HAU === 100;
HAU !== 999; 

// 3-0. title ---------------------------

document.title = 'Hello! from JS';
// we can setting the title
// javascript already connected with HTML



// 3-1. getEb ---------------------------

// document.getElementById('title');

const titleId = document.getElementById('title');
console.log(titleId);
titleId.innerHTML = "Got you!"
// then it could be changed this word
console.log(titleId.id);
console.log(titleId.className);
// U will find 

// 3-2 getclass --------------------------

const h2El = document.getElementsByClassName('hello');
console.log(h2El);
// 배열로 반환됨 querySelectorAll 같이

const title = document.getElementsByTagName('h1');

// best way
const best = document.querySelector('.hello');
const bestThing = document.querySelectorAll('.hello h1');


// 3-3 events_1 (click)----------------------

const h1El = document.querySelector('div.hello:first-child');

h1El.style.color = "blue";

function handler(){
    console.log("title was clicked!");
    h1El.syle.color = "red";
}
h1El.addEventListener('click', handler);

// 3-4 events_2 (mouse)----------------------

function handle (){
    console.log('mouse is enter');
}
h2El.addEventListener('mouseenter', handle);
h2El.addEventListener('mouseleave', handleleave);

// 3-5 events_2 (onClick)----------------------

const water = document.querySelector('.water');
function handleclick (){
    water.innerText = "water is cold";
}
water.onClick = handleclick;
water.onmouseenter = handleenter;
// addEventListener을 더 선호하는 이유는 removeEventListener
// 로 제거할 수 있기 때문임.

function handleWindowResize (){
    document.body.style.backgroundColor = 'tomato';
}
window.addEventListener('resize', handleWindowResize);

function handleWindowCopy (){
    alert('copier!');
}
window.addEventListener('copy' , handleWindowCopy);

function handleWindowOffline () {
    alert("SOS no WIFI");
}
window.addEventListener('offline', handleWindowOffline);

function handleWindowOnline () {
    alert("All good-!");
}
window.addEventListener('online', handleWindowOnline);

// 3-6 css in JS ----------------------

const pEl = document.querySelector('p');

function handleTitleClick () {
    const currentColor = pEl.sytle.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else { 
        newColor = "blue";
    }
}
pEl.addEventListener('click', handleTitleClick);

// 3-7 css in Js 2 ---------------------

function handleTitle () {
    const clickedClass = "active";
    if (h1El.className === clickedClass) {
        h1El.className = "";
    }else {
        h1El.className === clickedClass;
    }
}
h1El.addEventListener('click', handleTitle);

// 3-8 css in Js 3 ---------------------

function handleTitle () {
    const clickedClass = "active";
    if (h1El.classList.contains(clickedClass)) {
        h1El.classList.remove(clickedClass);
    }else {
        h1El.classList.add(clickedClass);
    }
}
h1El.addEventListener('click', handleTitle);

// toggle~~~

function handleTitle () {
    const clickedClass = "active";
    h1El.classList.toggle(clickedClass);
}
h1El.addEventListener('click', handleTitle);

