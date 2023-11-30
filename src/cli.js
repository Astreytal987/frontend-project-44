import readlineSync from 'readline-sync';

const namer = () => {
    const name = readlineSync.question('Мay I have your name? ')
    return name
}
export default namer