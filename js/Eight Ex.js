// Место для первой задачи
let IsCorrect = (n) => typeof(n) == "number" && Number.isInteger(n) && n >= 0;


function calculateVolumeAndArea(a) {
    if (IsCorrect(a))
    {
       return `Объем куба: ${a * a * a}, площадь всей поверхности: ${6 * (a * a)}`;
    }
    else
    {
        return "При вычислении произошла ошибка";
    }
}


function getCoupeNumber(n) {
    if (n === 0 || n > 36)
    {
        return "Таких мест в вагоне не существует";
    }
    else if (IsCorrect(n)) 
    {
        return parseInt((n - 1) / 4 + 1);
    }
    else
    {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}

calculateVolumeAndArea(5) 

calculateVolumeAndArea(15)  

calculateVolumeAndArea(15.5)  

calculateVolumeAndArea('15') 

calculateVolumeAndArea(-15)

getCoupeNumber(33) 

getCoupeNumber(7)  

getCoupeNumber(300) 

getCoupeNumber(0)  

getCoupeNumber(7.7)  

getCoupeNumber(-10)  

getCoupeNumber('Hello')  