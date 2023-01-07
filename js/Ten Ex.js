function fib(n) {
    if (!Number.isInteger(n)) {
        return "";
    }

    let last = 1,
        secondLast = 0,
        res = "";
    for (let i = 0; i < n; i++)
    {
        res += ` ${secondLast}`;
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
    }
    return res.slice(1);
}


console.log(fib(0));