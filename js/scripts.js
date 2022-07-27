const forEl = document.querySelector('.for');
const whileEl = document.querySelector('.while');
const nascondiEl = document.querySelector('.nascondi');

const spesaListEl = document.querySelector('.spesa__list');

let numeroProdotti = parseInt(prompt('Quanti prodotti devi comprare?'));
let listaSpesa = [];

while ( isNaN(numeroProdotti) ) {
    alert('Devi inserire un numero!');
    numeroProdotti = parseInt(prompt('Quanti prodotti devi comprare?'));
}

for ( let i = 0; i < numeroProdotti; i++ ) {
    const prodotto = prompt('Inserisci un prodotto da acquistare');
    listaSpesa.push(prodotto);
}

console.log(listaSpesa);

forEl.addEventListener('click', function() {
    spesaListEl.innerHTML = '';
    for (let i = 0; i < listaSpesa.length; i++ ) {
        const listItemEl = document.createElement('li');
        listItemEl.className = 'list__item';
        listItemEl.append(listaSpesa[i]);
        spesaListEl.append(listItemEl);
    }

});

whileEl.addEventListener('click', function() {

});

nascondiEl.addEventListener('click', function() {
    spesaListEl.innerHTML = '';
});