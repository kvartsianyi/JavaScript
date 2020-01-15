//'ab'.palindrom() -> console.log('abba');

String.prototype.palindrom = function() {
    let reverseStr = this.toString().split('').reverse().join('');

    return this + reverseStr;
};

let str = '001'.palindrom();
console.log(str);


// Дано предложение. Напишите функцию, которая возвращает количество слов, которые начинаются с большой буквы.
function wordCounter(str) {
    let wordsCount = 0;
    let strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i] > 'A' && strArr[i] < 'Z')
            if (i === 0)
                wordsCount++;
            else if(strArr[i-1] === ' ')
                wordsCount++;
    }

    return wordsCount;
}

console.log(wordCounter('sDgo Dfhgid Sgjoksdf'));;