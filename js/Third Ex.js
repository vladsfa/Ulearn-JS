
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    return result;
}


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === "number") {
            data[i] *= 2;
        }
        else {
            data[i] += " - done";
        }
    }
    return data;
}


function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    const n = data.length;
    for (let i = 0; i < n; i++) {
        result[i] = data[n - i - 1];
    }

    return result;
}