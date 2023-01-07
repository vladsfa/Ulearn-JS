const lines = 5;
const symb = '*';
let result = '';

for (let i = 0; i < lines + 1; i++) {
    let spaces = "";
    for (let j = 0; j < lines - i; j++) {
        spaces += ' ';
    }

    let symbols = "";
    for (let j = 0; j < i; j++) {
        symbols += symb;
    }

    result = result + spaces + symbols + '*' + symbols;
    result += '\n';
}