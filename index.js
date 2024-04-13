#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log('==============================================================}');
console.log(chalk.blue.bold("\t<<<Welcome to  *CodeWithMuneeb*  Currency-Converter>>>}"));
console.log('==============================================================}\n');
let currencyRate = {
    "USD Dollar": 1,
    "EUR Euro": 0.9,
    "JYP Yen": 113,
    "CAD Dollar": 1.3,
    "AUD Dollar": 1.65,
    "PKR Rupees": 280,
};
let usrAnswer = await inquirer.prompt([
    {
        name: "currencyFrom",
        type: "list",
        message: chalk.magenta("Select Currency you Convert From:\n"),
        choices: ["USD Dollar", "EUR Euro", "JYP Yen", "CAD Dollar", "AUD Dollar", "PKR Rupees",]
    },
    {
        name: "currencyTo",
        type: "list",
        message: chalk.magentaBright("Select Currency you Convert TO:\n"),
        choices: ["USD Dollar", "EUR Euro", "JYP Yen", "CAD Dollar", "AUD Dollar", "PKR Rupees",]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green.bold("\nType Amount to Convert:\n"),
    }
]);
// Perform currency conversion by using formula
let from_currency = currencyRate[usrAnswer.currencyFrom];
let to_currency = currencyRate[usrAnswer.currencyTo];
let usr_amount = usrAnswer.amount;
// Formula of conversoin currency
let baseAmount = usr_amount / from_currency;
let convertCurrency = baseAmount * to_currency;
console.log(`Convert Currency ${chalk.yellow.bold(convertCurrency.toFixed(2))}`);
