// Dichiaro e assegno una variabile al container nel DOM
const container = document.getElementById('container');

// Dichiaro e assegno variabile a bottone PLAY nel DOM
const play = document.getElementById("play");

// Dichiaro e assegno a variabile valore livello da DOM 
let lvlDifficulty = document.getElementById('level').value;

// Aggiungo click bottone su play per attivare classe d-flex a container
play.addEventListener("click",
    () => {
    container.innerHTML = "";

    container.classList.add('active');
    
    lvlDifficulty = document.getElementById('level').value;

    if(lvlDifficulty === "easy"){
        cycleElementsClass(1,100,"gridx10");
    }else if (lvlDifficulty === "medium") {
        cycleElementsClass(1,81,"gridx9");
    }else if(lvlDifficulty === "hard"){
        cycleElementsClass(1,49,"gridx7");
    }
}
);

// FUNCTIONS

// Function to create new tag element with class
function createElementClass(elementTag, classToAdd){
    const newElement = document.createElement(elementTag);
    newElement.classList.add(classToAdd);
    return newElement;
}


// Function to cycle more elements with class (need createElementClass function) to a element with id="container"  (choose type of grid: gridx10, gridx9, gridx7)
function cycleElementsClass(min, max, typeOfGrid){
    // Ciclo i numeri da 1 a 100 inserendo uno span con classe square con all'interno un numero
    for(let i = min; i <= max; i++){

        // Richiamo funzione crea elementi con classe
        const newSquare = createElementClass("span","square");
        newSquare.classList.add(typeOfGrid);
        container.append(newSquare);
        newSquare.append(i);

        newSquare.addEventListener("click",
            function(){
                newSquare.classList.add("blue");
                console.log(i);
            }
        )
    }
}
