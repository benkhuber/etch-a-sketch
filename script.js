const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        if (i > 10000) {
            alert("Too large");
            break;
        } else {
        const div = document.createElement('div');
        div.classList.add('gridcell');
        div.setAttribute('id', 'test');
        container.appendChild(div);
        }
    }
}
let gridSize = prompt("Set your grid size:");
makeGrid(gridSize, gridSize);

function blackColor() {
    let test = document.getElementById('container');
    test.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = "black";
    });
}

function crazyColor() {
    let test = document.getElementById('container');
    test.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
} 

function gradientColor() {
    let index = 0;
    let gradientColor = ["#e5e5e5", "#cccccc", "#b2b2b2"]
    let test = document.getElementById('container');
    test.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = gradientColor[index++];
    });
}