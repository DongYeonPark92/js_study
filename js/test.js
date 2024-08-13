const a = 5;
const b = 2;

let myName = "dongyeon";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "ParkDongYeon";

console.log("Your name is " + myName);

const player = {
    name: "dongyeon",
    points: 10,
    fat: true
};
console.log(player);
console.log(player.name);
player.lastName = "Park";
console.log(player);
console.log(player["name"]);

console.log("Hello my name is dongyeon");

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson)
    console.log("Hello my age is " + age)
};

sayHello("dongyeon", 33);
sayHello("Yaeju", 36);
sayHello("Juseong", 5);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
};

plus(10, 225);
plus(11, 34);
plus(12, 43);
plus(12, 54);

const player2 = {
    name : "dongyeon",
    sayHello: function(Name) {
        console.log("hello! " + Name + " Nice to meet you!")
    },
};

console.log(player2.name);
player2.sayHello("Yaeju");

const Juseong = {
    name: "ParkJuseong",
    age: function(a) {
        console.log(10 + a)
    },
};

console.log(Juseong.name);
Juseong.age(5);

const age = 33;

function calculateKrAge(KrAge) {
    return KrAge + 2;
}

const KrAge2 = calculateKrAge(age);

const age2 = parseInt(prompt("How old are you?"));

//변수 데이터타입을 확인하는 방법은 typeof을 사용하면 됨, parseInt은 문자형을 숫자형으로 변경해줌
//단, 문자 자체를 숫자로는 변경불가 "12"를 12로 변경하는건 가능

//isNan함수는 문자유무를 확인해줌. 만약 true라면 문자인거고, false면 숫자인 경우임
//Nan은 Not a Number 줄임
//And는 &&, OR은 ||
// =의 기호는 value값을 할당받을 떄 사용되며, === 변수값이 맞는지 확인할 때 사용하며, !==은 변수값이 아닌지 확인할 때 쓰는 기호
if (isNaN(age2) || age2 < 0) {
    console.log("Please write a number"); //true일 경우 실행
} else if(age2 < 18) {
    console.log("you are too young.");
} else if(age2 >= 18 && age2 <= 50) {
    console.log("you can drink.");
} else if(age2 > 50 && age2 <= 80){
    console.log("you should exercise.");
} else if (age2 > 80) {
    console.log("you can't drink.")
}

const title = document.getElementById("title");

title.innerText = "JANG YAEJU";
console.log(title);
console.log(title.className);

const title = document.querySelector(".hello h1");
console.log(title);

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked!");
}

function mouseenter() {
    title.innerText = "mouse is here!";
}

function handleMouseleave() {
    title.innerText = "mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";   
}

function handleWindowCopy() {
    alert("copier!")   
}

function handleWindowOffline() {
    alert("SOS no WIFI!")   
}

function handleWindowOnline() {
    alert("ALL Gooood!")   
}

const H1 = document.querySelector(".hello h1");
console.log(H1);

function handleH1Click() {
    //아래 if절과 toggle은 같은 결과를 보여주지만 코드 양은 다르다.
    //클릭시 H1 내 classname을 확인해서 없으면 추가하고 있으면 지우는 기능
    // const activeClassName = "clicked";
    // if (H1.classList.contains(activeClassName)) {
    //     H1.classList.remove(activeClassName);
    // } else {
    //     H1.classList.add(activeClassName);
    // }

    H1.classList.toggle("clicked");
};

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", mouseenter);
title.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//title.onclick = handleTitleClick
console.dir(title);