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
        square.addEventListener('mouseenter', () => {square.style.backgroundColor = '#808080';});
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

createSquares();
let squares = document.querySelectorAll('.square');
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearCanvas);