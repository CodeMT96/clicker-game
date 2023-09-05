const canvas = document.getElementById("game");
const clickableImg = new Image();
clickableImg.src = "/img/donut.png";
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.drawImage(clickableImg, 0, 0, 1000, 1000);



} else {
    "Upps"
}



canvas.width = 920;
canvas.height = 1080;

window.addEventListener("load", draw);