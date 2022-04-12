/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
    { varieta: 'golden', peso: 1, lunghezza: 10 },
    { varieta: 'violet', peso: 2, lunghezza: 2 },
    { varieta: 'green', peso: 0.5, lunghezza: 4 },
    { varieta: 'purple', peso: 1.5, lunghezza: 7 },
    { varieta: 'yellow', peso: 1, lunghezza: 5 },
    { varieta: 'golden', peso: 1, lunghezza: 10 },
    { varieta: 'violet', peso: 2, lunghezza: 2 },
    { varieta: 'green', peso: 0.5, lunghezza: 4 },
    { varieta: 'purple', peso: 1.5, lunghezza: 7 },
    { varieta: 'yellow', peso: 1, lunghezza: 5 }
]

let sum = 0
zucchine.forEach(zucchina => {
    sum += zucchina.peso
});

console.log(sum);