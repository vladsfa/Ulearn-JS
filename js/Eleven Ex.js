const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: (plan) => {
        const languages = plan.skills.languages
            .map((e) => e.toUpperCase())
            .join(' ');
        return `Мне ${plan.age} и я владею языками: ${languages}`;
    }
};

function showExperience(plan) {
    return `${plan.skills.exp}`; 
}

function showProgrammingLangs(plan) {
    const progLangs = Object.entries(plan.skills.programmingLangs);
    let res = "";

    for (const [key, value] of progLangs) {
        res += `Язык ${key} изучен на ${value}\n`;
    }

    return res;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    if (!salaries) {
        return null;
    }

    let res = null,
        maxSalary = 0;
    for (const [name, salary] of Object.entries(salaries)) {
       if (salary > maxSalary) {
            res = name;
            maxSalary = salary;
        }
    }
    return res;
};


console.log(topSalary(salaries));