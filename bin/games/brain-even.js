#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicGame from '../../src/index.js';

let rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressionFunction = () => {
  let randomNum = Math.floor(Math.random() * 50);
  return randomNum;
};

const correctAnswerFunction = (randomNum) => {
  let correctAnswer = '';
  if (randomNum % 2 == 0) {
    correctAnswer = 'yes';
  }

  if (randomNum % 2 !== 0) {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

console.log(logicGame(rules, expressionFunction, correctAnswerFunction));
