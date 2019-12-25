// є масив -
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
// це в новий масив (первинний масив залишиться без змін)

console.log('-------------------Task1-----------------------');

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let usersWithId = users.map((value, index) => {
//     value.id = index+1;
//     return value;
// });

let usersWithId = users.map((value, index) => {
    return {...value, 'id': index + 1}
});

// for (let user of users) {
//     usersWithId.push(user);
// }
//
// //console.log(usersWithId);
//
// usersWithId.forEach((value, index) => value.id = index+1)

console.log(users);
console.log('----------------------------------');
console.log(usersWithId);


// -відсортувати його за індентифікатором
console.log('-------------------Task2-----------------------');
let sortedUsers = usersWithId.sort((a, b) => b.id - a.id);

console.log(sortedUsers);


// Отфильтровать по :
//     двигун більше 3х літрів
// двигун = 2л
// виробник мерс
// двигун більше 3х літрів + виробник мерседес
// двигун більше 3х літрів + виробник субару
// сили більше ніж 300
// сили більше ніж 300 + виробник субару
// мотор серіі ej
// сили більше ніж 300 + виробник субару + мотор серіі ej
// двигун меньше 3х літрів + виробник мерседес
// двигун більше 2л + сили більше 250
// сили більше 250  + виробник бмв
console.log('-------------------Task3-----------------------');

class Car {
    constructor(marka, model, year, color, type, nomer, engine, power) {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.color = color;
        this.type = type;
        this.nomer = nomer;
        this.engine = engine;
        this.power = power;
    }
}


let cars = [
    new Car("subaru", "wrx", 2010, "blue", "sedan", "ej204x", 2, 400),
    new Car("subaru", "legacy", 2007, "silver", "sedan", "ez30", 3, 250),
    new Car("subaru", "tribeca", 2011, "white", "jeep", "ej20", 2, 300),
    new Car("subaru", "leone", 1998, "yellow", "sedan", "ez20x", 2, 140),
    new Car("subaru", "impreza", 2014, "red", "sedan", "ej204x", 2, 200),
    new Car("subaru", "outback", 2014, "red", "hachback", "ej204", 2, 165),
    new Car("bmw", "115", 2013, "red", "hachback", "f15", 1.5, 120),
    new Car("bmw", "315", 2010, "white", "sedan", "f15", 1.5, 120),
    new Car("bmw", "650", 2009, "black", "coupe", "f60", 6, 350),
    new Car("bmw", "320", 2012, "red", "sedan", "f20", 2, 180),
    new Car("mercedes", "e200", 1990, "silver", "sedan", "eng200", 2, 180),
    new Car("mercedes", "e6.3", 2017, "yellow", "sedan", "amg6.3", 6, 400),
    new Car("mercedes", "c250", 2017, "red", "sedan", "eng25", 2.5, 230),
];
console.log(cars);

console.log('---------------------------------------------------------------');

// Отфильтровать по :
//     двигун більше 3х літрів
console.log('-------------------Task4-----------------------');
let engineUpperTree = cars.filter(value => value.engine > 2);

console.log(engineUpperTree);

// двигун = 2л
console.log('-------------------Task5-----------------------');
let engineEqual = cars.filter(value => value.engine === 2);

console.log(engineEqual);

// виробник мерс
console.log('-------------------Task6-----------------------');
let marka = cars.filter(value => value.marka === 'mercedes');

console.log(marka);

// двигун більше 3х літрів + виробник мерседес
console.log('-------------------Task7-----------------------');
let markaAndEngine = cars.filter(value => value.engine > 2 && value.marka === 'mercedes');

console.log(markaAndEngine);

// двигун більше 3х літрів + виробник субару
console.log('-------------------Task8-----------------------');
markaAndEngine = cars.filter(value => value.engine > 3 && value.marka === 'subaru');

console.log(markaAndEngine);


// сили більше ніж 300
console.log('-------------------Task9-----------------------');
let power = cars.filter(value => value.power > 300);

console.log(power);


// сили більше ніж 300 + виробник субару
console.log('-------------------Task10-----------------------');
let powerAndMarka = cars.filter(value => value.power > 300 && value.marka === 'subaru');

console.log(powerAndMarka);

// мотор серіі ej
console.log('-------------------Task11-----------------------');
let engineEJ = cars.filter(value => value.nomer.includes('ej'));

console.log(engineEJ);


// сили більше ніж 300 + виробник субару + мотор серіі ej

console.log('-------------------Task12-----------------------');
let PowerAndEngineEJ = cars.filter(value => value.power > 300 && value.nomer.includes('ej'));

console.log(PowerAndEngineEJ);

// двигун меньше 3х літрів + виробник мерседес
console.log('-------------------Task13-----------------------');
let engineAndMarka = cars.filter(value => value.engine < 3 && value.marka === 'mercedes');

console.log(engineAndMarka);

// двигун більше 2л + сили більше 250
console.log('-------------------Task14-----------------------');
let engineAndPower = cars.filter(value => value.engine > 2 && value.power > 250);

console.log(engineAndPower);

// сили більше 250  + виробник бмв
console.log('-------------------Task15-----------------------');
let engineAndMarkaBMW = cars.filter(value => value.marka === 'bmw' && value.power > 250);

console.log(engineAndMarkaBMW);

// потім зробити сотрування по кожному полю окремо
console.log('-------------------Task16-----------------------');

console.log(cars.sort((a, b) => {
    if (a.marka > b.marka)
        return 1;
    else
        return -1;
}));

console.log('-------------------------------------------');

console.log(cars.sort((a, b) => {
    if (a.model > b.model)
        return 1;
    else
        return -1;
}));

console.log('-------------------------------------------');

console.log(cars.sort((a, b) => a.year - b.year));

console.log('-------------------------------------------');


console.log(cars.sort((a, b) => {
    if (a.color > b.color)
        return 1;
    else
        return -1;
}));

console.log('-------------------------------------------');

console.log(cars.sort((a, b) => {
    if (a.type > b.type)
        return 1;
    else
        return -1;
}));

console.log('-------------------------------------------');


console.log(cars.sort((a, b) => {
    if (a.nomer > b.nomer)
        return 1;
    else
        return -1;
}));

console.log('-------------------------------------------');


console.log(cars.sort((a, b) => a.power - b.power));

console.log('-------------------------------------------');


console.log(cars.sort((a, b) => a.engine - b.engine));


// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log('-------------------Task17-----------------------');

let arrayNums = [1, 2, 3, 4, 5];
arrayNums.splice(1, 2);

console.log(arrayNums);

// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log('-------------------Task18-----------------------');

arrayNums = [1, 2, 3, 4, 5];
let spliceArr = arrayNums.splice(1, 3);

console.log(spliceArr);

// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('-------------------Task19-----------------------');

arrayNums = [1, 2, 3, 4, 5];

arrayNums.splice(3, 0, 'a', 'b', 'c');
console.log(arrayNums);

// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('-------------------Task20-----------------------');

arrayNums = [1, 2, 3, 4, 5];

arrayNums.splice(1, 0, 'a', 'b');
arrayNums.splice(6, 0, 'c');
arrayNums.splice(8, 0, 'e');

console.log(arrayNums);

// - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
console.log('-------------------Task21-----------------------');

let toSortArray = [3, 4, 1, 2, 7];

console.log(toSortArray);
console.log('По зростанню:', toSortArray.sort((a, b) => a - b));
console.log('По спаданню:', toSortArray.sort((a, b) => b - a));


// - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
console.log('-------------------Task22-----------------------');

let obj = {js: 'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));