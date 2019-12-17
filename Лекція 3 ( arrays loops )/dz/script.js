//-------------------------Task1---------------------------
console.log('------------------------Task1-------------------------');

let cars = [
    {
        company: 'Mersedes',
        power: 300,
        owner: {
            name: 'Viktor',
            age: 24,
            driveExp: 4
        },
        price: 50000,
        year: 2001
    },
    {
        company: 'Volvo',
        power: 220,
        owner: {
            name: 'Taras',
            age: 21,
            driveExp: 2
        },
        price: 32000,
        year: 1998
    },
    {
        company: 'Toyota',
        power: 270,
        owner: {
            name: 'Oleg',
            age: 27,
            driveExp: 6
        },
        price: 43000,
        year: 2007
    },
    {
        company: 'Audi',
        power: 320,
        owner: {
            name: 'Ivan',
            age: 24,
            driveExp: 5
        },
        price: 50000,
        year: 2001
    },
    {
        company: 'Nissan',
        power: 360,
        owner: {
            name: 'Andriy',
            age: 28,
            driveExp: 7
        },
        price: 38000,
        year: 2011
    },
    {
        company: 'Kia',
        power: 350,
        owner: {
            name: 'Inna',
            age: 22,
            driveExp: 1
        },
        price: 21000,
        year: 2012
    },
    {
        company: 'Mersedes',
        power: 290,
        owner: {
            name: 'Taras',
            age: 35,
            driveExp: 3
        },
        price: 59000,
        year: 2017
    },
    {
        company: 'Reno',
        power: 220,
        owner: {
            name: 'Galya',
            age: 23,
            driveExp: 5
        },
        price: 34000,
        year: 2016
    },
    {
        company: 'BMV',
        power: 390,
        owner: {
            name: 'Yura',
            age: 20,
            driveExp: 1
        },
        price: 67000,
        year: 2019
    },
    {
        company: 'Volvo',
        power: 470,
        owner: {
            name: 'Petro',
            age: 34,
            driveExp: 8
        },
        price: 35000,
        year: 2015
    },
    {
        company: 'Lamborgini',
        power: 550,
        owner: {
            name: 'Vasya',
            age: 19,
            driveExp: 0
        },
        price: 100000,
        year: 2018
    }
];

console.log(`Розмір автопарку - ${cars.length}`);

console.log(cars);

// підвищується ціна і потужність
for (let i = 0; i < cars.length; i += 2) {
    cars[i].power *= 1.1;
    cars[i].price *= 1.05;
    console.log(`Ціну ${cars[i].company} піднято до ${cars[i].price}, а потужність до ${cars[i].power}`)
}
//console.log(cars);

//перевірк водія на досвід
for (let car of cars) {
    if (car['owner'].driveExp < 5 && car['owner'].age > 25) {
        car['owner'].driveExp++;
        console.log(`Досвід ${car['owner'].name} збільшено до ${car['owner'].driveExp}`)
    }

}
//console.log(cars);

// Ціна всіх машин
let generalPrice = 0;
for (let car of cars) {
    generalPrice += car.price;
}

console.log(`Ціна автопарку - ${generalPrice}$`);

//-------------------------Task2---------------------------

console.log('------------------------Task2-------------------------');
console.log('-----1-----');


let arr = [1, 2, 2, 2, 2, 2, 5, 6, 8, 9, 10];
let key = 2;

let minIndex = -1;
let maxIndex = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
        if (minIndex === -1) {
            minIndex = i;
        }

        maxIndex = i;
    }
}

console.log(arr);
console.log(`Key ${key}: \nminIndex: ${minIndex} \nmaxIndex: ${maxIndex}`);


console.log('-----2-----');

let array = [2, 1, 7, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(array);


console.log('While:');
let iter = 0;
while (iter < array.length) {
    console.log(array[iter]);
    iter++;
}

console.log('\nFor:');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

}

console.log('\nWhile - непарні:');
iter = 1;
while (iter < array.length) {
    console.log(array[iter]);
    iter += 2;
}

console.log('\nFor - непарні:');
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);

}

console.log('\nWhile - парні:');
iter = 0;
while (iter < array.length) {
    console.log(array[iter]);
    iter += 2;
}

console.log('\nFor - парні:');
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);

}


console.log('\nСлово okten, у числах кратних 3:');
console.log(array);
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
}
console.log(array);


console.log('\nМасив в зворотньому порядку:');
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);

}


console.log('\nЗавдання 1-7 з виводом у зворотньому порядку:');


console.log('While - у зворотньому порядку:');
iter = array.length - 1;
while (iter >= 0) {
    console.log(array[iter]);
    iter--;
}

console.log('\nFor - у зворотньому порядку:');
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);

}

console.log('\nWhile - непарні - у зворотньому порядку:');
iter = array.length - 2;
while (iter >= 0) {
    console.log(array[iter]);
    iter -= 2;
}

console.log('\nFor - непарні - у зворотньому порядку:');
for (let i = array.length - 2; i >= 0; i -= 2) {
    console.log(array[i]);

}

console.log('\nWhile - парні - у зворотньому порядку:');
iter = array.length - 1;
while (iter >= 0) {
    console.log(array[iter]);
    iter -= 2;
}

console.log('\nFor - парні - у зворотньому порядку:');
for (let i = array.length - 1; i >= 0; i -= 2) {
    console.log(array[i]);
}


let myArr = [];

let tmpNum = 0;
for (let i = 0; i < 50; i++) {
    myArr.push(tmpNum);

    tmpNum += 2;
}
console.log(myArr);

tmpNum = 1;
for (let i = 0; i < 50; i++) {
    myArr.push(tmpNum);

    tmpNum += 2;
}
console.log(myArr);










