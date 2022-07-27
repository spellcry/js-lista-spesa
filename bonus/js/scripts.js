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
    spesaListEl.innerHTML = '';
    let i = 0;
    while ( i < listaSpesa.length ) {
        const listItemEl = document.createElement('li');
        listItemEl.className = 'list__item';
        listItemEl.append(listaSpesa[i]);
        spesaListEl.append(listItemEl);
        i++;
    }
});

nascondiEl.addEventListener('click', function() {
    spesaListEl.innerHTML = '';
});

spesaListEl.addEventListener('click', function() {
    let listHoverEl = spesaListEl.querySelector(':hover');
    if ( listHoverEl != null ) {
        if ( confirm('Vuoi eliminare il prodotto?') ) {            
            let prodotto = listHoverEl.innerHTML;
            prodotto = listaSpesa.indexOf(prodotto);
            listHoverEl.remove();
            listaSpesa.splice(prodotto, 1);
        }
    }
});