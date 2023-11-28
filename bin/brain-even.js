import readlineSync from 'readline-sync';

const evengame = () => {
    const name = readlineSync.question('Мay I have your name? ')
    console.log('Answer "yes" if the number is even, otherwise answer "no".') //hello part

    // start
    for (let i = 0; i < 3; i += 1) { //раунды игры
        const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1; //рандомное число от 1 до 20
        let trueAnswer = ""

        for (let i = 0; i < 1; i += 1) { //передала верный ответ в 10 строчку
            if (randomNum % 2 == 0) {
                trueAnswer = "yes"
            } //возможно тут ошибка

            if (randomNum % 2 !== 0) {
                trueAnswer = "no"
            } //возможно тут ошибка
        }
        
        console.log(`Question: ${randomNum}`)
        const answer = readlineSync.question('Your answer: ') //узнали ответ игрока
        
        if (trueAnswer !== answer) { //возможно ошибка  
            const loser = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet\'s try again, ${name}!`);
            return loser
        }
        console.log("Correct!")
    }
    const result = console.log(`Congratulations, ${name}!`)

    // end 

    return result //end
}
export default evengame
console.log(evengame())
