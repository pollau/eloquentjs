function isEven(x)
{
    if(x > 1)
    {
        return isEven(x-2);
    }
    else if(x == 1)
    {
        return false
    }
    else if (x == 0)
    {
        return true;
    }
    else if(x < 0)
    {
        return isEven(x + 2);
    }
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-100));
console.log(isEven(-231));