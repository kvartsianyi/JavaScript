//Codewars Javascript tasks

// function removeZeros(array) {
//     let count = 0;
//     let i = 0;
//
//     while (i < array.length - count){
//         if(array[i] === 0 || array[i] === '0'){
//             let zero = array[i];
//
//             for (let j = i; j < array.length - 1; j++) {
//                 array[j] = array[j+1];
//             }
//
//             array[array.length - 1] = zero;
//
//             count++;
//             i = 0;
//         } else {
//             i++;
//         }
//
//         //console.log(array);
//     }
//
//     return array;
// }
//
// console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));

function jumpingNumber(n){
    if(n < 10)
        return 'Jumping!!';
    else {
        let flag = true;
        n = n.toString().split('');

        for (let i = 1; i < n.length; i++) {
            if(+n[i-1] - +n[i] !== 1 && +n[i-1] - +n[i] !== -1){
                flag = false;
                break;
            }
        }

        return flag ? 'Jumping!!' : 'Not!!';
    }
}

console.log(jumpingNumber(98));
