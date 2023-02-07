// Animate on scroll
AOS.init({
    once: true
});

// Burger Menu
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-menu');
const navBtnImg = document.querySelector('#nav-menu-img');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = "src/icons/close.svg";
    } else {
        navBtnImg.src = "src/icons/burger.svg";
    }
}

// Cursor
var cursor = document.getElementById('cursor');
var aura = document.getElementById('aura');

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    aura.style.left = x + "px";
    aura.style.top = y + "px";
});