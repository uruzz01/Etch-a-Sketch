const container = document.querySelector('#container');

const grid4 = document.querySelector('.grid4')
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');
const custom = document.querySelector('.custom');
const clear = document.querySelector('.clear');
const hide = document.querySelector('#hideGrid');
const eraser = document.querySelector('#eraser');
const colorPicker = document.querySelector('#colorpicker');

let div;
let rowDiv;

container.addEventListener('click', draw);

grid4.addEventListener('click', createGrid4);
grid16.addEventListener('click', createGrid16);
grid32.addEventListener('click', createGrid32);
grid64.addEventListener('click', createGrid64);
custom.addEventListener('click', askGrid);
clear.addEventListener('click', clearGrid);
hide.addEventListener('click', toggleGrid);
eraser.addEventListener('click', activateEraser);
colorPicker.addEventListener('change', pickColor);

function activateEraser (e)
{

    let target = e.target;
    
    
    if (target.id == 'eraser' && target.dataset.value == 'active')
    {
       delete target.dataset.value;
       eraser.classList.remove('active');
        console.log(eraser.dataset.value);
        // console.log(container.classList);
    }
    else
    {   
        target.dataset.value = 'active';
        eraser.className = '';
        eraser.className += 'active';

        if(container.className == 'ready')
        {
            changeColor();
        }
        
        // console.log( container.classList);
    }

    

}

function toggleGrid (e) 
{
    let target = e.target;
    
    if (container.childNodes.length > 0)
    {
        if (hide.id == 'hideGrid' && hide.dataset.value == 'active')
        {
            delete target.dataset.value;
            hide.classList.remove('active');
            console.log(hide.dataset.value);
    
        }
        else
        {   
            target.dataset.value = 'active';
            hide.className = '';
            hide.className += 'active';
            console.log(hide.classList);
        }
    
        hideGrid();    
    }
       
}

function askGrid () 
{
    let size = +prompt('Inser grid size. Max value is 100', '100');
    
    removeGrid();

    if (size > 100)
    {
        return;
    }
    for (let i = 0; i < `${size}`; i++)
    {
        createRow();

        for (let j = 0; j < `${size}`; j++)
        {   
            createDiv();    
        }
    }
}

function draw (e) 
{
    
    let targetId = e.target.parentNode.parentNode.id;
    let targetTile = e.target;

    // console.log(targetTile);
    
    // console.log(`Target id: ${targetId}`);

    if (targetId == "container" && e.target.parentNode.parentNode.className == 'ready') 
    {

        container.classList.remove('ready');
        console.log(`container.className: ${container.className}`);
        
    } 
    else 
    { 
        
        if (container.childNodes.length > 0) /////////////////////////////
        {
            container.className = '';
            container.className += 'ready';
        }
        
        console.log(`container.className: ${container.className}`);

        if (targetTile.className.includes('tile') && !(eraser.dataset.value == 'active'))
        {
            targetTile.style.backgroundColor = pickColor();
        }

        if (targetTile.className.includes('tile') && eraser.dataset.value == 'active')
        {
            targetTile.style.backgroundColor = '#ffffff';
        }

    }
    
    changeColor();

}

function pickColor ()
{
   return colorPicker.value;
}

function changeColor ()
{
    let tiles = document.querySelectorAll('.tile');
    
    for (const tile of tiles) {
        
            tile.addEventListener('mouseover', function hoverTile() {
                if (container.className == 'ready')
                {
                    tile.style.backgroundColor = pickColor();
                }   
                if (eraser.dataset.value == 'active' && container.className == 'ready')
                {
                    tile.style.backgroundColor = '#ffffff';
                }
              }); 
      }   
}

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
    div.className += ' border';

} 

function clearGrid ()
{
    let  tiles = document.querySelectorAll('.tile');

    for (const tile of tiles)
    {
        tile.style.backgroundColor = '#ffffff';
    }
}

function removeGrid ()
{   
    hide.classList.remove('active');
    delete hide.dataset.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    return;
}

function hideGrid ()
{

    let tiles = document.querySelectorAll('.tile');

        for (const tile of tiles)
        {   
            if (hide.dataset.value == 'active') 
            {
                tile.classList.remove('border');
            }
            else
            {
                tile.className += ' border';
            }
        }
}

function createGrid4 () 
{
    
    removeGrid();
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
    removeGrid();
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
    removeGrid();
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
    removeGrid();
    for (let i = 0; i < 64; i++)
    {
        createRow();

        for (let j = 0; j < 64; j++)
        {   
            createDiv();
        }
    }
    
}