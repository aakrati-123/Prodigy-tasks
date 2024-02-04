let counter=0;
let cells=document.querySelectorAll("#field td");
let header=document.getElementById("header");

function is_victory(){
    let combos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let combo of combos){
        if (cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
            cells[combo[1]].innerHTML === cells[combo[2]].innerHTML &&
            cells[combo[0]].innerHTML !== ''){
                return true;
        }
    }
    return false;
}



function tap(event) {
    if (counter % 2 === 0) {
        event.target.innerHTML = '<img src="tic.png" width="100">'
    } else {
        event.target.innerHTML = '<img src="circle.png" width="100">'
    }
    if (is_victory()){
        for (let cell of cells){
            cell.removeEventListener('click',tap)
        }
        if(counter%2==0){
            header.innerText="X is winner!"
            
        }
        else{
            header.innerText="O is winner!"
        }
    }
    else if(counter==8){
        header.innerText="Draw!"
    }
    counter++;// Исправляем опечатку в названии переменной counter
    event.target.removeEventListener('click',tap)
}

function start_game() {
    header.innerText = "Tic Tac Toe"; // Предполагается, что у вас есть элемент с id "header"
    counter = 0;
    for (var cell of cells) {
        cell.innerHTML = "";
        cell.addEventListener("click", tap); // Добавляем обработчик события click
    }
}

start_game(); // Запускаем функцию start_game
