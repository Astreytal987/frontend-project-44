import readlineSync from 'readline-sync';

const getName = (main) => {
    let name
  if (!main) {
    name = readlineSync.question('Мay I have your name? ');
  } else {
    name = readlineSync.question('/Мay I have your name?/ '); 
  }
  return name;
};
export default getName;
