#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);
console.log(answer);

if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "addition"){
    console.log(+ answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
    else if (answer.operator === "division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }else {
        console.log("please select valid operator");
    }
