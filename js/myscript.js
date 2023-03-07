/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/
const containerDom = document.getElementById('container');

const allCasualNumber = [];

const allPlayerNumber = [];

const numberSelect = numberGenerator();

console.log(allCasualNumber);


containerDom.innerHTML=`I tuoi numeri sono:${allCasualNumber}`;

setTimeout(deleteDom,3000);

setTimeout(startAsk,3200);




function startAsk(){

    for(let i = 0 ; i < 5; i++){
        askNumber = parseInt(prompt('quali dei numeri ti ricordi?'));
        allPlayerNumber.push(askNumber);
    }

    console.log(allPlayerNumber);

}

function deleteDom(){
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

