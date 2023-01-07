
function sayHello(name) {
    return `Привет, ${name}!`;
}


function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}


function getMathResult(base, count) {
    if (typeof count != 'number' || count <= 0) {
        return base;
    }

    const symb = "---";
    let res = "";
    for (let i = 0; i < count; i++) {
        res += base * (i + 1);
        if (i != count - 1) {
            res += symb;
        }
    }
    
    return res;
}