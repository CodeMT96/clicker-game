const clickableIMG = document.getElementById("gameelement");
const counterTitle = document.getElementById("counterTitle");
let i = 0;
counterTitle.innerHTML = "Anzahl der Clicks: " + i;

function gameElementFlare() {
  console.log("hover");
  // clickableIMG.style.transform = "scale(2,2)";
}

function gameElementLeftImg() {
  console.log("left");
  clickableIMG.style.transform = "scale(1)";
}

function clickableGameElement() {
  console.log("hi");
  counterTitle.innerHTML = "Anzahl der Clicks: " + (i += 1);
  // clickableIMG.style.transform = "scale(3,3)";
}

clickableIMG.addEventListener("mouseleave", gameElementLeftImg);
clickableIMG.addEventListener("mouseover", gameElementFlare);
clickableIMG.addEventListener("click", clickableGameElement);
