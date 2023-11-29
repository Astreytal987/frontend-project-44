import readlineSync from 'readline-sync';
import namer from './cli.js';

const logicgame = (rules, questionFunction, correctAnswerFunction) => {
  console.log('Welcome to the Brain Games!');

  const name = namer();
  console.log(`Hello, ${name}!`);
  console.log(rules);
  
  for (let i = 0; i < 3; i += 1) {
    let question = questionFunction();
    console.log(`Question: ${question}`);
    const typedResponse = readlineSync.question('Your answer: ');

    if (correctAnswerFunction(question) !== typedResponse) {
      return `'${typedResponse}' is wrong answer ;(. Correct answer was '${correctAnswerFunction(question)}'.\nLet\'s try again, ${name}!`;
    }
    console.log('Correct!');

    if (i === 2) {
      return `Congratulations, ${name}!`;
    }
  }
};

export default logicgame;
