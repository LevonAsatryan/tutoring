/*
    function expressions

    let appendSpaceAfterString = function(str) {
    }

    // arrow function
    // TODO read later
*/


// function initialization
function appendCommaAfterString(str) {
    // checks if the type of argument is a string
    if (typeof str !== 'string') {
        return;
    }
    // create an array with characters of the string
    let arr = str.split('');

    // check if the last character is a comma
    if (arr[arr.length - 1] === ',') {
        return str;
    } else {
        // pushes a value at the END of the array
        arr.push(',');
        // return array value as a joined string
        return arr.join('');
    }
}


console.info(appendCommaAfterString(''));
console.info(appendCommaAfterString('asd,'));
console.info(appendCommaAfterString('asd'));
console.info(appendCommaAfterString(null));
console.info(appendCommaAfterString(25));

// forEach, map, reduce, find, every, etc.... all work with callback functions
// Callback functions
function notCallback(callback, num) {
    if (num < 5) {
        callback();
    }
}

function helloPrinter() {
    console.info('Hello');
}

notCallback(helloPrinter, 4);


const arr = [1, 2, 3];


arr.forEach(function(item, index, arr2) {
    console.info({ item, index, arr2 });
});

for (item of arr) {
    console.info(item);
}


// [1, 2, 3] .length = 3, last index = 2
// accessing last item arr[arr.length - 1]
// let arr = [1,2,3];  arr.join(''); --> returns '123';