const randomNums = Math.floor(Math.random() * 6) + 1; //random no 1-6

const diceImages = "dice" + randomNums + ".png"; // dice1.png - dice6.png

const mainDice = "images/" + diceImages; //images/dice1.png - images/dice6.png

const changedImg1 = document.querySelectorAll("img")[0];

changedImg1.setAttribute("src", mainDice);

//

const randomNums2 = Math.floor(Math.random() * 6) + 1;

const diceImages2 = "dice" + randomNums2 + ".png"; // dice1.png - dice6.png

const mainDice2 = "images/" + diceImages2;

const changedImg2 = document.querySelectorAll("img")[1];
changedImg2.setAttribute("src", mainDice2);

//

if (randomNums > randomNums2) {

  const numTwo = document.querySelector("h1");
  numTwo.innerHTML = "PLAYER ONE WON";
  numTwo.style.color = "white";


} else if (randomNums2 > randomNums) {

  const numTwo = document.querySelector("h1");
  numTwo.innerHTML = "PLAYER TWO WON";
  numTwo.style.color = "pink";
  
} else {
  document.querySelector("h1").innerHTML = "IT IS A DRAW";
}
