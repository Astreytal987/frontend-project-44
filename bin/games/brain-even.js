#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressionFunction = () => {
  const randomNum = Math.floor(Math.random() * 50);
  return randomNum;
};

const correctAnswerFunction = (randomNum) => {
  let correctAnswer = '';
  if (randomNum % 2 === 0) {
    correctAnswer = 'yes';
  }

  if (randomNum % 2 !== 0) {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

console.log(logicGame(rules, expressionFunction, correctAnswerFunction));
