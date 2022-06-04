const bar = document.querySelector(".first-icon");
const xMark = document.querySelector(".second-icon");
const content = document.querySelector(".content");

bar.addEventListener("click", () => {
    bar.style = "visibility: hidden;";
    xMark.style = "visibility: visible;";
    content.style = "visibility: visible;";
})

xMark.addEventListener("click", () => {
    bar.style = "visibility: visible;";
    xMark.style = "visibility: hidden;";
    content.style = "visibility: hidden;";
})