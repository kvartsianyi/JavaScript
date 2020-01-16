//зробити алгоритм який робить deep copy для обєкта рекурсивно
console.log('-------------Task1-------------');

let user = {
    name: 'Yura',
    arr: [{name: 'el1'}, {name: 'el2'}],
    arr1: [1, 2, [1, 3, {name: 'deep'}], 3],
    obj: {
        name: 'object',
        yyy: {zzz: '123'}
    },
    age: 20
}

//------------------------------------------------------------

let arrCopy = (arr) => {
    let newArr = [];

    for (let el of arr) {
        if (typeof el === "object") {
            if (Array.isArray(el)) {
                newArr.push(arrCopy(el));
            } else
                newArr.push(deepCopy(el));
        } else
            newArr.push(el);
    }

    return newArr;
};

let deepCopy = objToCopy => {
    let newObj = {};

    for (let value in objToCopy) {
        if (typeof objToCopy[value] === "object") {
            if (Array.isArray(objToCopy[value])) {
                newObj[value] = arrCopy(objToCopy[value]);
            } else
                newObj[value] = deepCopy(objToCopy[value]);
        } else {
            newObj[value] = objToCopy[value];
        }
    }

    return newObj;
};

let user1 = deepCopy(user);

//console.log(user);
//console.log(user1);
console.log('----------------Початковий об`єкт----------------');

user1.name = 'Vitya';
user1.obj.name = 'Vasya';
user1.obj.yyy.zzz = 'Ivan';
user1.arr[0].name = 'zzz';
user1.arr[1].name = 'yyy';


console.log(user);
console.log('----------------Клонований об`єкт----------------');
console.log(user1);


//зробити аналог flat який ми брали, але без flat
console.log('-------------Task2-------------');

let flat = (arr) => {
    let newArr = [];

    for (let el of arr) {
        if (typeof el === 'object') {
            if (Array.isArray(el)) {
                let subArr = flat(el);
                newArr.push(...subArr);
            } else {
                newArr.push(deepCopy(el));
            }
        } else{
            newArr.push(el);
        }
    }

    return newArr;
};

let arr = [1, [1, 3, [5,[3,[2]]], {name: 'Joker', arr: [1,2,{name: 'zzz'}]}],'str',false];
let flatRes = flat(arr)

console.log(arr);
console.log(flatRes);



// closure

function increment() {
    let x = 0;
    let y = 0;


    // функція, що повертається, ссилаєтся на змінні функції, що відпрацювала
    return  function () {
        return [++x, --y];
    }
}


let incr = increment();
console.log(incr());
console.log(incr());
console.log(incr());
console.log(incr());


