const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const res = [];

    for (let i = 0; i < 3; i++) {
        res[i] = arr.slice(i * 3, i * 3 + 3);
    }

    let remain = "Оставшиеся студенты: ";
    if (arr.length > 9) {
        remain += arr.slice(9).join(", ");
    }
    else{
        remain += '-';
    }
    res.push(remain);

    return res;
}