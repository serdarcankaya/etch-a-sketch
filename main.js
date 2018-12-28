let maxWidth = 528;
let maxHeight = 528;
let userInput = 16;
let numberOfSquares = 16 * 16;
let colorful = false


// Element Selection
let divContainer = document.getElementById("gameCubes");
let squareDiv = document.getElementsByClassName("square");
let resetButton = document.getElementById("reset");
let changeNumberofBoxes = document.getElementById("changeNumber");
let colorfulButton = document.getElementById("colorful");
let darkButton = document.getElementById("dark");

darkButton.addEventListener("click", function () {
  colorful = false;
  resetGame();
  removeDivs();
  startGame();
})

colorfulButton.addEventListener("click", function () {
  colorful = true;
  resetGame();
  removeDivs();
  startGame();
})

resetButton.addEventListener("click", resetGame);
changeNumberofBoxes.addEventListener("click", numberOfBoxes);

function createBoxes() {
  for (let index = 0; index < numberOfSquares; index++) {
    // Div Creation
    let divCreation = document.createElement("div");
    divCreation.style.cssText = `width:${maxWidth / userInput}px; height:${maxHeight / userInput}px; border:0.5px solid black; float:left`;
    divCreation.className = "square";
    divContainer.appendChild(divCreation);
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}


function addListeners() {

  for (let index = 0; index < numberOfSquares; index++) {
    squareDiv[index].addEventListener("mouseover", function (e) {
      squareDiv[index].classList.add("blackBox");
      let randomBackgroundColor = randomColor();
      if (colorful) {
        squareDiv[index].style.backgroundColor = randomBackgroundColor;
      } else {
        squareDiv[index].style.backgroundColor = "black";
      }

    })

  }
}


function numberOfBoxes() {
  userInput = prompt("Please Enter Number of Boxes Between 1 - 64");
  numberOfSquares = userInput * userInput;
  resetGame();
  removeDivs();
  startGame();
}

function removeDivs() {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}

function resetGame() {
  [...squareDiv].forEach(element => {
    element.classList.remove("blackBox");
  });
  removeDivs();
  startGame();
}




function startGame() {
  createBoxes();
  addListeners();
}

startGame();