
const API = "b21f915ca0d62b7c3cd9b81689415c65";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
    fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);