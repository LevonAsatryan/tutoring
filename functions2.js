/*
    Նախադուսություններից հետո լինի կետ


    [1,2,3,4,5,6]
 */

function addFullStop(str) {
    if (typeof str !== 'string') {
        return null;
    }
    let arrStr = str.split('');
    if (arrStr[arrStr.length - 1] === '.') {
        return str;
    } else {
        arrStr.push('.');
        return arrStr.join('');
    }
}

let a = addFullStop(1234);
// console.log(a);

// arrays
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(addFullStop(1234));
console.log(addFullStop(null));
console.log(addFullStop('abcde   asbdhi;lasdglausy'));
console.log(addFullStop('abcde   asbdhi;lasdglausy.'));
