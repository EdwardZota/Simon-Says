/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/
const containerDom = document.getElementById('container');

const timerDom = document.getElementById('timer');

let secondi = 30;

const allCasualNumber = [];

const allPlayerNumber = [];

const clock = setInterval(function(){
    if(secondi == 0){
        clearInterval(clock);
        containerDom = `Tempo Scaduto!`;
    }else{
        timerDom.innerHTML=`Hai ancora ${secondi} secondi per memorizzare i numeri.`
        secondi--
    }
},1000);

const numberSelect = numberGenerator();

console.log(allCasualNumber);

containerDom.innerHTML=`I tuoi numeri sono:${allCasualNumber}`;

setTimeout(deleteDom,30000);

setTimeout(startAsk,30200);


function startAsk(){

    for(let i = 0 ; i < 5; i++){
        askNumber = parseInt(prompt('inserisci uno alla volta tutti i numeri che ricordi'));

        if(allCasualNumber.includes(askNumber)){
            allPlayerNumber.push(askNumber);
        }
    }

    containerDom.innerHTML=`i numeri che hai indovinato sono:${allPlayerNumber} su un totale di 5 numeri! Complimenti`
    console.log(allPlayerNumber);
    

}

function deleteDom(){
    timerDom.innerHTML="";
    containerDom.innerHTML="";
}


function numberGenerator(){

    while(allCasualNumber.length < 5){

        let number = Math.floor(Math.random() * 5) + 1;

        if(!allCasualNumber.includes(number)){
            allCasualNumber.push(number);  
        }
    }
}

