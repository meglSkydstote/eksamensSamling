// Programmer nedenstående funktioner, hvor array indeholder nogle tal:
// • max(array): returnerer det største element i arrayet.
// • contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false
// • sum(array): returnerer summen af elementerne i arrayet.

let numbers = [3, 6, 10, 2, 7, 4]

console.log("==========================max(array)============================")

function max(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? v : p)
    })
}
function maxMath(arr) {
    return Math.max.apply(null, arr)
}
function maxMathSpreadOperator(arr) {
    return Math.max(...arr)
}
console.log("Array with numbers: " + numbers.toString())
console.log("Reduce arrow till biggest is found: " + max(numbers))
console.log("Math.max.apply: " + maxMath(numbers))
console.log("Math.max with spread operator: " + maxMathSpreadOperator(numbers))

console.log("===================contains(array, element)=====================")

function contains(arr, element) {
    return arr.includes(element)
}
console.log("Does number array contain number 10: " + contains(numbers, 10))

console.log("===========================sum(array)===========================")

function sum(arr) {
    let accumulated = 0
    arr.forEach(e => {
        accumulated += e
    })
    return accumulated
}
console.log("The sum of the array with numbers is: " + sum(numbers))