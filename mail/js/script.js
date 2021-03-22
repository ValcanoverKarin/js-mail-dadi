//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.

//Chiedi all’utente la sua email
var emailUtente = prompt ('inserisci la tua email');
console.log(emailUtente);

//lista email di chi può accedere
var emailLista = ['email1@outlook.it', 'email2@outlook.it', 'email3@outlook.it', 'email4@outlook.it', 'email5@outlook.it']

//controllare che sia nella lista di chi può accedere
var emailTrovata = false;

for (var i = 0; i < emailLista.length; i++) {
    var emailCorrente = emailLista[i];
    //console.log(emailCorrente)

    if (emailUtente == emailCorrente) {
        emailTrovata = true;
    }  
}