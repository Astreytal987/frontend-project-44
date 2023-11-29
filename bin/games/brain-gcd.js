#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicgame from '../../src/index.js';

let rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const expressionFunction = () => {
  let oneRandomNum = Math.floor(Math.random() * 50) + 1;
  let twoRandomNum = Math.floor(Math.random() * 50) + 1;
  let twoRandomNums = `${oneRandomNum} ${twoRandomNum}`;
  return twoRandomNums;
};

const correctAnswerFunction = (twoRandomNums) => {
  let correctAnswer = 0;
  const convertedToArray = twoRandomNums.split(' ');
  while (convertedToArray[0] != convertedToArray[1]) {
    if (convertedToArray[0] > convertedToArray[1]) {
      convertedToArray[0] = convertedToArray[0] - convertedToArray[1];
    } else {
      convertedToArray[1] = convertedToArray[1] - convertedToArray[0];
    }
  }
  correctAnswer = convertedToArray[0];
  return correctAnswer.toString();
};

console.log(logicgame(rules, expressionFunction, correctAnswerFunction));
