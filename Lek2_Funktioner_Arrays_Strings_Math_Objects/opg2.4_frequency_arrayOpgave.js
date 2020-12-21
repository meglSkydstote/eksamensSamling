// Opgave 2.4
// Lav en string variabel med en længere tekst.
// Anvend dernæst et objekt som en map til at beregne antallet af de forskellige ord i teksten.
// Brug metodensplit() til at opdele teksten i ord.

let string = `Der er et yndigt land
det står med brede bøge
 nær salten østerstrand
Det bugter sig i bakke dal
det hedder gamle Danmark
 og det er Frejas sal

Der sad i fordums tid
de harniskklædte kæmper
 udhvilede fra strid
Så drog de frem til fjenders mén
nu hvile deres bene
 bag højens bautasten

Det land endnu er skønt
thi blå sig søen bælter
 og løvet står så grønt
Og ædle kvinder skønne møer
og mænd og raske svende
 bebo de danskes øer

Hil drot og fædreland
Hil hver en danneborger
 som virker, hvad han kan
Vort gamle Danmark skal bestå
så længe bøgen spejler
 sin top i bølgen blå`;


const wordFrequency = function (string) {
    let frequencyMap = {};
    let words = string.replace(/\n/g, " ").toLowerCase().split(" ");
    for (let word of words) {
        if (!frequencyMap[word]) { frequencyMap[word] = 0; }
        frequencyMap[word] += 1;
    }
    return frequencyMap;
};

//console.log(`string = ${string}`)
let wordFreq = wordFrequency(string);
let sorted = Object.entries(wordFreq).sort((a, b) => b[1] - a[1]);

console.log(sorted);