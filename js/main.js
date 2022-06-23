// recupero il parent
const gridContainer = document.getElementById('grid-container');

const button = document.querySelector('#button')
button.addEventListener('click', function(){
    
    const userChoice = document.getElementById('input-difficulty').value;
    if (userChoice == "level-1"){
           // ciclo per creare i quadratini
        for (let i=1; i < 101; i++){
            const newSquare = createNewSquare();
            gridContainer.append(newSquare);

            newSquare.addEventListener('click', function(){
                newSquare.classList.toggle('azure');
                console.log(`hai cliccato sulla cella ${i}`);
                
            })
        }
    } else if (userChoice == "level-2"){
        // ciclo per creare i quadratini
     for (let i=1; i < 82; i++){
         const newSquare = createNewSquare2();
         gridContainer.append(newSquare);

         newSquare.addEventListener('click', function(){
             newSquare.classList.toggle('azure');
             console.log(`hai cliccato sulla cella ${i}`);
             
         })
     }
    } else if (userChoice == "level-3"){
        for (let i=1; i < 50; i++){
            const newSquare = createNewSquare3();
            gridContainer.append(newSquare);
   
            newSquare.addEventListener('click', function(){
                newSquare.classList.toggle('azure');
                console.log(`hai cliccato sulla cella ${i}`);
                
            })
    }
    
 
    
}})





// funzione per creare i quadratini
function createNewSquare(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

// funzione per creare i quadratini
function createNewSquare2(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square2');
    return currentSquare;
}

// funzione per creare i quadratini
function createNewSquare3(){
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square3');
    return currentSquare;
}
