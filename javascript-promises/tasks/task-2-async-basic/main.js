const icons = ["🤔", "📦", "⬆️", "⬇️", "😥", "🥇"];

let tries = 1;

const numberToGuess = Math.floor(Math.random() * 11);
const game = async () => {
  while (tries <= 3) {
    const guessing = new Promise((resolve, reject) => {
      const userGuess = window.prompt("Ogadnij liczbę");
      console.log(`Podałeś liczbę: ${userGuess}`);
      console.log(`Myślę... ${icons[0]}${icons[0]}${icons[0]}`);
      setTimeout(() => {
        if (numberToGuess === +userGuess) {
          resolve();
        } else {
          reject(numberToGuess - userGuess);
        }
      }, 2000);
    });

    await guessing
      .then(() => {
        console.log(`Wygrana! ${icons[5]}`);
        tries = 4;
      })
      .catch((e) => {
        console.log(`Pudło ${icons[1]}`);
        if (tries === 3) {
          console.log(`Przegrana! ${icons[4]}`);
          tries = 4;
        } else {
          if (e > 0) {
            console.warn(`Za mała liczba ${icons[3]}`);
          } else {
            console.warn(`Za duża liczba ${icons[2]}`);
          }
        }
      });
    tries++;
  }
};

game();
5;
