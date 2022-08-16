// Write a function factorial () that takes a number as an argument and returns the factorial of the number.

//     Example:

// factorial(6);
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
// Assume only positive numbers will be given as an argument for the factorial() function.

const factorial = num => {
    let sum = 1
    for (let i = sum; i <= num; i++) {
        sum = sum * i
    }
    return sum
}

console.log(factorial(6));

// Write a function groceries() that takes an array of object literals of grocery items. 
// The function should return a string with each item separated by a comma except the 
// last two items should be separated by the word 'and'. Make sure spaces (' ') are 
// inserted where they are appropriate.

// Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

// Write function below
const groceries = arr => {
    const last = arr.length - 1
    const lastItem = arr[last].item
    let items = [];
    if (arr.length > 1) {
        for (let i = 0; i < last; i++) {
            items.push(arr[i].item)
        }
        let sentence = items.join(', ');

        return (sentence + ' and ' + lastItem)
    }
    else {
        return lastItem
    }
}

console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]))

console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]))

console.log(groceries([{ item: 'Cheese Balls' }]))

// Write a function subLength () that takes 2 parameters, a string and 
// a single character.The function should search the string for the two
// occurrences of the character and return the length between them 
// including the 2 characters.If there are less than 2 or more than 
// 2 occurrences of the character the function should return 0.

// Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0



// Write function below
const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            charCount++;
            if (charCount > 2) {
                return 0;
            }
            if (len == -1) {
                len = i;
            } else {
                len = i - len + 1
            }
        }
    }
    if (charCount < 2) {
        return 0;
    }

    return len;
};

