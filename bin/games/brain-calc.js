#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicGame from '../../src/index.js';

let rules = 'What is the result of the expression?';

const expressionFunction = () => {
  let signs = ['+', '*', '-'][Math.floor(Math.random() * 3)];
  let oneOperand = Math.floor(Math.random() * 50);
  let twoOperand = Math.floor(Math.random() * 50);

  let expression = `${oneOperand} ${signs} ${twoOperand}`;

  return expression;
};

const correctAnswerFunction = (expression) => {
  let correctAnswer = 0;
  const convertedToArray = expression.split(' ');
  switch (
    convertedToArray[1] //25 - 11 => [25,-,11]
  ) {
    case '+':
      correctAnswer = Number(convertedToArray[0]) + Number(convertedToArray[2]);
      break;

    case '-':
      correctAnswer = Number(convertedToArray[0]) - Number(convertedToArray[2]);
      break;

    case '*':
      correctAnswer = Number(convertedToArray[0]) * Number(convertedToArray[2]);
      break;

    default:
      console.log('Да как ты вообще это сделал.');
  }

  return correctAnswer.toString();
};

console.log(logicGame(rules, expressionFunction, correctAnswerFunction));
