// Task 1
console.log('Task 1');
let arr = [];

let num = 0;
for (let i = 0; i < 50; i++) {
    arr.push(num);

    num += 2;
}
console.log(arr);

// Task 2
console.log('Task 2');
num = 1;
for (let i = 0; i < 50; i++) {
    arr.push(num);

    num += 2;
}

console.log(arr);

// Task 3
console.log('Task 3');
let randArr = [];

for (let i = 0; i < 50; i++) {
    randArr.push(Math.round((Math.random() * 724) + 8));
}
console.log(randArr);

// Task 4
console.log('Task 4');
for (let i = 0; i < randArr.length; i += 3) {
    console.log(randArr[i]);
}

// Task 5
console.log('Task 5');
for (let i = 0; i < randArr.length; i += 3) {
    if (randArr[i] % 2 === 0) {
        console.log(randArr[i]);
    }
}

// Task 6
console.log('Task 6');
let evenArr = [];

for (let i = 0; i < randArr.length; i += 3) {
    if (randArr[i] % 2 === 0) {
        console.log(randArr[i]);
        evenArr.push(randArr[i]);
    }
}
console.log(evenArr);


// Task 7
console.log('Task 7');
console.log(randArr);
for (let i = 0; i < randArr.length; i++) {
    if (randArr[i + 1] % 2 === 0 || randArr[1 - i] % 2 === 0) {
        console.log(randArr[i]);
    }
}

// Task 8
console.log('Task 8');

let Check = [100, 250, 50, 168, 120, 345, 188];
let avgCheck = 0;

for (let c of Check) {
    avgCheck += c;
}
avgCheck = avgCheck / Check.length;

console.log(`Середній чек в магазині ${avgCheck}`);


// Task 9
console.log('Task 9');

let randArrFive = [];
let newrandArrFive = [];

for (let i = 0; i < 12; i++) {
    randArrFive.push(Math.round(Math.random() * 12));
}
console.log(randArrFive);

for (let i = 0; i < randArrFive.length; i++) {
    newrandArrFive[i] = 5 * randArrFive[i];
}
console.log(newrandArrFive);

// Task 10
console.log('Task 10');

let diffThings = ['okten', true, 'javascript', {name: 'Ivan'}, 22, false, 567, 0, null, 34, undefined];
let numArr = [];


for (let thing of diffThings) {
    if (typeof thing === "number") {
        numArr.push(thing);
    }
}
console.log(diffThings);
console.log(numArr);
