// bubbleSort.js
function bubbleSort(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }
}

// Opgave 1.3 Udvid eksemplet bubbleSort.js med en binær søgning på indholdet af list,
// efter at list er blevet sorteret. Test dernæst med forskellige tal. 
// Udskriv med console.log tallets position i listen eller -1, hvis elementet ikke er i listen.

let recursiveBinarySearch = function (arr, numberToFind, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === numberToFind) return mid;
    if (arr[mid] > numberToFind)
        return recursiveBinarySearch(arr, numberToFind, start, mid - 1);
    else
        return recursiveBinarySearch(arr, numberToFind, mid + 1, end);
}

function iterativBinarySearch(arr, numberToFind) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === numberToFind) return mid;
        else if (arr[mid] < numberToFind)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}

let numberArrays = [[8, 123, 4, 25, 234, 129, 34, 65, 76], [323, 125, 425, 32, 41, 23, 123, 1, 45],
[432, 54, 99, 588, 1243, 431, 25, 234, 87], [7, 13, 9, 8, 4, 1, 2, 16, 0], [123, 1343, 59, 86, 74, 81, 29, 160, 2341]]

console.log("===================USORTERET===================")
let i = 0
numberArrays.forEach(arr => {
    i++
    console.log(`Array${i} usorteret: ` + arr.toString())
})
console.log("====================SORTERET===================")
// Sortér
numberArrays.forEach(arr => {
    bubbleSort(arr)
})

i = 0
numberArrays.forEach(arr => {
    i++
    console.log(`Array${i} sorteret: ` + arr.toString())
})
console.log("============ITERATIVE BINARY SEARCH=============")

let searchArray = [4, 25, 123]
let index = 0
searchArray.forEach(numberToFind => {
    i = 0
    numberArrays.forEach(arr => {
        i++
        index = iterativBinarySearch(arr, numberToFind)
        if (index !== -1) console.log(numberToFind + " blev fundet ved index: " + index + ` | i array nummer: ${i}`)
        else console.log(numberToFind + " ikke fundet: " + index + ` | i array nummer: ${i}`)
    })
    console.log("-------------------------------------")
})

console.log("===========RECURSIVE BINARY SEARCH============")
searchArray.forEach(numberToFind => {
    i = 0
    numberArrays.forEach(arr => {
        i++
        index = recursiveBinarySearch(arr, numberToFind, 0, arr.length - 1)
        if (index !== -1) console.log(numberToFind + " blev fundet ved index: " + index + ` | i array nummer: ${i}`)
        else console.log(numberToFind + " ikke fundet: " + index + ` | i array nummer: ${i}`)
    })
    console.log("-------------------------------------")
})