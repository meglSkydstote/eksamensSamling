// Merge Sort Implentation (Recursion)

// Opgave 1.4 Lav en udgave af flettealgoritmen (totalfletning) fra første semester, hvor to sorterede arrays med talflettes sammen. 
// Udskriv resultatet med console.log. Indsæt i enden af et array med metoden push()

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray
    }
    const middle = Math.floor(unsortedArray.length / 2)

    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle)

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    )
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = []
    let leftIndex = 0, rightIndex = 0

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex])
            leftIndex++ // move left array cursor
        } else {
            resultArray.push(right[rightIndex])
            rightIndex++ // move right array cursor
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}

let numberArr = [52, 3, 41, 95, 0, 29, 5, 9, 12, 19, 43, 75, 29, 19]
console.log(mergeSort(numberArr))