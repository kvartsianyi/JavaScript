let result;

console.log('----Завдання 1----');

let a = 1;

if (a === 0) {
    result = 'Вірно';
} else {
    result = 'Невірно';
}
console.log(result);

a = 0;

if (a === 0) {
    result = 'Вірно';
} else {
    result = 'Невірно';
}
console.log(result);

a = -3;

if (a === 0) {
    result = 'Вірно';
} else {
    result = 'Невірно';
}
console.log(result);

console.log('----Завдання 2----');

let min = 16;

if (min >= 0 && min <= 14) {
    result = 'Перша чверть';
} else if (min >= 15 && min <= 29) {
    result = 'Друга чверть';
} else if (min >= 30 && min <= 44) {
    result = 'Третя чверть';
} else if (min >= 45 && min <= 59) {
    result = 'Четверта чверть';
} else {
    result = 'Помилка';
}
console.log(result);

console.log('----Завдання 3----');

a = 1;
let b = 3;

console.log(a, b)
if (a <= 1 && b >= 3) {
    result = 'Сума: ' + (a + b);
} else {
    result = 'Різниця: ' + (a - b);
}
console.log(result);

a = 0;
b = 6;

console.log(a, b)
if (a <= 1 && b >= 3) {
    result = 'Сума: ' + (a + b);
} else {
    result = 'Різниця: ' + (a - b);
}
console.log(result);

a = 3;
b = 5;

console.log(a, b)
if (a <= 1 && b >= 3) {
    result = 'Сума: ' + (a + b);
} else {
    result = 'Різниця: ' + (a - b);
}
console.log(result);

console.log('----Завдання 4----');

let month = 12;

console.log(`Зараз ${month} місяць`);

if (month === 12 || month === 1 || month === 2)
    result = 'Зима';
else if (month >= 3 && month <= 5)
    result = 'Весна';
else if (month >= 6 && month <= 8)
    result = 'Літо';
else if (month >= 9 && month <= 11)
    result = 'Осінь';
else
    result = 'Такого місяця немає';

console.log(result);

console.log('----Завдання 5----');

let num = 4;

switch (num) {
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Літо';
        break;
    case 4:
        result = 'Осінь';
        break;
    default:
        result = 'Неправильна чверть';
        break;
}

console.log(result);

console.log('----Завдання 6----');

num = 6;

switch (num) {
    case 1:
        result = 'Січень';
        break;
    case 2:
        result = 'Лютий';
        break;
    case 3:
        result = 'Березень';
        break;
    case 4:
        result = 'Квітень';
        break;
    case 5:
        result = 'Травень';
        break;
    case 6:
        result = 'Червень';
        break;
    case 7:
        result = 'Липень';
        break;
    case 8:
        result = 'Серпень';
        break;
    case 9:
        result = 'Вересень';
        break;
    case 10:
        result = 'Жовтень';
        break;
    case 11:
        result = 'Листопад';
        break;
    case 12:
        result = 'Грудень';
        break;
    default:
        result = 'Такого місяця немає';
        break;
}

console.log(result);

console.log('----CLASSWORK----');
console.log('----Завдання 1----');

let x = +prompt('First number');
let y = +prompt('Second number');
let z = +prompt('Third number');

if (x <= y && x <= z) {
    if (y <= z) {
        result = `${x} ${y} ${z}`
    } else {
        result = `${x} ${z} ${y}`
    }
} else if (y <= x && y <= z) {
    if (x <= z) {
        result = `${y} ${x} ${z}`
    } else {
        result = `${y} ${z} ${x}`
    }
} else if (z <= x && z <= y) {
    if (x <= y) {
        result = `${z} ${x} ${y}`
    } else {
        result = `${z} ${y} ${x}`
    }
}

console.log(result);

console.log('----Завдання 2----');

let light = prompt('Стан світлофора');

if (light === 'зелений') {
    result = 'Йди';
} else if (light === 'жовтий') {
    result = 'Чекай';
} else if (light === 'червоний') {
    result = 'Стій';
} else {
    result = 'Роби що хочеш';
}
console.log(result);

console.log('----Завдання 3----');

light = prompt('Стан світлофора');
let isRoadClear = confirm('Чи є машина на дорозі?');

if (light === 'зелений') {
    if(isRoadClear)
        result = 'Почекай доки ці порушники проїдуть';
    else
        result = 'Йди';
} else if (light === 'жовтий') {
    if(isRoadClear)
        result = 'Почекай';
    else
        result = 'Чекай';
} else if (light === 'червоний') {
    if(isRoadClear)
        result = 'Стій і чекай';
    else
        result = 'Стій, рано!';
} else {
    result = 'Роби що хочеш!';
}
console.log(result);









