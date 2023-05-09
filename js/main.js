// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Dichiaro e assegno una variabile al container nel DOM
const container = document.getElementById('container');

// Dichiaro e assegno variabile a bottone PLAY nel DOM
const play = document.getElementById("play");

// Aggiungo click bottone su play per attivare classe d-flex a container
play.addEventListener("click",
    () => {
        container.classList.add('active');
}
);


// Ciclo i numeri da 1 a 100 inserendo uno span con classe square con all'interno un numero
for(let i = 1; i <= 100; i++){

    const newSquare = createElementClass("span","square");
    container.append(newSquare);
    newSquare.append(i);

    newSquare.addEventListener("click",
        function(){
            newSquare.classList.add("blue");
            console.log(i);
        }
    )
}


// FUNCTIONS

// Function to create new tag element with class
function createElementClass(elementTag, classToAdd){
    const newElement = document.createElement(elementTag);
    newElement.classList.add(classToAdd);
    return newElement;
}

