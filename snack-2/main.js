/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
    { varieta: 'golden', peso: 1, lunghezza: 20 },
    { varieta: 'violet', peso: 2, lunghezza: 25 },
    { varieta: 'green', peso: 0.5, lunghezza: 4 },
    { varieta: 'purple', peso: 1.5, lunghezza: 7 },
    { varieta: 'yellow', peso: 1, lunghezza: 30 },
    { varieta: 'golden', peso: 1, lunghezza: 10 },
    { varieta: 'violet', peso: 2, lunghezza: 20 },
    { varieta: 'green', peso: 0.5, lunghezza: 4 },
    { varieta: 'purple', peso: 1.5, lunghezza: 70 },
    { varieta: 'yellow', peso: 1, lunghezza: 5 }
]


const corte = zucchine.filter(zucchina => zucchina.lunghezza < 15)
console.log(corte);
const lunghe = zucchine.filter(zucchina => zucchina.lunghezza > 15)
console.log(lunghe);

const sum_peso_corte = sum(corte)
const sum_peso_lunghe = sum(lunghe)
console.log(sum_peso_corte, sum_peso_lunghe);

function sum(array) {
    let sum = 0
    array.forEach(element => {
        sum += element.peso
    });
    return sum
}