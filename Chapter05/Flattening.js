let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(reduce(arrays, (a, b) => { return a.concat(b)} , arrays.shift()));

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }
  