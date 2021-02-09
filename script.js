
let startBtn = document.getElementById("start"),
budgetValue = document.getElementsByClassName("budget-value")[0],
daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
levelValue = document.getElementsByClassName("level-value")[0],
expensesValue = document.getElementsByClassName("expenses-value")[0],
optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
incomeValue = document.getElementsByClassName("income-value")[0],
monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

expensesItem = document.getElementsByClassName("expenses-item"),
expensesItemBtn = document.getElementsByTagName("button")[0],
optionalExpensesBtn = document.getElementsByTagName("button")[1],
countBudgetBtn = document.getElementsByTagName("button")[2],
optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

incomeItem = document.querySelector('.choose-income'),
checkSavings = document.querySelector('#savings'),
sumValue = document.querySelector('.choose-sum'),
percentValue = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');

let money, time;



startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
 
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    let myDate = new Date(Date.parse(time));
    yearValue.value = myDate.getFullYear();
    monthValue.value = myDate.getMonth() + 1;
    dayValue.value = myDate.getDate();
});
    
expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("bad result");
            i--;
        }
    expensesValue.textContent = sum;
    }

});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Ошибочка...!";
        }
    } else {
        daybudgetValue.textContent = "Ошибочка...!";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
    appData.savings = checkSavings.checked;
    if (appData.savings == true) {
        percentF();
    } else {
        monthsavingsValue.textContent = '';
        yearsavingsValue.textContent = '';       
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        percentF();
     }
});
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        percentF();
    }
});
function percentF() {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);       

}
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



