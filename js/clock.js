const clock = document.querySelector("h2#clock");

function getClock() {
    const nowDate = new Date();

    //padStart는 문자타입 수의 시작점을 시작으로 원하는 형태의 문자를 추가하여 길이를 늘릴 수 있다.
    //padEnd 문자타입 수의 마지막점을 끝으로 원하는 형태의 문자를 추가하여 길이를 늘릴 수 있다.
    //String은 숫자형을 문자형으로 변경해주는 함수.
    const hours = String(nowDate.getHours()).padStart(2,"0");
    const minutes = String(nowDate.getMinutes()).padStart(2,"0");
    const seconds = String(nowDate.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //clock.innerText=`${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);