const playerPaper = document.getElementById('playerPaper');
const playerRock = document.getElementById('playerRock');
const playerScissor = document.getElementById('playerScissor');

const imagePlayerChoosed = document.getElementById('imageChoosed');
const imageComChoosed = document.getElementById('imageComChoosed');

const computerChoose = ['rock', 'paper', 'scissor'];

const result = document.getElementById('result');

let playerPoint = 0;
let pointCOM = 0;


function startGame() {
  const initGame = document.querySelector('.start');
  initGame.style.display = 'none';
}

const player = {
  win(winnerImg, looserImg) {
    result.innerHTML = 'You win!';
    document.getElementById('playerPoint').innerHTML = ++playerPoint;
    imagePlayerChoosed.setAttribute('src', `./assets/${winnerImg}.png`);
    imageComChoosed.setAttribute('src', `./assets/${looserImg}.png`);
  },

  loose(winnerImg, looserImg) {
    result.innerHTML = 'You loose!';
    document.getElementById('pointCOM').innerHTML = ++pointCOM;
    imagePlayerChoosed.setAttribute('src', `./assets/${looserImg}.png`);
    imageComChoosed.setAttribute('src', `./assets/${winnerImg}.png`);
  },

  draw(imageDraw) {
    result.innerHTML = 'Draw!';
    imagePlayerChoosed.setAttribute('src', `./assets/${imageDraw}.png`);
    imageComChoosed.setAttribute('src', `./assets/${imageDraw}.png`);
  }
}

function choosePaper() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[1]) {
      player.draw("paper");

    } else if(computerChoose[index] === computerChoose[2]) {
        player.loose("scissor", "paper");

    } else {
        player.win("paper", "rock");
    }
  }, 1000);

  setTimeout(clear, 2000);

}

function chooseRock() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[0]) {
      player.draw("rock");

    } else if(computerChoose[index] === computerChoose[1]) {
        player.loose("paper", "rock");
    } else {
        player.win("rock", "scissor");
    }
  }, 1000);

  setTimeout(clear, 2000);
}

function chooseScissor() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[2]) {
      player.draw("scissor");

    } else if(computerChoose[index] === computerChoose[0]) {
        player.loose("rock", "scissor");

    } else {
        player.win("scissor", "paper");
    }
  }, 1000);

  setTimeout(clear, 2000);
}


function clear() {
  imagePlayerChoosed.removeAttribute('src', './assets/paper.png');
  imagePlayerChoosed.removeAttribute('src', './assets/rock.png');
  imagePlayerChoosed.removeAttribute('src', './assets/scissor.png');

  imageComChoosed.removeAttribute('src', './assets/scissor.png');
  imageComChoosed.removeAttribute('src', './assets/rock.png');
  imageComChoosed.removeAttribute('src', './assets/paper.png');

  result.innerHTML = '';
}