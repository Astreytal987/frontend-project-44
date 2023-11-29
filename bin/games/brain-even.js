#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicgame from '../../src/index.js';

let rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressionFunction = () => {
  let randomNum = Math.floor(Math.random() * 50); //рандомное число от 1 до 50
  return randomNum;
};

const correctAnswerFunction = (randomNum) => {
  let correctAnswer = '';
  if (randomNum % 2 == 0) {
    correctAnswer = 'yes';
  } //

  if (randomNum % 2 !== 0) {
    correctAnswer = 'no';
  } //
  return correctAnswer;
};

console.log(logicgame(rules, expressionFunction, correctAnswerFunction));
