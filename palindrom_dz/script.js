//'ab'.palindrom() -> console.log('abba');

String.prototype.palindrom = function() {
    let reverseStr = this.toString().split('').reverse().join('');

    return this + reverseStr;
};

let str = '001'.palindrom();
console.log(str);