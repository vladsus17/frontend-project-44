#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser, getUserName } from '../src/cli.js';


greetUser();
console.log ('What number is missing in the progression?');

function makeProgression() {
    const firstNum = Math.floor(Math.random() * 10) + 1;
    const diff = Math.floor(Math.random() * 5) + 1;
    const long = Math.floor(Math.random() * 6) + 5;

    const progression = [];
    for (let i = 0; i < long; i++) {
        progression.push(firstNum + i * diff);
    } 
    
    return progression;
}

function hideNumber(progression) {
    const hiddenPosition = Math.floor(Math.random() * progression.length);
    const hiddenNum = progression[hiddenPosition];
    const hiddenProgression = [...progression];
    hiddenProgression[hiddenPosition] = '..';

    return { hiddenProgression, hiddenNum };


}

const brainProgression = () => {
    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {

        const progression = makeProgression();
        const { hiddenProgression, hiddenNum } = hideNumber(progression);

    
        console.log(`Question: ${hiddenProgression.join(' ')} `);
        const userAnswer = readlineSync.question('Your answer: ');

        if (parseFloat(userAnswer) === hiddenNum) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`Wrong answer! The correct answer was ${hiddenNum}.`);
            console.log(`Let's try again, ${getUserName()}!`);
            return;
        }   
        
    }
    console.log(`Congratulations, ${getUserName()}!`);
};

brainProgression();