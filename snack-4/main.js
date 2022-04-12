/* 
SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const array_1 = ['a', 'b', 'c', 'd']
const array_2 = [1, 2, 3, 4]
console.log(array_fusion(array_1, array_2));

function array_fusion(array_1, array_2) {
    const new_array = []
    array_1.forEach((element, index) => {
        new_array.push(element)
        new_array.push(array_2[index])
    });

    return new_array
}