const H1 = document.querySelector(".hello h1");
console.log(H1);

function handleH1Click() {
    const activeClassName = "clicked";
    if (H1.className === activeClassName) {
        H1.className = "active";
    } else {
        H1.className = activeClassName;
    }
};

function mouseenter() {
    H1.innerText = "mouse is here!";
}
``
function handleMouseleave() {
    H1.innerText = "mouse is gone";
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
    alert("ALL GOOOOD!")   
}

H1.addEventListener("click", handleH1Click);
H1.addEventListener("mouseenter", mouseenter);
H1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//H1.onclick = handleH1Click
console.dir(H1);
