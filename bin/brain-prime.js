#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getUserName } from '../src/cli.js';
import { generateRandomNumber } from '../src/index.js';

greetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainPrime = () => {

    let correctAnswersCount = 0;

    const isPrime = (number) => {
        let divisor = 2;
        if (number <= 1) return false;
        while (divisor * divisor <= number) {
            if (number % divisor === 0) return false;
                divisor += 1; 
        } return true;
    };

    while (correctAnswersCount < 3) {
        const randomNum = generateRandomNumber();
        console.log(`Question: ${randomNum} `);
        const userAnswer = readlineSync.question('Your answer: ')
        const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
        console.log(`Correct!`);
        correctAnswersCount += 1;
        } else {
        console.log(`Wrong answer! The correct answer was ${correctAnswer}.`);
        console.log(`Let\'s try again, ${getUserName()}!`);
        return;
    }   
    }
    console.log(`Congratulations, ${getUserName()}!`);
};

brainPrime();

