#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getUserName } from '../src/cli.js';
import { generateRandomNumber } from '../src/index.js';

greetUser();

console.log('What is the result of the expression?');

const brainCalculator = () => {
    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();

        const operations = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let correctAnswer;

        switch (operation) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
        }

        console.log(`Question: ${num1} ${operation} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseFloat(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`Wrong answer! The correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${getUserName()}!`);
            return;
        }   
    }
    console.log(`Congratulations, ${getUserName()}!`);
};

brainCalculator();
