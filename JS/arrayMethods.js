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
