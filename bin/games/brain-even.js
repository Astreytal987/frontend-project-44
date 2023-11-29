// тут просто исполняймый файл с правилами вопросами и ответами а также вычисление случайного вопроса и его ответ
import logicgame from "../../src/index.js";

let rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const questionf = () => {
let qwestion = Math.floor(Math.random() * 50); //рандомное число от 1 до 50
return qwestion
}

const answerdonef = (question) => {
let trueAnswer = ""
if (question % 2 == 0) {
    trueAnswer = "yes"
} //

if (question % 2 !== 0) {
    trueAnswer = "no"
} //
return trueAnswer
}

console.log(logicgame(rules, questionf, answerdonef))//ещё предстоит импортировать
