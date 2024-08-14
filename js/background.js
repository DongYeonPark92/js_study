const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
];

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImg}`;

// 이미지에 클래스를 추가하여 스타일링할 수 있도록 합니다.
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);