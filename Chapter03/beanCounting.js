function countBs (str)
{
    let count = 0;
    for(i = 0; i < str.length; i++)
    {
        if(str[i] === 'B')
        {
            count ++;
        }
    }

    return count;
}

function countChar (str, strToSearch)
{
    let count = 0;
    for(i = 0; i < str.length; i++)
    {
        if(str[i] === strToSearch)
        {
            count ++;
        }
    }

    return count;
}

console.log(countBs("petit chaperon rouge"));
console.log(countBs("Babar"));
console.log(countBs("Brest Brisque aaaaBBBaaa"));

console.log(countChar("Chapter03","p"));
console.log(countChar("beanCounting","n"));