const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('gridcell');
        container.appendChild(div)
    }
}

makeGrid(16,16);

const newDiv = document.querySelector('.gridcell');
window.addEventListener('mouseover', function(e){
    newDiv.classList.add('hover');
    console.log(e);
})