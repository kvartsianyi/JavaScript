// - Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
console.log('----------Task1----------');
let str = ['a', 'b', 'c'];
let num = [1, 2, 3];

// let res = str.concat(num);
let res = [...str, ...num];

console.log(res);

// - Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
console.log('----------Task2----------');
let str1 = ['a', 'b', 'c'];
// str1.push(1);
// str1.push(2);
// str1.push(3);

str1 = [...str1, 1, 2, 3]

console.log(str1);

// - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log('----------Task3----------');

let num1 = [1, 2, 3];
let num2 = num.reverse();
console.log(num1);
console.log(num2);

// - Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log('----------Task4----------');

let num3 = [1, 2, 3];
num3.push(4);
num3.push(5);
num3.push(6);
// num3 = [...num3, 4, 5, 6];

console.log(num3);

// - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log('----------Task5----------');

let num4 = [1, 2, 3];
// num4.unshift(6);
// num4.unshift(5);
// num4.unshift(4);

num4 = [4, 5, 6, ...num4];

console.log(num4);

// - Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент при помощи shift
console.log('----------Task6----------');

let skills = ['js', 'css', 'jq'];
console.log(skills.shift());

// - Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент при помощи pop
console.log('----------Task7----------');
skills = ['js', 'css', 'jq'];

console.log(skills.pop());

// - slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log('----------Task8----------');

let numbers = [1, 2, 3, 4, 5];
let subNumbers = numbers.slice(0, 3);

console.log(numbers);
console.log(subNumbers);


// - slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]
console.log('----------Task9----------');

numbers = [1, 2, 3, 4, 5];
subNumbers = numbers.slice(3);

console.log(numbers);
console.log(subNumbers);


// Все робити через функції масивів (foreach, map ...тд)
console.log('----------II----------');

// 1 створити масив з 10 елементів, заповнити його парними значеннями (2 4 6 8 10 ...).
console.log('----------Task1----------');
//let magicArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let evenArray = Array(10).fill(0);

// let ind = 2;
// while (evenArray.length < 10){
//     evenArray.push(ind);
//     ind +=2;
// }

evenArray = evenArray.map((value, index) => ++index*2);

// console.log(magicArray);
console.log(`Array length: ${evenArray.length}`);
console.log(evenArray);


// 2 створити масив з 10 елементів, заповнити його цілими рандомними значеннями(Math.random)
console.log('----------Task2----------');
let randArray = Array(10).fill(0);

// for (let i = 0; i < 10; i++) {
//     randArray.push(Math.round(Math.random()*25));
// }

randArray = randArray.map(value => Math.round(Math.random() * 25));

console.log(`Array length: ${randArray.length}`);
console.log(randArray);


// 3 є масив
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log('----------Task3----------');
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

let ageSortToUp = users.sort((a, b) => a.age - b.age);
console.log('-----Вік по зростанню-------');
console.log(ageSortToUp);

let ageSortToDown = users.sort((a, b) => b.age - a.age);
console.log('-----Вік по спаданню-------');
console.log(ageSortToDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log('----------Task4----------');

let nameSortToUp = users.sort((a,b) => a.name.length - b.name.length);

console.log('-----Імена по зростанню-------');
console.log(nameSortToUp);

let nameSortToDown = users.sort((a,b) => b.name.length - a.name.length);

console.log('-----Імена по спаданню-------');
console.log(nameSortToDown);


// let sort = users.sort((a, b) =>{
//     if(a.name > b.name )
//         return 1;
//     else
//         return -1;
// });
//
// console.log(sort);