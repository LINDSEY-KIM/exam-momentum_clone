const clock = document.querySelector('h2#clock');

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2 , "0");
    const min = String(date.getMinutes()).padStart(2 , "0");
    const sec = String(date.getSeconds()).padStart(2 , "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);


//----------setInterval setTimeout------------

// function sayHello () {
//     console.log('hello');
// }
// setInterval(function ,ms)
// setInterval(sayHello, 5000);
// 5초에 한 번씩 작성됨

// setTimeout(sayHello, 5000);
// 5초 후 작성됨

// new Date()
// mon may 2 2022 06:23:06 GMT 이렇게 날짜가 나옴


// -----------date---------------

// const date = new Date();
// date.getDate()
// date.getDay()
// date.getFullYear()
// date.getHours()
// date.getMinutes()
// date.getSeconds()


// ----------padStart()------------

// padStart()는 string타입에 사용할 수 있음.
// "1".padStart(2, "0")
// 2개 길이로 만들건데 없으면 앞에 0을 추가하라.
// string으로 변경하고 사용해야함...
