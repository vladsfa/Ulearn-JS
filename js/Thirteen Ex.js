const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != "string") {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (!arr || !arr.length) {
        return "Нет доступных валют";
    }

    let res = "Доступные валюты:\n";
    arr.forEach((e) => {
        if (e != missingCurr) {
            res += `${e}\n`;
        }
    });

    return res;
}