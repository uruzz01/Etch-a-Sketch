const container = document.querySelector('#container');

const grid4 = document.querySelector('.grid4')
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');


let div;
let rowDiv;

grid4.addEventListener('click', createGrid4);
grid16.addEventListener('click', createGrid16);
grid32.addEventListener('click', createGrid32);
grid64.addEventListener('click', createGrid64);
container.addEventListener('click', draw);

function draw(e) 
{
    
    let targetId = e.target.parentNode.parentNode.id;
    
    console.log(`Target id: ${targetId}`);

    if (targetId == "container" && e.target.parentNode.parentNode.className == 'ready') 
    {
        container.classList.remove('ready');
        console.log(`container.className: ${container.className}`);
        
    } 
    else 
    { 
        container.className = '';
        container.className += 'ready';
        console.log(`container.className: ${container.className}`);
        
    }

    changeColor();

}


////////////////////////////////////////////////////////////////////////////////////////////////


function changeColor()
{
    let  tiles = document.querySelectorAll('.tile');
    
    for (const tile of tiles) {

            tile.addEventListener('mouseover', function hoverTile() {
                if (container.className == 'ready')
                {
                    tile.classList.add("tileHovered");
                }   
              }); 
      }   
}


////////////////////////////////////////////////////////////////////////////////////////////////

function createRow()
{
    rowDiv = document.createElement('div');   
    container.appendChild(rowDiv);
    rowDiv.classList.add('rowDiv');
}

function createDiv() 
{
    div = document.createElement('div');
    rowDiv.appendChild(div);
    div.classList.add('tile');

} 

function clearGrid ()
{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid4 () 
{
    clearGrid();
    for (let i = 0; i < 4; i++)
    {
        createRow();

        for (let j = 0; j < 4; j++)
        {   
            createDiv();    
        }
    }

}

function  createGrid16 () 
{   
    clearGrid();
    for (let i = 0; i < 16; i++)
    {
        createRow();

        for (let j = 0; j < 16; j++)
        {   
            createDiv();
        }
    }
}

function createGrid32 () 
{
    clearGrid();
    for (let i = 0; i < 32; i++)
    {
        createRow();

        for (let j = 0; j < 32; j++)
        {   
             createDiv();
        }
    }
}

function createGrid64 () 
{
    clearGrid();
    for (let i = 0; i < 64; i++)
    {
        createRow();

        for (let j = 0; j < 64; j++)
        {   
            createDiv();
        }
    }
    
}