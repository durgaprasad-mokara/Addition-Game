let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function reset() {
    let randomFirstNum = Math.ceil(Math.random() * 50);
    let randomSecondNum = Math.ceil(Math.random() * 20);
    firstNumberElement.textContent = randomFirstNum;
    secondNumberElement.textContent = randomSecondNum;
    gameResultElement.textContent = "";
    userInputElement.value = "";

}

function checkNumber() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredData = parseInt(userInputElement.value);

    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    if (userEnteredData === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}