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

// Opgave 1.2 Lav en ny udgave af bubbleSort.js, hvor der nu sorteres på et array af tekststrenge. Hvor meget skal der ændres ?
// Ingenting!

let arrNum = [7, 13, 9, 8, 4, 1, 2, 16, 0]
let arrString = ['adc', 'bac', 'aaa', 'aa', 'bca']

bubbleSort(arrNum)
console.log(arrNum.toString())

bubbleSort(arrString)
console.log(arrString.toString())