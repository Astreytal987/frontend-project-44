import readlineSync from 'readline-sync';

const namer = () => {
    const name1 = readlineSync.question('Мay I have your name? ')
    return name1
}
export default namer