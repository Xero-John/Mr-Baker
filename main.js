const menuButton = document.querySelector('.menu');
const menu = document.querySelector(".collapse__menu")
menuButton.addEventListener('click', function () {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    menu.classList.toggle("expand__menu");
});

let isDebug = false;
const all = document.querySelectorAll("*");

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        if (isDebug) {
            all.forEach((evt) => {
                evt.classList.remove("outline")
            });
            isDebug = false;
        } else {
            all.forEach((evt) => {
                evt.classList.add("outline")
            });
            isDebug = true;
        }
    }
});


const nav = document.querySelectorAll(".list__attribute a");
// nav.classList.add("color");
window.addEventListener("scroll", function (){
    nav.forEach((e) => {
        e.classList.toggle("color", window.scrollY >= 300);
    });
});
