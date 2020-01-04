// створити функції які :
// 1. приймає три числа та виводить та повертає найменьше.
console.log('----------Task1----------');

function minValue(first, second, third) {
    let min = first;

    if (min > second)
        min = second;
    if (min > third)
        min = third;

    return min;
}

console.log(minValue(2, 1, 43));

// 2. приймає три числа та виводить та повертає найбільше.
console.log('----------Task2----------');

function maxValue(first, second, third) {
    let max = first;

    if (max < second)
        max = second;
    if (max < third)
        max = third;

    return max;
}

console.log(maxValue(2, 1, 43));

// 3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
console.log('----------Task3----------');

function manyValues() {
    let min = arguments[0];
    let max = arguments[0];

    for (let arg of arguments) {
        if (min > arg)
            min = arg;
        if (max < arg)
            max = arg;
    }

    console.log(`Max: ${max}`);
    return min;
}

console.log(`Min: ${manyValues(11, 2, 78, 43, 23)}`);

// 4. виводить масив
console.log('----------Task4----------');

function printArr(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

let arr = [234, 34, 3, 6, 45, 546, 6, 75, 324]
console.log(arr);
printArr(arr);

// 5. повертає найбільше число з масиву
console.log('----------Task5----------');

function maxInArray(arr) {
    let max = arr[0];

    for (let element of arr) {
        if (max < element)
            max = element;
    }

    return max;
}

console.log(maxInArray(arr));

// 6. повертає найменьше число з масиву
console.log('----------Task6----------');

function minInArray(arr) {
    let min = arr[0];

    for (let element of arr) {
        if (min > element)
            min = element;
    }

    return min;
}

console.log(minInArray(arr));

// 8. приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
console.log('----------Task7----------');

function swapValueInArray(arr, i) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;

    return arr;
}

console.log(arr);
console.log(swapValueInArray(arr, 2));


// Приклад рекурсії (числа фібоначі)

function fibo(num) {
    let res;

    if (num == 0)
        res = 0;
    else if(num == 1)
        res = 1;
    else
        res = fibo(num - 1) + fibo(num - 2);

    // console.log(res);
    return res;

}

let fibonachi = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(fibo(i));
    }
};

fibonachi(20);

