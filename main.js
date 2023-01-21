const header = document.querySelector("header");
const nav = document.querySelector("nav");
const goUp = document.querySelector(".go-up");
const toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});
//
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        header.style.borderBottom = "none";
        goUp.style.opacity = "0";
    } else if (this.scrollY > 500) {
        header.style.borderBottom = "1px solid #e5e7eb";
        goUp.style.opacity = "1";
    }
});