console.log('JS OK!');
// * Gioco dei dadi
/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.*/

// * Primo metodo
// * Dichiarazione varibile
const min = 1;
const max = 7;
let message = '';
// * Randomizzazione delle giocate
const userNumber = Math.floor(Math.random() * (max - min)) + min;
const computerNumber = Math.floor(Math.random() * (max - min)) + min;
// * Stampa in console i numeri casuali
console.log(`Il tuo numero è: ${userNumber}`); //> 1, 2, 3, 4, 5, 6.
console.log(`Il numero del pc è: ${computerNumber}`); //> 1, 2, 3, 4, 5, 6.
//  * Ciclo if per decidere il vincitore
if(userNumber > computerNumber){
    message = 'Hai vinto!';
    }else if(userNumber < computerNumber){
        message = 'Hai perso!';
    }else if (userNumber === computerNumber){
        message = 'Hai pareggiato';
}   
console.log(message);

// * Secondo metodo
// Richiamo elemento in pagina
const numberOfClient = document.getElementById('numberofclient');
const numberOfPc = document.getElementById('numberofpc');
const resultElement = document.getElementById('result');
// Randomizzazione delle giocate
const clientNumber = Math.floor(Math.random() * 6 + 1);
const pcNumber = Math.floor(Math.random() * 6 + 1);
// Modifico testo HTML
numberOfClient.innerText = `Il tuo numero è: ${clientNumber}`;
numberOfPc.innerText = `Il numero del pc è: ${pcNumber}`;
// * Stampa in console i numeri casuali
console.log(`Il tuo numero è: ${clientNumber}`); //> 1, 2, 3, 4, 5, 6.
console.log(`Il numero del pc è: ${pcNumber}`); //> 1, 2, 3, 4, 5, 6.
//  * Ciclo if per decidere il vincitore
if(clientNumber > pcNumber){
        message = 'Hai vinto!';
    }else if(clientNumber < pcNumber){
        message = 'Hai perso!';
    }else if (clientNumber === pcNumber){
        message = 'Hai pareggiato';
}
// Stampa in console   
console.log(message);
// Stampa in pagina
resultElement.innerText = message;