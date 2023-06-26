const container = document.querySelector('.container');
const sizeController = document.querySelector('#size-controller');
let numberOfSquares = sizeController.value;
let percentage = 100/numberOfSquares;

sizeController.addEventListener('change', function() {
    sizeController.setAttribute('value', sizeController.value);
    numberOfSquares = sizeController.value;
    percentage = 100/numberOfSquares;
    squares = document.querySelectorAll('.square');
    clearCanvas();
    removeSquares();
    createSquares();
    squares = document.querySelectorAll('.square');
});

function createSquares() {
    for (let i = 0; i < numberOfSquares*numberOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.margin = '0';
        square.style.width = `${percentage}%`;
        square.style.height = `${percentage}%`;
        container.appendChild(square); 
    }
}

function clearCanvas() {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}

function removeSquares() {
    squares.forEach((square) => {
        container.removeChild(square);
    })
}

function setToClassic() {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            square.style.opacity = 0.2;
        });
    });
}

function setToPsychedelic() {
    let redValue = 0;
    let blueValue = 0;
    let greenValue = 0;
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            redValue = Math.floor(Math.random() * 256);
            blueValue = Math.floor(Math.random() * 256);
            greenValue = Math.floor(Math.random() * 256);
            square.style.opacity = 1;
            square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        });
    });
}

function setToCustom() {
    let customColor = colorSelector.value;
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = customColor;
            square.style.opacity = 1;
        });
    });
    colorSelector.addEventListener('change', function() {
        colorSelector.setAttribute('value', colorSelector.value);
        customColor = colorSelector.value;
    })
}

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearCanvas);

const classicButton = document.querySelector('#classic');
classicButton.addEventListener('click', setToClassic);

const psychedelicButton = document.querySelector('#psychedelic');
psychedelicButton.addEventListener('click', setToPsychedelic);

const customButton = document.querySelector('#custom');
const colorSelector = document.querySelector('#color-selector');
customButton.addEventListener('click', setToCustom);

createSquares();
let squares = document.querySelectorAll('.square');
setToClassic();