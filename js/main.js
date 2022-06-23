// recupero il parent
const gridContainer = document.getElementById('grid-container');

const button = document.querySelector('#button')
button.addEventListener('click', function(){
    // ciclo per creare i quadratini
    for (let i=1; i < 101; i++){
        const newSquare = createNewSquare();
        gridContainer.append(newSquare);

        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('azure');
            console.log(`hai cliccato sulla cella ${i}`);
            
        })
    }
    
})





// funzione per creare i quadratini
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

