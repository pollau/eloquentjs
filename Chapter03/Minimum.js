let f = (x, y) => {
    if (x < y)
        return x
    else 
    return y;
}

console.log(f(0, 10));
console.log(f(0, -10));
console.log(f(10, 0));
console.log(f(10, 10));