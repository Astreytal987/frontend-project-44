#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicGame from '../../src/index.js';

let rules = 'Find the greatest common divisor of given numbers';

const twoRandomNumsFunction = () => {
  let oneRandomNum = Math.floor(Math.random() * 50) + 11;
  let twoRandomNum = Math.floor(Math.random() * 50) + 11;
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

console.log(logicGame(rules, twoRandomNumsFunction, correctAnswerFunction));
