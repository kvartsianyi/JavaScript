console.log('----Завдання 1----');

let a = 1;

if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = 0;

if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = -3;

if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('----Завдання 2----');

let min = 16;

if (min >= 0 && min <= 14) {
    console.log('Перша чверть');
} else if (min >= 15 && min <= 29) {
    console.log('Друга чверть');
} else if (min >= 30 && min <= 44) {
    console.log('Третя чверть');
} else if (min >= 45 && min <= 59) {
    console.log('Четверта чверть');
} else {
    console.log('Помилка');
}

console.log('----Завдання 3----');

a = 1;
let b = 3;

console.log(a, b)
if (a <= 1 && b >= 3) {
    console.log('Сума: ' + (a + b));
} else {
    console.log('Різниця: ' + (a - b));
}

a = 0;
b = 6;

console.log(a, b)
if (a <= 1 && b >= 3) {
    console.log('Сума: ' + (a + b));
} else {
    console.log('Різниця: ' + (a - b));
}

a = 3;
b = 5;

console.log(a, b)
if (a <= 1 && b >= 3) {
    console.log('Сума: ' + (a + b));
} else {
    console.log('Різниця: ' + (a - b));
}

console.log('----Завдання 4----');

let month = 12;

console.log(`Зараз ${month} місяць`);

if (month === 12 || month === 1 || month === 2)
    console.log('Зима');
else if (month >= 3 && month <= 5)
    console.log('Весна');
else if (month >= 6 && month <= 8)
    console.log('Літо');
else if (month >= 9 && month <= 11)
    console.log('Осінь');
else
    console.log('Такого місяця немає');

console.log('----Завдання 5----');

let num = 4;

switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Літо');
        break;
    case 4:
        console.log('Осінь');
        break;
    default:
        console.log('Неправильна чверть');
        break;
}

console.log('----Завдання 6----');

num = 6;

switch (num) {
    case 1:
        console.log('Січень');
        break;
    case 2:
        console.log('Лютий');
        break;
    case 3:
        console.log('Березень');
        break;
    case 4:
        console.log('Квітень');
        break;
    case 5:
        console.log('Травень');
        break;
    case 6:
        console.log('Червень');
        break;
    case 7:
        console.log('Липень');
        break;
    case 8:
        console.log('Серпень');
        break;
    case 9:
        console.log('Вересень');
        break;
    case 10:
        console.log('Жовтень');
        break;
    case 11:
        console.log('Листопад');
        break;
    case 12:
        console.log('Грудень');
        break;
    default:
        console.log('Такого місяця немає');
        break;
}














