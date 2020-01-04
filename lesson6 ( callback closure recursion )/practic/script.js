// 1. Функция-приветстве. Функция принимает коллбек(любой) и исполняет его. Колбек выводит "ПРИВЕТ!"
console.log('-----------Task1-----------');

let hello = (callback) => {
    callback();
};

hello(() => console.log('Hello'));

// 2. Функция принимает аргумент и коллбек и выводит этот аргумент через колбек.
console.log('-----------Task2-----------');

let loger = (a, b, cb) => {
    cb(a, b);
};

loger(1, false, (a, b) => console.log(a, b));

// 3. Функция принимает 2 числа и колбек,и выводит результат арифметического действия над этими числами.действие описывается в колбеке
console.log('-----------Task3-----------');

let sumator = (a, b, cb) => {
    cb(a, b);
};

sumator(25, -15, (a, b) => console.log(a, b, `Sum: ${a + b}`))

// 4. Функция принимает масиив и колбек.Вывести данный массив при помощи колбека (по возрастанию и по убыванию)
console.log('-----------Task4-----------');

let arrPrint = (arr, cb) => {
    cb(arr)
};

let arr = [2, -54, 78];
arrPrint(arr, (arr) => {
    console.log(arr);
    console.log('---------------------------');
    console.log(arr.sort((a, b) => a - b));
    console.log(arr.sort((a, b) => b - a));
});

// 5. Выполнить возведение числа в степень через рекурсию.
console.log('-----------Task5-----------');

let toPow = (num, pow) => {
    let res = num;

    if (pow > 1)
        res = res * toPow(num, pow - 1);
    else
        return res;

    return pow % 2 === 0 ? res : Math.abs(res);
};

let num = 3;
let pow = 3;

console.log(`${num}^${pow} ${toPow(3, 3)}`);

// 6. Вычисление факториала числа с использованием цикла
console.log('-----------Task6-----------');

let factorialLoop = (num) => {
    let res = 1;

    let ind = 1;
    while (ind <= num) {
        res *= ind;

        ind++;
    }

    return res;
};

console.log(factorialLoop(9));

// 7. Вычисление факториала числа через рекурсию.
console.log('-----------Task7-----------');

let factorialRecurs = (num) => {
    let res = num;

    if (num > 0)
        res *= factorialRecurs(num - 1);
    else
        return 1;

    return res;
};

console.log(factorialRecurs(9));

// 8 Написать функцию рекурсию для вычисления первых n чисел ряда Фибоначчи
// пример: для первых 6 чисел ряда (результат: 5 + 3 = 8):
// элементы числовой последовательности
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
console.log('-----------Task8-----------');

let fibo = (num) => {
    let res = num;

    if (num > 1)
        res = fibo(num - 1) + fibo(num - 2);
    else
        return 1;

    return res;
};


let fibonachi = (count) => {
    console.log(0);

    for (let i = 0; i < count - 1; i++) {
        console.log(fibo(i));
    }
};

fibonachi(15);

