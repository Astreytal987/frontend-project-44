// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicgame from "../../src/index.js";

let rules = "What is the result of the expression?"; //сюда пиши правила

const questionf = () => {
  // сюда вопрос

  let signs = ["+", "*", "-"][Math.floor(Math.random() * 3)];
  let oneper = Math.floor(Math.random() * 50);
  let twooper = Math.floor(Math.random() * 50);

  let qwestion = `${oneper} ${signs} ${twooper}`;

  return qwestion;
};

const answerdonef = (question) => {
  //сюда правильный ответ
  let trueAnswer = 0;
  //code
  const mass = question.split(" ");
  switch (
    mass[1] //25 - 11
  ) {
    case "+":
      trueAnswer = Number(mass[0]) + Number(mass[2]);
      break;

    case "-":
      trueAnswer = Number(mass[0]) - Number(mass[2]);
      break;

    case "*":
      trueAnswer = Number(mass[0]) * Number(mass[2]);
      break;

    default:
      console.log("Да как ты вообще это сделал.");
  }

  //
  return trueAnswer.toString();
};

console.log(logicgame(rules, questionf, answerdonef));
