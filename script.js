/* console.log(zz);
{
var zz = 1;
}
let aaa = 2;
const pi = 3.14;
console.log(zz/0);
console.log(aaa);
console.log(pi);
(n=m == 50) ? console.log("true") : console.log("false";
 */
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function closeExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

            console.log("done");

            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }

    }
}
closeExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();


alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозитаЖ " + appData.monthIncome);
    }
}

checkSavings();
