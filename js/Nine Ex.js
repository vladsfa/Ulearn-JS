let IsCorrect = (n) => typeof(n) == "number" && Number.isInteger(n) && n >= 0;

let GetSuffix = (n) => {
    if (n === 0 || n >= 5) {
        return "часов";
    } 
    else if(n >= 2)
    {
        return "часа";
    }
    else
    {
        return "час";
    }
};


function getTimeFromMinutes(time) {
    if (IsCorrect(time))
    {
        let hour = parseInt(time / 60);
        return `Это ${hour} ${GetSuffix(hour)} и ${time % 60} минут`;
    }
    else
    {
        return "Ошибка, проверьте данные";
    }
}


function findMaxNumber(a, b, c, d) {
    if(typeof(a) == "number" && typeof(b) == "number" && typeof(c) == "number" && typeof(d) == "number")
    {
        return Math.max(a, b, c, d);
    }
    else
    {
        return 0;
    }
}
