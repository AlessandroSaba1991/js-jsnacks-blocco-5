/* 
SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

function reverse_word(word) {
    return word.split("").reverse().join("");
};
console.log(reverse_word("ciao"));