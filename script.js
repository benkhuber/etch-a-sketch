const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        container.appendChild(div).className = "gridcell";
    }
}

makeGrid(16,16);

const newDiv = document.querySelector('div');

function changeBackground() {
    newDiv.classList.toggle('hover');
    console.log("hover!");
    true
}

newDiv.addEventListener('mouseover', changeBackground);
