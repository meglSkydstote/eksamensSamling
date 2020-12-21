/*
Opgave 2.6
Lav en string variabel der indeholder noget kode med nogle parenteser – (), {} og [].
Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er balancerede.
Som datastruktur anvendes en stak (et array). Når der mødes en venstre parenteser i koden, skal den
sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre
parentes er øverst på stakken. Brug metoderne push() og pop().
*/

let string1 = "(1+1)";
let string2 = "((1+1)";
let string3 = "(1+))";
let string4 = "[1+1]";
let string5 = "{2+3}";
let string6 = "([{1+1}])";
let arrayOfStrings = [string1, string2, string3, string4, string5, string6];

const isBalanced = (string) => {
    let parenthesis = [];
    let leftSideChars = ["(", "[", "{"];
    let rightSideChars = [")", "]", "}"];
    const isPair = (char1, char2) => { // anden måde at declare en function på
        return leftSideChars.indexOf(char1) == rightSideChars.indexOf(char2);
    }

    for (let char of string) {
        if (leftSideChars.includes(char)) {
            parenthesis.push(char);
        }
        if (rightSideChars.includes(char)) {
            if (!isPair(parenthesis.pop(), char)) {
                return false;
            }
        }
    }

    return parenthesis.length == 0; // if unaccounted parenthenthis == not balanced
};

for (let string of arrayOfStrings) {
    console.log(`Tester isBalanced("${string}"): ${isBalanced(string)}`);
}