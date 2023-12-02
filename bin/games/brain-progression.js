#!/usr/bin/env node
import logicGame from '../../src/index.js';

const rules = 'What number is missing in the progression?';
let missingElementForAnswer;
const progressionFunction = () => {
  const progression = [];
  let startprogression = Math.floor(Math.random() * 20);
  const randomStep = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < 10; i += 1) {
    progression.push(startprogression);
    startprogression += randomStep;
  }
  const missingElement = Math.floor(Math.random() * progression.length) - 1;

  missingElementForAnswer = progression.splice(missingElement, 1, '..');

  return progression.join(' ');
};

const correctAnswerFunction = () => missingElementForAnswer.join();


console.log(logicGame(rules, progressionFunction, correctAnswerFunction));
