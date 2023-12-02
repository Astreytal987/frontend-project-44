#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'What is the result of the expression?';

const expressionFunction = () => {
  const signs = ['+', '*', '-'][Math.floor(Math.random() * 3)];
  const oneOperand = Math.floor(Math.random() * 50);
  const twoOperand = Math.floor(Math.random() * 50);

  const expression = `${oneOperand} ${signs} ${twoOperand}`;

  return expression;
};

const correctAnswerFunction = (expression) => {
  let correctAnswer = 0;
  const convertedToArray = expression.split(' ');
  switch (
    convertedToArray[1]
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
