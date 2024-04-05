import readlineSync from 'readline-sync';

/**
 * Приветствие пользователя по имени
 * @returns {undefined}
 */
const startMainGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default startMainGame;