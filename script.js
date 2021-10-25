const container = document.querySelector('#container');

function makeGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');
        div.textContent = i;
        container.appendChild(div).className = "content";
    }
}

makeGrid(16,16);
