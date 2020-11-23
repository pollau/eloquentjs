function loop(value, testFunc, updateFunc, bodyFunc)
{
    for(value; testFunc(value); value = updateFunc(value))
    {
        bodyFunc(value);
    }
}

loop(55, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1