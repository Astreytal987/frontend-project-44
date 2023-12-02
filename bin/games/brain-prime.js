#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const expressionFunction = () => {
  const randomNum = Math.floor(Math.random() * 8) + 2;
  return randomNum;
};

const isPrimeNumberFunction = (randomNum) => {
  let correctAnswer = 'yes';
  for (let i = 2; i < randomNum; i+= 1) {
    if (randomNum % i === 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

console.log(logicGame(rules, expressionFunction, isPrimeNumberFunction));
