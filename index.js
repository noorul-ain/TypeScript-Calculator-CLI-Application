import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter Last Number", type: "number", name: "lastNumber" },
    { message: "Select One of the operator to perform action", type: "list", name: "firstNumber",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
console.log(answer);
