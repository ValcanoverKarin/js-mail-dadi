//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Numero random da 1 a 6, per il giocatore 
var numeroUtente = Math.floor(Math.random() * 6 ) + 1;
console.log(numeroUtente);

//Numero random da 1 a 6, per il computer
var numeroComputer = Math.floor(Math.random() * 6 ) + 1;