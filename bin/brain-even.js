#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getUserName } from '../src/cli.js';

greetUser();
console.log ('Answer "yes" if the number is even, otherwise answer "no".');

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function isEven(number) {
  return number % 2 === 0;
}

function brainEvenGame() {
    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const randomNumber = generateRandomNumber();
        console.log(`Question: ${randomNumber}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${getUserName()}!`);
            return; 
        }
    }

    console.log(`Congratulations, ${getUserName()}!`);
};

brainEvenGame();
