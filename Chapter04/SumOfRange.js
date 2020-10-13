range = (start, end, step = 1) => {
    let rangeArray = [];
    if (start < end) {
        if (step < 0)
            return "Infinite loop detected";
        else {
            for (let i = start; i <= end; i = i + step) {
                rangeArray.push(i);
            }
        }
    }
    else {
        if (step < 0)
            for (let i = start; i >= end; i = i + step) {
                rangeArray.push(i);
            }
        else {
            return "Infinite loop detected";
        }
    }
    return rangeArray;
}

sum = (numberArray) => {
    let numberSum = 0;
    for (let i = 0; i <= numberArray.length; i++) {
        numberSum += i;
    }
    return numberSum;
}

console.log(sum(range(1, 10)));
console.log(range(1, 57, 7));
console.log(range(5, 2, -1));