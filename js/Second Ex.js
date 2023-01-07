
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}


function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}


function thirdTask() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);        
    }
}


function fourthTask() {
    let number = 3;
    while (number < 16) {
        console.log(number);
        number += 2;
    }
}


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    return arrayOfNumbers;
}