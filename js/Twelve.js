const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (!arr || !arr.length) {
        return "Семья пуста";
    }
    return `Семья состоит из: ${arr.join(' ')}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((e) => {
        console.log(e.toLowerCase());
    });
}