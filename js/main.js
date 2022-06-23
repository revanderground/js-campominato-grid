// recupero il parent
const gridContainer = document.getElementById('grid-container');

// ciclo per creare i quadratini
for (let i=0; i < 100; i++){
    const newSquare = createNewSquare();
    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('azure');
    })
}

// funzione per creare i quadratini
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('div.square');
    return currentSquare;
}