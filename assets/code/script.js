const clickableIMG = document.getElementById("gameelement");

function gameElementFlare() {
  console.log("hover");
  clickableIMG.style.transform = "scale(2,2)";
}

function gameElementLeftImg() {
  console.log("left");
  clickableIMG.style.transform = "scale(1)";
}

function clickableGameElement() {
  console.log("hi");
  clickableIMG.style.transform = "scale(3,3)";
}
clickableIMG.addEventListener("mouseleave", gameElementLeftImg);
clickableIMG.addEventListener("mouseover", gameElementFlare);
clickableIMG.addEventListener("click", clickableGameElement);
