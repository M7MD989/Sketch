let color = 'black';
let click = false

function boardSize(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove()); 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;

    let amount = size * size
    for(i = 0; i < amount; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = ('white')
        square.addEventListener('mouseover', squareColor)
        board.insertAdjacentElement("beforeend",square)
    }   
}
boardSize(16);

function changeBoardSize(input){
    if(input >= 2 && input <= 100){
        document.querySelector('.error').style.display = 'none'
        boardSize(input);
    }
    else{
        document.querySelector('.error').style.display = 'flex';
    }
    
}

function squareColor(){
    if(click){
        if( color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

document.querySelector('body').addEventListener('click', () =>{ //?????????????????????
    click = !click;
} );