// 1 створити функцію яка виводить масив
console.log('------Task1------');

function printArr(arr) {
    console.log(arr);
}

let array = ['okten', 12, false, 34, {name: 'vasya'}];
printArr(array);

// 2 стіорити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
console.log('------Task2------');

function setArr(Ilona) {
    let arr = [];

    for (let i = 0; i < Ilona; i++) {
        arr.push(Math.round((Math.random() * 15) + 5));
    }

    printArr(arr);
    return arr;
}

setArr(18);

// 3 --//-- яка знаходить найбільше число в масиві.Для створення масиву використати попередню функцію
console.log('------Task3------');

function maxInArray(num) {
    let arr = setArr(num);
    let max = arr[0];

    for (let element of arr) {
        if (max < element)
            max = element;
    }

    return max;
}

console.log(`Max: ${maxInArray(5)}`);

// 4 --//-- яка скаладає значення елементів масиву та повертає його.
console.log('------Task4------');

function sumOfArray(num) {
    let arr = setArr(num);
    let suma = 0;

    for (let element of arr) {
        suma += element;
    }


    return suma;
}

console.log(sumOfArray(5));

// 5 --//-- яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
// Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3, 5, 7, 9]
console.log('------Task5------');

function SumOfTwoArrays(arr1, arr2) {
    let resArr = [];
    let length = arr1.length > arr2.length ? arr2.length : arr1.length;

    for (let i = 0; i < length; i++) {
        resArr.push(arr1[i] + arr2[i])
    }

    console.log(arr1);
    console.log(arr2);

    return resArr;
}

console.log(SumOfTwoArrays([2, 53, 46, 42, 23, 24], [2, 4, 23, 345, 3]));
