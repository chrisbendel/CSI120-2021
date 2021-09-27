// C++
// int i = 0;
// float x = 1.9;

// JS
let i = 0;
const x = 1.9;
const word = "test";

let doSomething = () => {
    let y = 5;
    let z = x + y;

    let doSomethingInside = () => {
        // has access to Y and Z
        let a = 15;
        var x = 5;
    }

    let finalAnswer = z + a;
}

// y and z are undefined


let emptyArray = [];

// C++
// int bar [5] = { 10, 20, 30 };

let bar = [10, 20, "test"];
let number = bar[0];
bar[1] // 20
bar[2] // "test"


let myName = "Chris";

let s1 = "a string don't do it";
let s2 = 'a string';
// This is the best
let s3 = `a string ${myName}`;
let s4 = "a string" + " " + myName;

let isTired = true;
let isHappy = false;

let multiDimensional = [
    ['x', 'o', 'x'],
    ['_', '_', '_'],
    ['_', 'o', '_']
];

let anObject = {
    key: 'value'
};

let maurice = {
    name: 'Maurice',
    age: 19,
    dob: new Date('4/30/2002'),
    address: {
        street: '123 Something Ave.',
        state: 'KY',
        zip: '123456',
        test: {
            a: 'b'
        }
    }
};

maurice.name;
let theInput = "name";
maurice[theInput];
maurice.theInput
maurice.age;
maurice.address.state;

let arrayOfObjects = [
    { name: "Chris", age: 28 },
    { name: "Maurice", age: 19 }
];

arrayOfObjects[0].name;

let text = "something";
text += " else";
text = text + " else";


let num1 = 1;
let num2 = "1";

num1 == num2; // true
num1 === num2; // true

if (num == num2) {
    console.log('same');
} else if (!!false) {
    console.log('false');
} else if (!!true) {
    console.log('true');
} else {
    console.log('wtf');
}

let fruits = ["apple", "banana", "peach", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

if (5 <= 7) {

} else if (10 >= 15) {

}

let someFunction = (arg1) => {
    console.log('in the function');
};

let someFunction1 = function(arg1) {
    console.log('in the function');
};


let fruits = ["apple", "banana", "peach", "orange"];
for (let i = 0; i < fruits.length; i++) {
    let theFruit = fruits[i];
    console.log(theFruit);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

let printFruit = (fruit) => {
    console.log(fruit);
}
fruits.forEach(printFruit);

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.map(fruit => {

});

fruits.filter(fruit => {
    return fruit == "Banana";
});

fruits.find(fruit => {
    return fruit == "Banana";
});

for (let i = 0; i < fruits.length; i++) {
    let theFruit = fruits[i];
    if (theFruit == "Banana") {
        return true;
    }
}