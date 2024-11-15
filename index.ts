import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter Last Number", type: "number", name: "lastNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },


]);

// Conditional statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.lastNumber);
} else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.lastNumber);
} else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.lastNumber);
} else if (answer.operators === "Division") {
    if (answer.lastNumber !== 0) {
        console.log(answer.firstNumber / answer.lastNumber);
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
}
