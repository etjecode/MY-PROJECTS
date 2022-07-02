const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const colorButtons = document.querySelectorAll("button");
const randomButton = document.getElementById("randomButton");
const canvasColor = document.getElementById("canvasColor");
const guessResult = document.getElementById("guessResult");
const guessOptions = document.getElementById("guessOptions");

// ON PAGE LOAD
canvas.addEventListener("load", randomColor());

// // ON CLICK RANDOM COLOR BUTTON
randomButton.addEventListener("click", randomColor);

// RANDOM COLOR FUNCTION
function randomColor() {
    const colorsArr = ["Red", "Green", "Blue", "Yellow", "Purple"];
    const i = Math.floor(Math.random() * 5);
    const randomColor = colorsArr[i];
    context.fillStyle = randomColor;
    context.fillRect(0, 0, 300, 300);
    canvasColor.innerHTML = randomColor;
}

// // ON CLICK ANY BUTTON
colorButtons.forEach(colorButton => colorButton.addEventListener("click", (e) => {
    context.fillStyle = e.target.id;
    context.fillRect(0, 0, 300, 300);
    if (colorButton != randomButton) {
    canvasColor.innerHTML = e.target.id;
    }
}))


guessOptions.addEventListener("change", guessColor)

function guessColor() {
    randomColor();
    if (guessOptions.value == canvasColor.innerHTML) {
    guessResult.innerHTML = `Yes, it is ${canvasColor.innerHTML}, you guessed it :)`
    } else {
    guessResult.innerHTML = `No, it's not ${guessOptions.value}, please try again :(`
    }
}