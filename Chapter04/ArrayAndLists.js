let arrayToList = (array) => {
  if (array.length == 0) {
    return null;
  }
  let v = array[0];
  array.shift();
  return {
    value: v,
    rest: arrayToList(array)
  };
}

let listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

let prepend = (element, list) => {
  let array = listToArray(list);
  array.unshift(element);
  return arrayToList(array);
}

let nth = (list, number) => {
  let array = listToArray(list);
  return array[number];
}

let nthRecursive = (list, number) => {
  if (number == 0)
    return list.value;
  else
    return nthRecursive(list.rest, number-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// -> 20