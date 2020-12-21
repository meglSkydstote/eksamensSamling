//Opgave 2.3
// Svarende til Java’s Comparator#compare(...) metode, 
// skal der her laves nogle compare-funktioner, der tager to parametre, og returnerer -1, 0 eller 1 
// alt efter om den første parameter er mindre end, lig med eller større en den anden parameter. 
// Der skal laves følgende compare-funktioner:
// • compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.
// • compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde
// • compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til store og små bogstaver
// Modificer dernæst bubbleSort funktionen fra opgave 2.2, så den nu får en compare-funktion som ekstra parameter. 
// Sammenligningen i bubbleSort funktionen skal nu ske med denne compare-funktion.

const compare = (s1, s2) => (s1 > s2) ? -1 : (s1 == s2) ? 0 : 1;
const compareLen = (s1, s2) => compare(s1.length, s2.length);
const compareIgnoreCase = (s1, s2) => compare(s1.toLowerCase(), s2.toLowerCase());

const bubbleSort = function (array, compareMethod) {
    const swap = function (pos1, pos2) {
        let temp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareMethod(array[j], array[j + 1]) < 0) {
                swap(j, j + 1)
            }
        }
    }

    return array;
};



let a = "a";
let b = "b";
let abc = "abc";
let dEF = "dEF";
let def = "def";

console.log(`=========== Opgaver compare methods`);
console.log(`a=a, b=b, abc=abc, def=def, dEF=dEF`);
console.log(`compare(a,b) = ${compare(a, b)}`);
console.log(`compare(b,a) = ${compare(b, a)}`);
console.log(`compare(a,a) = ${compare(a, a)}`);
console.log(`compareLen(a,b) = ${compareLen(a, b)}`);
console.log(`compareLen(a, abc) = ${compareLen(a, abc)}`);
console.log(`compareLen(abc, a) = ${compareLen(abc, a)}`);
console.log(`compareIgnoreCase(a,b) = ${compareIgnoreCase(a, b)}`);
console.log(`compareIgnoreCase(abc, dEF) = ${compareIgnoreCase(abc, dEF)}`);
console.log(`compareIgnoreCase(def, dEF) = ${compareIgnoreCase(def, dEF)}`);

console.log(`\n=========== Opgaver sort with compare`);
let alphabet = ["alpha", "charlie", "bETA", "Charlie"];
console.log(`alphabet: [${alphabet}]`);
console.log(`bubbleSort(array, compare()):              ${bubbleSort(alphabet, compare)}`);
console.log(`bubbleSort(array, compareLen()):           ${bubbleSort(alphabet, compareLen)}`);
console.log(`bubbleSort(array, compareIgnoreCase()):    ${bubbleSort(alphabet, compareIgnoreCase)}`);