const container = document.querySelector('.container');
let div;
let rowDiv;
const grid4 = document.querySelector('.grid4')
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');

grid4.addEventListener('click', createGrid4);
grid16.addEventListener('click', createGrid16);
grid32.addEventListener('click', createGrid32);
grid64.addEventListener('click', createGrid64);

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
        rowDiv = document.createElement('div');
        container.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < 4; j++)
        {   
            div = document.createElement('div');
            rowDiv.appendChild(div);
            div.classList.add('tile');
        }
    }
}

function  createGrid16 () 
{   
    clearGrid();
    for (let i = 0; i < 16; i++)
    {
        rowDiv = document.createElement('div');
        container.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < 16; j++)
        {   
            div = document.createElement('div');
            rowDiv.appendChild(div);
            div.classList.add('tile');
        }
    }
}

function createGrid32 () 
{
    clearGrid();
    for (let i = 0; i < 32; i++)
    {
        rowDiv = document.createElement('div');
        container.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < 32; j++)
        {   
            div = document.createElement('div');
            rowDiv.appendChild(div);
            div.classList.add('tile');
        }
    }
}

function createGrid64 () 
{
    clearGrid();
    for (let i = 0; i < 64; i++)
    {
        rowDiv = document.createElement('div');
        container.appendChild(rowDiv);
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < 64; j++)
        {   
            div = document.createElement('div');
            rowDiv.appendChild(div);
            div.classList.add('tile');
        }
    }
}