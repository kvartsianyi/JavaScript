// Зробити свій розпоряжок дня.
//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте
// - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант,
// що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
// Або йдучи на обід ви забули гаманець і лишились голодні.

// Трьома методами зробити
// Колбек хел, асинх, проміс

// console.log('-----------Callback Hell-----------');
//
// function wakeUp(isWakeUp, callback) {
//     setTimeout(() => {
//         isWakeUp ? callback(null, 'Good morning!') : callback('You are fired from work!', null);
//     }, 2000);
// }
//
// function eat(isEat, callback) {
//     setTimeout(() => {
//         isEat ? callback(null, 'Bon appetit!') : callback('You died!', null);
//     }, 1000);
// }
//
// function goToWork(isRoadClear, callback) {
//     setTimeout(() => {
//         isRoadClear ? callback(null, 'I`m at work!') : callback('I was late for work!', null);
//     }, 3000);
// }
//
// function coffeeBreak(isBreak, callback) {
//     setTimeout(() => {
//         isBreak ? callback(null, 'Delicious coffee!') : callback('I`m tired!', null);
//     }, 500);
// }
//
// function goHome(isRoadClear, callback) {
//     setTimeout(() => {
//         isRoadClear ? callback(null, 'I`m home!') : callback('I`m in the mash!', null);
//     }, 3000);
// }
//
// function code(isElectricity, callback) {
//     setTimeout(() => {
//         isElectricity ? callback(null, 'Codes...') : callback('I can`t! No electricity!', null);
//     }, 2000);
// }
//
// function watchFilm(isGoodFilm, callback) {
//     setTimeout(() => {
//         isGoodFilm ? callback(null, 'Film is good!') : callback('There are no good films!', null);
//     }, 5000);
// }
//
// function sleep(isPillow, callback){
//     setTimeout(() => {
//         isPillow ? callback(null, 'Sleep...') : callback('I can`t sleep without pillow!', null);
//     }, 2000);
// }
//
//
// // callback hell
//
// wakeUp(true, (err, val) => {
//     console.log('Wake up:');
//     if (err !== null) {
//         console.log(err)
//     } else {
//         console.log(val);
//         eat(true, (err, val) => {
//             console.log('Eat:');
//             if (err !== null) {
//                 console.log(err)
//             } else {
//                 console.log(val);
//                 goToWork(true, (err, val) => {
//                     console.log('Go to work:');
//                     if (err !== null) {
//                         console.log(err)
//                     } else {
//                         console.log(val);
//                         coffeeBreak(true, (err, val) => {
//                             console.log('Coffee break:');
//                             if (err !== null) {
//                                 console.log(err)
//                             } else {
//                                 console.log(val);
//                                 eat(true, (err, val) => {
//                                     console.log('Eat lunch:');
//                                     if (err !== null) {
//                                         console.log(err)
//                                     } else {
//                                         console.log(val);
//                                         goHome(true, (err, val) => {
//                                             console.log('Go home:');
//                                             if (err !== null) {
//                                                 console.log(err)
//                                             } else {
//                                                 console.log(val);
//                                                 eat(true, (err, val) => {
//                                                     console.log('Eat supper:');
//                                                     if (err !== null) {
//                                                         console.log(err)
//                                                     } else {
//                                                         console.log(val);
//                                                         code(true, (err, val) => {
//                                                             console.log('Code:');
//                                                             if (err !== null) {
//                                                                 console.log(err)
//                                                             } else {
//                                                                 console.log(val);
//                                                                 watchFilm(true, (err, val) => {
//                                                                     console.log('Watch film:');
//                                                                     if (err !== null) {
//                                                                         console.log(err)
//                                                                     } else {
//                                                                         console.log(val);
//                                                                         sleep(true, (err, val) => {
//                                                                             console.log('Sleep:');
//                                                                             if (err !== null) {
//                                                                                 console.log(err)
//                                                                             } else {
//                                                                                 console.log(val);
//                                                                             }
//                                                                         });
//                                                                     }
//                                                                 });
//                                                             }
//                                                         });
//                                                     }
//                                                 });
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });


console.log('-----------Promise-----------');

function wakeUp(isWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isWakeUp ? resolve('Good morning!') : reject('You are fired from work!');
        }, 2000);
    });
}

function eat(isEat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isEat ? resolve('Bon appetit!') : reject('You died!');
        }, 1000);
    });
}

function goToWork(isRoadClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isRoadClear ? resolve('I`m at work!') : reject('I was late for work!');
        }, 3000);
    });
}

function coffeeBreak(isBreak) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isBreak ? resolve('Delicious coffee!') : reject('I`m tired!');
        }, 500);
    });
}

function goHome(isRoadClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isRoadClear ? resolve('I`m home!') : reject('I`m in the mash!');
        }, 3000);
    });
}

function code(isElectricity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isElectricity ? resolve('Codes...') : reject('I can`t! No electricity!');
        }, 2000);
    });
}

function watchFilm(isGoodFilm) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isGoodFilm ? resolve('Film is good!') : reject('There are no good films!');
        }, 5000);
    });
}

function sleep(isPillow) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isPillow ? resolve('Sleep...') : reject('I can`t sleep without pillow!');
        }, 2000);
    });
}



// promise
//wakeUp => eat => goToWork => coffeeBreak => eat => goHome => eat => code => watchFilm => sleep

wakeUp(false)
    .then(value => {
        console.log(value);
        eat(true)
            .then(value => {
                console.log(value);
            }).catch(reason => console.log(reason));
    }).catch(reason => console.log(reason));















