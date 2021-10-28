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
let gridSize = prompt("Set your grid size:")
makeGrid(gridSize, gridSize);

let test = document.getElementById('container');
test.addEventListener('mouseover', function(event){
    event.target.classList.add('hover');
})