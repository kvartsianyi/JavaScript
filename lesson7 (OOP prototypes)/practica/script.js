// 1.создать класс которы описывает Пользователя. класс должен содержать 7-9 полей и функцию toString()
// которая возвращает инфрмацию про экземпляр класса.
console.log('----------Task1----------');

class User {
    constructor(name, surname, girl, car, money, smoking, company) {
        this.name = name;
        this.surname = surname;
        this.girl = girl;
        this.car = car;
        this.money = money;
        this.smoking = smoking;
        this.company = company;
    }

    toString() {
        console.log(this);
    }
}

let user = new User('Yurka', 'Kvartsianyi', false, false, null, false, 'Okten');
user.toString();


// создать 10 различных экземпляров.
// - создать сортировку по каждому полю отдельно
// - создать фильтрацию по каждому полю отдельно (протокол фильтрации придумать самостоятельно. он будет зависить от ваших полей)

console.log('----------Task2----------');

let users = [
    new User('Yurka', 'Kvartsianyi', false, false, 0, false, 'Okten'),
    new User('kokos', 'kokos', false, true, 5, true, 'Epam'),
    new User('Vova', 'Vova', true, false, 20, false, 'Eleks'),
    new User('Taras', 'Sushko', false, false, 2384, true, 'Okten'),
    new User('kokos', 'Vova', true, true, 0, false, 'Okten'),
    new User('Taras', 'Taras', false, false, 0, true, 'Epam'),
    new User('Yurka', 'Kvartsianyi', false, true, 100, false, 'Okten'),
    new User('Vova', 'Sushko', false, false, 365, false, 'Eleks'),
    new User('Taras', 'Kvartsianyi', true, false, 82656, true, 'Okten'),
    new User('Yurka', 'Taras', false, false, 0, false, 'Eleks')
];

// Sorting

//console.log(users.sort((a, b) => a.name > b.name ? 1 : 0)); // по імені
//console.log(users.sort((a, b) => a.surname > b.surname ? 1 : 0)); // по прізвищу
//console.log(users.sort((a, b) => a.girl - b.girl)); // по girl
//console.log(users.sort((a, b) => a.car - b.car)); // по car
//console.log(users.sort((a, b) => a.money - b.money)); // по money
//console.log(users.sort((a, b) => a.smoking - b.smoking)); // по smoking
//console.log(users.sort((a, b) => a.company > b.company ? 1 : 0)); // по company


//Filtering

//console.log(users.filter(value => value.name === 'kokos')); // по name
//console.log(users.filter(value => value.surname === 'kokos'));// по surname
//console.log(users.filter(value => value.girl === true));// по girl
//console.log(users.filter(value => value.car === true));// по car
//console.log(users.filter(value => value.money > 20));// по money
//console.log(users.filter(value => value.smoking === false));// по smoking
//console.log(users.filter(value => value.company === 'Okten'));// по company


// Взять библиотечный класс Array и добавить ему новый метод который
// - выводит наименьший числовой элемент массива
// - выводит наименьший по размеру строчный элемент массива
// - выводит только объекты у которых присутствует поле id

console.log('----------Task3----------');

Array.prototype.min = function () {
    console.log(Math.min(...this));
};

let arr = [7, 1, 5, -5];
arr.min();


Array.prototype.minStr = function () {
    let minStr = undefined;
    this.forEach(value => {
        if (typeof value === "string") {
            if (minStr === undefined)
                minStr = value;
            else if (minStr.length > value.length) {
                minStr = value;
            }
        }
    });

    console.log(minStr);
};

let strArr = [2, 'hello', 'str', false,];
strArr.minStr();

Array.prototype.hasId = function () {
    console.log(this.filter(value => (typeof value === "object" && !Array.isArray(value)) && value.hasOwnProperty('id')));
};

let objects = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petro'},
    {name: 'Taras'},
    {id: 4, name: 'kokos'},
    {name: 'Yura'},
    22
];


objects.hasId();
//users.hasId();


// Создаем свои методы map, filter, foreach для класса Array, добовляя их через prototype

console.log('----------Task4----------');

// map

Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }

    return newArr;
};

let mapArr = [2, 34, 679, 6];
let newMap = mapArr.myMap((value, index) => value * index);
console.log('map', newMap);


// filter

Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
            newArr.push(this[i]);
    }

    return newArr;
};

let filterArr = [22, true, 'str', false, 'okten', 'kokos'];
let filteredArr = filterArr.myFilter(value => typeof value === 'string');
console.log('filter', filteredArr);


// forEach

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

let val = [1, 2, 3];
let valForEach = val.myForEach(value => console.log(value * 2));
console.log(valForEach);


// Хто зробив усі завдання, тримайте ще:
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// Створити 10 попелюшок
// Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
// Знайти яка попелюшка його)


console.log('----------Popelushka----------');

class Popelushka {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }

    searchPopelushka(pops){
        return pops.filter(value => value.legSize === this.slipper);
    }
}

let pops = [
    new Popelushka('pop', 70, 42),
    new Popelushka('pop1', 30, 40),
    new Popelushka('pop2', 18, 37),
];

let prince = new Prince('princ', 39, 37);
console.log(prince.searchPopelushka(pops));















