import readlineSync from 'readline-sync';
import namer from './cli.js';

const logicgame = (rules, questionf, trueAnswerf) => {
    console.log("Welcome to the Brain Games!")

    const name = namer() //запрос имени тоже
    console.log(`Hello, ${name}!`)
    console.log(rules) //правила надо импортировать 
    // start
    for (let i = 0; i < 3; i += 1) { //раунды игры неизменны их 3
        let questi = questionf()
        console.log(`Question: ${questi}`) // задаём вопрос
        const answer = readlineSync.question('Your answer: ') //узнали ответ игрока
        
        if (trueAnswerf(questi) !== answer) { //проиграл игру
            return (`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswerf(questi)}'.\nLet\'s try again, ${name}!`);
        }
        console.log("Correct!")
        
        if (i === 2) {
            return (`Congratulations, ${name}!`) //выйграл игру
        }
    }
}

export default logicgame
    