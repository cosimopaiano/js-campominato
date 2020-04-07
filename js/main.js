// verifica corretto import script
console.log('me js is here');


/**
*Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
*In seguito deve chiedere all’utente di inserire un numero alla volta,
 sempre compreso tra 1 e 100.
*L’utente non può inserire più volte lo stesso numero.
*Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina,
 altrimenti si continua chiedendo all’utente un altro numero.
*La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
 il numero massimo possibile di numeri consentiti.
*Al termine della partita il software deve comunicare il punteggio, cioè il numero
 di volte che l’utente ha inserito un numero consentito.

*BONUS:
All’inizio il software richiede anche una difficoltà all’utente che cambia il range
 di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2=> tra 1 e 50
*/

  var possibilità = 84;
  var listaBombe = [];
  var numeriConsentiti = [];
  var conteggio = 0;
  var utente = 0;
  var max = 100;

  //BONUS
  var difficolta = parseInt(prompt('Seleziona un livello di difficoltà: \n0 facile  \n1 intermedio \n2 difficile ') );

  switch (difficolta) {
  case 0:
    max = 100;
    break;
  case 1:
    max = 80;
    break;
  case 2:
    max = 50;
    break;
  default:
    max = false;
  }


  // Il computer genera 16 numeri casuali tra 1 e 100 (numeri vietati).
  while (listaBombe.length < 16) {
    var numeroBomba = numeriBombe (100);

    if (listaBombe.includes(numeroBomba) == false) {
      listaBombe.push(numeroBomba);
    }
  }

  console.log('lista bombe ', listaBombe);

//loop principale del gioco

  while ( (numeriConsentiti.length < possibilità) && (listaBombe.includes(utente) !== true) ) {
    utente = parseInt( prompt('inserisci un numero da 1 a 100') );
    console.log('scelta utente: ', utente);

    //controllo nemero inserito
    controlloNumero(utente);

    //Controllo raggiungimento possibilità del gioco
    if (numeriConsentiti.length == possibilità) {
      alert('hai vinto');
    }
  }

  console.log('game over');
  console.log('numeri validi inseriti: ', numeriConsentiti);
  console.log('tentativi riusciti ', conteggio);




//functions
//genera numeri casuali da 1 a 100
  function numeriBombe(max) {
    return Math.floor( Math.random() * max) + 1;
  }

  //controllo valore utente
  function controlloNumero(numero) {

    if ( listaBombe.includes(numero) ) {
      alert('Hai perso, hai provato ' + conteggio + ' volte prima di trovare la bomba');
    }
    else if (numeriConsentiti.includes(numero) ) {
      alert('il numero è già inserito, inseriscine un altro ');
    }
    else if (numeriConsentiti.includes(numero) == false) {
      numeriConsentiti.push(numero);
      conteggio = conteggio + 1;
    }
  }
