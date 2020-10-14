let deepEqual = (x, y) => {
    if ((x == null) && (y == null))
        return true;
    if ((x == null) || (y == null))
        return false;
    if (typeof (x) != typeof (y))
        return false;
    if (typeof (x) != "object") {
        return x === y;
    }
    if (typeof (x) == "object") {
        let propX = Object.keys(x);
        let propY = Object.keys(y);
        if (propX.length === propY.length) {
            for (let i = 0; i < propX.length; ++i) {
                return deepEqual(x[propX[i]], y[propY[i]]);
            }
        }
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true