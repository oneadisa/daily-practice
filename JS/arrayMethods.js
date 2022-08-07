function reverseArrayFunc(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // return array.map((item) => {
    reversedArray.push(arr[i]);
    // })
  }
  return reversedArray;
}

const reverseArray = (arr) => {
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.unshift(arr[i]);
    }
    return reversedArray;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArrayFunc(sentence));
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Write your code here:

const greetAliens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
};

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 


// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Write your code here:

const convertToBaby = (arr) => {
    let babyAnimals = [];
    for (let i = 0; i < arr.length; i++) {
        babyAnimals.push(`baby ${arr[i]}`);
    }
    return babyAnimals;
};

function convertToBabyMap (arr) {
    return arr.map((animal) =>
        `baby ${animal}`
    )
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBabyMap(animals))
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    // The 'outer' for loop:
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];

        // The 'inner' while loop:
        // We needed to create a new variable!
        let j = 1;
        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers)) 

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
    arr.forEach(politelyDecline)
}

/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
    arr.forEach(e => {
        console.log(`Ok, I guess I will eat some ${e}.`)
    })
}

/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/


// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

const numbers1 = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:

const squareNums = (arr) => arr.map(num =>
    num * num
);
;
console.log(squareNums(numbers1));

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Write your code here:
const shoutGreetings = arr =>
    arr.map((item) => `${item.toUpperCase()}!`)


// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Write your code here:

function sort (a, b) {
    return b - a;
}

const sortYears = (arr, dort) => arr.sort(sort);

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
