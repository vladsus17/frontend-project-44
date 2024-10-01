#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getUserName } from '../src/cli.js';
import { generateRandomNumber } from '../src/index.js';

greetUser();
console.log ('Find the greatest common divisor of given numbers.');

const brainGcd = () => {
    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();

        let greatestDivisor = Math.min(num1, num2);  
        let correctAnswer;

        while (greatestDivisor > 0) {
            if (num1 % greatestDivisor === 0 && num2 % greatestDivisor === 0) {
                correctAnswer = greatestDivisor;
                break;
            } greatestDivisor -= 1
        }

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseFloat(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`Wrong answer! The correct answer was ${correctAnswer}.`);
            console.log(`Let\'s try again, ${getUserName()}`);
            return;
        }   
    } 
    console.log(`Congratulations, ${getUserName()}!`);
};

brainGcd();
