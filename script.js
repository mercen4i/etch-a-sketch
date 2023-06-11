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
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        });
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

function psychedelicButton() {
    let redValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
}

createSquares();
let colorValue = 216;
let squares = document.querySelectorAll('.square');
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearCanvas);


// When classic button is clicked, color is changed to classic color (gray) 
// When psychedelic button is clicked, it chooses a random color from the color wheel

const classicButton = document.querySelector('#classic');
