//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Numero random da 1 a 6, per il giocatore 
var numeroUtente = Math.floor(Math.random() * 6 ) + 1;
console.log('numero del giocatore = ' + numeroUtente);

//Numero random da 1 a 6, per il computer
var numeroComputer = Math.floor(Math.random() * 6 ) + 1;
console.log('numero del computer = ' + numeroComputer);

//Stabilire in base al numero chi ha perso, vinto o se hanno pareggiato
if (numeroUtente < numeroComputer) {
    alert('Hai perso!!!');
} else if (numeroUtente > numeroComputer) {
    alert('Hai vinto!!!')
} else {
    alert('pareggio')
}