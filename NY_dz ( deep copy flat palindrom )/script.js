// // Задача: є масив цілих чисел, потрібно зробити здвиг елементів вправо на k кроків.
// // Умова: для перетворення використати лише вихідний масив
//
// let arr = [1, 2, 3, 4, 5];
//
// let moveRight = (array, step) => {
//     step = step > 0 ? step : 0; // перевірка на зсув
//
//     for (let i = 0; i < step; i++) {
//         for (let i = 0; i < moveRight.length - 1; i++) {
//             array.push(array.shift());
//         }
//     }
//
//     return array;
// };
//
// console.log(arr);
// console.log(moveRight(arr, 2));
//
//
// //зробити алгоритм який робить deep copy для обєкта рекурсивно
//
// let user = {
//     name: 'Yura',
//     arr: [{name: 'el1'}, {name: 'el2'}],
//     arr1: [1, 2, [1, 3, {name: 'deep'}], 3],
//     obj: {
//         name: 'object',
//         yyy: {zzz: '123'}
//     },
//     age: 20
// }
//
// //------------------------------------------------------------
//
// let arrCopy = (arr) => {
//     let newArr = [];
//
//     for (let el of arr) {
//         if (typeof el === "object") {
//             if (Array.isArray(el)) {
//                 newArr.push(arrCopy(el));
//             } else
//                 newArr.push(deepCopy(el));
//         } else
//             newArr.push(el);
//     }
//
//     return newArr;
// };
//
// let deepCopy = objToCopy => {
//     let newObj = {};
//
//     for (let value in objToCopy) {
//         if (typeof objToCopy[value] === "object") {
//             if (Array.isArray(objToCopy[value])) {
//                 newObj[value] = arrCopy(objToCopy[value]);
//             } else
//                 newObj[value] = deepCopy(objToCopy[value]);
//         } else {
//             newObj[value] = objToCopy[value];
//         }
//     }
//
//     return newObj;
// };
//
// let user1 = deepCopy(user);
//
// //console.log(user);
// //console.log(user1);
// console.log('----------------Початковий об`єкт----------------');
//
// user1.name = 'Vitya';
// user1.obj.name = 'Vasya';
// user1.obj.yyy.zzz = 'Ivan';
// user1.arr[0].name = 'zzz';
// user1.arr[1].name = 'yyy';
//
//
// console.log(user);
// console.log('----------------Клонований об`єкт----------------');
// console.log(user1);
//
//
// //зробити аналог flat який ми брали, але без flat
//
// let flat = (arr) => {
//     let newArr = [];
//
//     for (let el of arr) {
//         if (typeof el === 'object') {
//             if (Array.isArray(el)) {
//                 let subArr = flat(el);
//                 newArr.push(...subArr);
//             } else {
//                 newArr.push(deepCopy(el));
//             }
//         } else{
//             newArr.push(el);
//         }
//     }
//
//     return newArr;
// };
//
// let arr = [1, [1, 3, [5,[3,[2]]], {name: 'Joker', arr: [1,2,{name: 'zzz'}]}],'str',false];
// let flatRes = flat(arr)
//
// console.log(arr);
// console.log(flatRes);


// знайти максимальний паліндром серед паліндромів добутку 5-значних натуральних чисел
// приклад 11111 * 11111 = 555585555

let naturlNums = [];


// натуральні 5-значні числа

nextPrime: // мітка
    for (let i = 10000; i <= 99999; i++) {
        for (let k = 2; k < i; k++) {

            if (i % k == 0) continue nextPrime
        }
        naturlNums.push(i);
    }

let palindrom = (array) => {

    let palindroms = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            let number = array[i] * array[j];
            let numberString = number.toString();

            // перевірка на довжину числа
            if (numberString.length % 2 === 0) {

                // розбиваю число на половинки
                let firstPart = numberString.slice(0, (numberString.length / 2));
                let secondPart = numberString.slice((numberString.length / 2)).split('').reverse().join('');

                if (firstPart === secondPart)
                    palindroms.push(number);
            } else if (numberString.length % 2 !== 0) {

                // розбиваю число на половинки
                let firstPart = numberString.slice(0, (numberString.length / 2) + 1);
                let secondPart = numberString.slice((numberString.length / 2)).split('').reverse().join('');

                if (firstPart === secondPart)
                    palindroms.push(number);
            }
        }
    }

    console.log(palindroms);
    return palindroms === [] ? 'Palindrom not found' : Math.max(...palindroms);
};

console.time('Execution time');
console.log(palindrom(naturlNums));
console.timeEnd('Execution time');

