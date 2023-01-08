const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    const square = data.shops
    .map(({width, length}) => width * length)
    .reduce((sum, cur) => sum + cur);
    const capacity = square * data.height;

    const needMoney = capacity * data.moneyPer1m3;
    console.log(needMoney);
    if (data.budget >= needMoney) {
        return "Бюджета достаточно";
    }
    else {
        return "Бюджета недостаточно";
    }
}