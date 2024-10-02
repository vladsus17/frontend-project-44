import readlineSync from 'readline-sync';

let userName = '';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getUserName = () => {
  return userName;
};
