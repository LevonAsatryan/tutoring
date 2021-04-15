// կարդալ պատմել what is JavaScript, what is NodeJS, Type cohersion in js, Hoisting in js 
// անգիրներ HTML5/CSS3, position: , display: , grid layout, flex layout
// array functions, string functions, arrow functions


// Variable type number, string, boolean, null, undefined, NaN, array, object
// Loosely typed

//strings

var s = 'asdasd';

// boolean

var bool = true; //false

// falsy values
// 0, '', null, undefined, NaN

var obj = {};

if (s) {
    // if true
} else {
    //if not true
}

// conditional operators ==, ===, !=, !==, >, <, >=, <=

var a = 5;
var b = 6;

var booleanValueOfa = !!a; // a -> true, !a -> false, !!a -> true

if (a === 1) {
    console.log('Im here');
} else if (a === 2) {

} else if (a === 3) {

}

// Try to avoid 
// switch / case, 
switch (a) {
    case 1:
        {
            break;
        }
    case 2:
        {
            break;
        }
    case 3:
        {
            break;
        }

    default:
        {
            break;
        }
}

// loops
// while, do while, for
/*
    while(condition){
        // code
        // runs until condition is falsy
        // checks condition, then runs the code
    }

    do {
        // runs the code, then checks condition
    } while(condition);

    for (starting point; condition; step) {
        // runs from starting point, until condition is met, and changing with step
    }
*/

// +=   --->  index = index + 4;  *=, /*, -=
for (let index = 0; index < 50; index += 4) {
    // code
}

let num = 5;
while (num < 126) {
    // destructuring
    console.log({ num });
    num *= 5;
}