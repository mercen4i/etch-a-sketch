const container = document.querySelector('.container');
const numberOfSquares = 50;
const percentage = 100/numberOfSquares;

for (let i = 0; i < numberOfSquares*numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.margin = '0';
    square.style.width = `${percentage}%`;
    square.style.height = `${percentage}%`;
    square.addEventListener('mouseenter', () => {square.style.backgroundColor = 'black';});
    container.appendChild(square); 
}

function clearCanvas() {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
}

const squares = document.querySelectorAll('.square');
const clearButton = document.createElement('button');
clearButton.textContent = "Clear";
container.appendChild(clearButton);
clearButton.addEventListener('click', clearCanvas);