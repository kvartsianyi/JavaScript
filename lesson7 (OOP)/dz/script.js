// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров
// 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
//     создать 10 различных экземпляров

// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин

// 3. взять за основу класс юзера из задания про классы добавить при помощи prototype 4 любых метода.
//
//     Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// - выводит только парные елементы
// - выводит только элементы с парными индексами


// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров

console.log('------Task1------');

class Car {
    constructor(brand, year, mileage, power, price) {
        this.brand = brand;
        this.year = year;
        this.mileage = mileage;
        this.power = power;
        this.price = price;
    }

    info() {
        console.log(`Car info - brand: ${this.brand} year: ${this.year} mileage: ${this.mileage} engine power: ${this.power} price: ${this.price}`);
    }
}

let car = new Car('bmw', 2001, 50000, 300, 2000);
car.info();

// Створюю автопарк з 10 машин
let brands = ['bmw', 'audi', 'lada', 'volvo', 'nissan'];
let carsCollection = [];
let rand = (start, range) => Math.round(Math.random() * range) + start; // генераія рандомного числа

while (carsCollection.length < 10) {
    let car = new Car(brands[Math.round(Math.random() * (brands.length
        - 1))], rand(1995, 20), rand(1000, 90000), rand(120, 250), rand(8000, 24000));
    carsCollection.push(car);
}

carsCollection.forEach(value => {
    console.log('----------------');
    value.info();
});

// 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
//     создать 10 различных экземпляров

console.log('------Task2------');

class SuperCar extends Car {
    constructor(brand, year, mileage, power, price, spoiler, toning, tankCapacity) {
        super(brand, year, mileage, power, price);
        this.spoiler = spoiler;
        this.toning = toning;
        this.tankCapacity = tankCapacity;
    }
}

let superCar = new SuperCar('lada', 1998, 90353, 340, 3000, false, true, 200)
superCar.info();

let superCarsCollection = [];

while (superCarsCollection.length < 10) {
    let superCar = new SuperCar(brands[Math.round(Math.random() * (brands.length
        - 1))], rand(1995, 20), rand(1000, 90000), rand(120, 250), rand(8000, 24000), !!Math.round(Math.random()), !!Math.round(Math.random()), rand(50, 300));
    superCarsCollection.push(superCar);
}

console.log(superCarsCollection);

// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин

// 3. взять за основу класс юзера из задания про классы добавить при помощи prototype 4 любых метода.
//
//     Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// - выводит только парные елементы
// - выводит только элементы с парными индексами
