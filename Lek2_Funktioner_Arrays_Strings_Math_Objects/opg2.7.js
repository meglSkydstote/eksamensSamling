// opgave 2.7

let list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

list.max = function max(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? v : p);
    })
}

list.contains = function contains(arr, element) {
    return arr.includes(element)
}

list.sum = function sum(arr) {
    let accumulated = 0
    arr.forEach(e => {
        accumulated += e
    })
    return accumulated
}

console.log(`list=[${list}]`)
console.log(`list.max(list) = ${list.max(list)}`)
console.log(`list.contains(list, 1) = ${list.contains(list, 1)}`)
console.log(`list.sum(list) = ${list.sum(list)}`)