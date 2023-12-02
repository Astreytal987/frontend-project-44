#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicGame from '../../src/index.js';

let rules = "Answer 'yes' if given number is prime. Otherwise answer 'no.";

const expressionFunction = () => {
  let randomNum = Math.floor(Math.random() * 8) + 2; //рандомное число от 1 до 50
  return randomNum;
};

const isPrimeNumberFunction = (randomNum) => {
  let correctAnswer = 'yes';
  for (let i = 2; i < randomNum; i++) {
    if (randomNum % i == 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

console.log(logicGame(rules, expressionFunction, isPrimeNumberFunction));
