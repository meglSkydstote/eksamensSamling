/*
Opgave 2.5
Lav et array med en række person objekter.
Hver person skal have et navn, en e-mail og et mobilnummer.
Afprøv CRUD på dette arrayet som vist på siden CRUD på arrays i arrays.pdf.
*/

function personGenerator(navn, email, mobilnummer) {
    return { "navn": navn, "email": email, "mobilnummer": mobilnummer };
}

let person1 = personGenerator("Alexander", "alexander@alexander.dk", "12345678");
let person2 = personGenerator("Mathias", "mathias@nybegynder.dk", "87654321");
let person3 = personGenerator("Erik", "erik@underviser.dk", "22222222");
//let personer = [personGenerator("Alexander", "alexander@alexander.dk", "12345678"), personGenerator("Mathias", "mathias@nybegynder.dk", "87654321"), personGenerator("Erik", "erik@underviser.dk", "22222222")];
let personer = [person1, person2, person3];

console.log(personer);
console.log("Giver superkræfter, opdaterer mobilnummer og sletter mail");
personer[0]['superkraft'] = "megastærk"; // attribut mere
personer[1]['mobilnummer'] = "32323232"; // update
delete personer[2]['email']; // fjerne attribut
delete personer[1]; // fjerner object
console.log(personer);