// Common Function
function getInputNumber(promptText) {
    let num = NaN;

    while (isNaN(num)) {
        num = parseFloat(prompt(promptText));

        if (isNaN(num) || num === null) {
            console.log("Please provide a valid number.");
        }
    }

    return num;
}



//  Exercise 1 - Grade Calculator

let score = getInputNumber("Enter your score: ");
console.log(typeof score);

let grade = "";
if (score >= 90) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Obtained Grade: ", grade);


// Exercise 2 - Print Numbers in a Range

let num1 = getInputNumber("Enter the starting number: ");
let num2 = NaN
do {
    num2 = getInputNumber("Enter the ending number: ");
} while (num2 == num1);

for (let i = num1; i <= num2; i++) {
    console.log(i);
}


// Exercise 3 - Calculator Power

let num3 = getInputNumber("Enter the base number: ");
let num4 = getInputNumber("Enter the exponent number: ");

let results = 1;
for (let i = 1; i <= num4; i++) {
    results *= num3;
}

console.log("Answer: ", results);


// Exercise 4 - FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}