#!/usr/bin/env node
// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicGame from '../../src/index.js';

let rules = 'What number is missing in the progression?';
let missingElementForAnswer;
const progressionFunction = () => {
  let progression = [];
  let startprogression = Math.floor(Math.random() * 20);
  let randomStep = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < 10; i = i + 1) {
    progression.push(startprogression);
    startprogression = startprogression + randomStep;
  }
  let missingElement = Math.floor(Math.random() * progression.length) - 1;

  missingElementForAnswer = progression.splice(missingElement, 1, '..');

  return progression.join(' ');
};

const correctAnswerFunction = () => {
  return missingElementForAnswer.join();
};

console.log(logicGame(rules, progressionFunction, correctAnswerFunction));
