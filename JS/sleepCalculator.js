const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 8;
            break;
        case "wednesday":
            return 8;
            break;
        case "thursday":
            return 8;
            break;
        case "friday":
            return 8;
            break;
        case "saturday":
            return 8;
            break;
        case "sunday":
            return 8;
            break;
        default:
            return 0;
    }
};
const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got more sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log(
            "You got " +
            (idealSleepHours - actualSleepHours) +
            " hour(s) less sleep than you needed this week. Get some rest."
        );
    }
};

calculateSleepDebt();
console.log(getSleepHours());
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
