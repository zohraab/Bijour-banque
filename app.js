//--------------------Variables------------------------//
let totalCredit=0;
let debit1=499.99;
let debit2=599;
let totalDebit=0;
let libelDebit1="achat PS4";
let libelDebit2="achat TV";
let libelCredit1="salaire";
let credit1=1520;
//----------------------------------------------------//
let percentDebit1=(100*debit1)/totalCredit;
percentDebit1=percentDebit1.toFixed(2);
let percentDebit2=(100*debit2)/totalCredit;
percentDebit2=percentDebit2.toFixed(2);
let pourcentageDebit=(100*totalDebit)/totalCredit;
pourcentageDebit = pourcentageDebit.toFixed(2);
//--------------------Tableaux------------------------//
let opDebit1 = [
    libelDebit1,
    debit1,
    percentDebit1
];

let opDebit2 = [
    libelDebit2,
    debit2,
    percentDebit2
];

//---------------------------------Tableau de tableaux-------------------------//
let arrayDebit = [
    opDebit1,
    opDebit2,
];
//-----------------------------------------------------------------------------//

let opCredit = [
    libelCredit1,
    credit1,
];
let arrayCredit = [
    opCredit,
];

//----------------------------------------------------------------------------//
console.log(opCredit[0]);

//-------------------Selection des index [1] de chaque tableaux---------------//

arrayDebit.forEach(function(bisous){
    totalDebit+=(bisous[1]);
});

arrayCredit.forEach(function(bisous){
    totalCredit+=(bisous[1]);
   });

//---------------------------------------------------------------------------//



//-------------------------------------Création d'HTML via JavaScripts--------------//
let totalBalance=totalCredit-totalDebit;
let solde = document.getElementById('total');

// solde.innerHTML = `<h2 id="total>${totalBalance}€</h2>`;
if(totalBalance > 0){
    solde.innerHTML = `+ ${totalBalance}€`;
}else{
    solde.innerHTML = `${totalBalance}€`;
}

let soldeCredit = document.getElementById('totalCredit');
soldeCredit.innerHTML = ` ${totalCredit} €`;

let soldeDebit = document.getElementById('totalDebit');
soldeDebit.innerHTML = ` ${totalDebit} €`;

let operation = document.getElementById('operation');
let creditContent = document.getElementById('creditContainer');
let debitContent = document.getElementById('debitContainer');
let button = document.querySelector('button');

button.addEventListener('click',(toto) =>{
    toto.preventDefault();
    let addLiContent = document.createElement('li');
            
    if(operation.value == "credit"){
        
        addLiContent.innerHTML = 
            `
            
                <span class="intitule">Salaire</span>
                <span id="salaire" class="montant txt-color-gazoil"> ${credit1} €</span>
         
            `
            creditContent.appendChild(addLiContent);

    }else{
        addLiContent.innerHTML = 
        `
              <span class="intitule"></span>
              <span class="montant txt-color-red"></span>
              <span class="percent txt-color-red"> % </span>
        `
        debitContent.appendChild(addLiContent);

    }
});


//----------------------------------------------------------------------------------//
