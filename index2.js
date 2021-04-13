//let, const
let a = 5;

let bool = false;

// control statements

if (!bool) {
    console.log('true')
} else {
    console.log('false')
}

// == , > , >= , <, <=, !=

if (a === '5') {
    console.log('a is 5');
} else {
    console.log('a is not 5');
}

// falsy values
// '', null, undefined, NaN, 0

a = 5;
if (a) {
    console.log(a);
} else {
    console.log('a is 0');
}

console.log('abc' / 5);
console.log(isNaN(0 / 0));
console.log(NaN === NaN);


if (a === 1) {
    //
} else if (a === 2) {

} else if (a === 3) {

}
// nonono
switch (a) {
    case 1: {
        // code
        break;
    }

    case 2: {
        // code
        break;
    }
}

// loop
/*
while, for, do while

    while(condition) {
        loop body
    }

    do {
        // loop body
    } while(condition);

    for(starting point; condition; step) {
        loop body
    }
 */
// ++i -> i = i + 1;
for (let i = 0; i < 100; ++i) {
    //console.log({i});
}

let i = 0;

while(i < 100) {
    console.log(i);
    ++i;
}
