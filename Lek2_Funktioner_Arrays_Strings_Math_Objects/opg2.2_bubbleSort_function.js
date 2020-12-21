// Opgave 2.2
// Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:
// • bubbleSort(array)
// • binarySearch(array, element) 
// Gør desuden swap-delen af bubbleSort til en lokal funktion swap(i, j).

// bubbleSort.js
function bubbleSort(list) {
    function swap(j) {
        let temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
    }
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(j)
            }
        }
    }
}

let arrNum = [7, 13, 9, 8, 4, 1, 2, 16, 0]
let arrString = ['adc', 'bac', 'aaa', 'aa', 'bca']

bubbleSort(arrNum)
console.log(arrNum.toString())

bubbleSort(arrString)
console.log(arrString.toString())

// Binary search

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