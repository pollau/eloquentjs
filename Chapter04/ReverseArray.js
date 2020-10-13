reverseArray = (array) => {
    let invertedArray = [];
    let length = array.length
    for (let i = 0; i < length; ++i) {
        invertedArray.push(array.pop());
    }
    return invertedArray;
}

reverseArrayInPlace = (array) => {
    let length = array.length -1
    for (let i = 0; i < length/2; ++i) {
        let temp = array[i];
        array[i] = array[length - i];
        array[length - i] = temp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);