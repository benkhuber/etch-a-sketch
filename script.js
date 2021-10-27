const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('gridcell');
        div.setAttribute('id', 'test');
        container.appendChild(div)
    }
}
let gridSize = prompt("Set your grid size:")
makeGrid(gridSize, gridSize);

let test = document.getElementById('container');
test.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "black";
})