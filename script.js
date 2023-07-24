const imgEarth = document.getElementById("img-earth");
const imgMoon = document.getElementById("img-moon");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");


nextBtn.addEventListener("click", () => {
    imgEarth.style.transform = "translateX(-1200px)";
    imgEarth.style.overflow = "hidden";
    imgMoon.style.overflow = "visible !important";
    imgMoon.style.transform = "translateX(-50%)";
    imgEarth.style.width = "50%"
    imgMoon.style.width = "50%"
    imgEarth.style.transition = "2s"
    imgMoon.style.transition = "2s"
})

previousBtn.addEventListener("click", () => {
    imgEarth.style.transform = "translateX(50%)"
    imgMoon.style.transform = "translateX(1200px)";
    imgMoon.style.overflow = "hidden";
    imgEarth.style.overflow = "visible !important";
    imgEarth.style.width = "50%"
    imgMoon.style.width = "50%"
    imgEarth.style.transition = "2s"
    imgMoon.style.transition = "2s"
})