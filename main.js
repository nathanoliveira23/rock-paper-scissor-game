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


function choosePaper() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[1]) {
      result.innerHTML = 'Empate';
      imagePlayerChoosed.setAttribute('src', './assets/paper.png');
      imageComChoosed.setAttribute('src', './assets/paper.png');

    } else if(computerChoose[index] === computerChoose[2]) {
      result.innerHTML = 'Perdeu';
      imagePlayerChoosed.setAttribute('src', './assets/paper.png');
      imageComChoosed.setAttribute('src', './assets/scissor.png');
      document.getElementById('pointCOM').innerHTML = ++pointCOM;

    } else {
      result.innerHTML = 'Venceu';
      document.getElementById('playerPoint').innerHTML = ++playerPoint;
      imagePlayerChoosed.setAttribute('src', './assets/paper.png');
      imageComChoosed.setAttribute('src', './assets/rock.png');
    }
  }, 1000);

  setTimeout(clear, 2000);

}

function chooseRock() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[0]) {
      result.innerHTML = 'Empate';
      imagePlayerChoosed.setAttribute('src', './assets/rock.png');
      imageComChoosed.setAttribute('src', './assets/rock.png');

    } else if(computerChoose[index] === computerChoose[1]) {
      result.innerHTML = 'Perdeu';
      imagePlayerChoosed.setAttribute('src', './assets/rock.png');
      imageComChoosed.setAttribute('src', './assets/paper.png');
      document.getElementById('pointCOM').innerHTML = ++pointCOM;

    } else {
      result.innerHTML = 'Venceu';
      imagePlayerChoosed.setAttribute('src', './assets/rock.png');
      imageComChoosed.setAttribute('src', './assets/scissor.png');
      document.getElementById('playerPoint').innerHTML = ++playerPoint;
    }
  }, 1000);

  setTimeout(clear, 2000);
}

function chooseScissor() {
  const index = Math.floor(Math.random() * computerChoose.length);

  setTimeout(() => {
    if(computerChoose[index] === computerChoose[2]) {
      result.innerHTML = 'Empate';
      imagePlayerChoosed.setAttribute('src', './assets/scissor.png');
      imageComChoosed.setAttribute('src', './assets/scissor.png');

    } else if(computerChoose[index] === computerChoose[0]) {
      result.innerHTML = 'Perdeu';
      imagePlayerChoosed.setAttribute('src', './assets/scissor.png');
      imageComChoosed.setAttribute('src', './assets/rock.png');
      document.getElementById('pointCOM').innerHTML = ++pointCOM;

    } else {
      result.innerHTML = 'Venceu';
      imagePlayerChoosed.setAttribute('src', './assets/scissor.png');
      imageComChoosed.setAttribute('src', './assets/paper.png');
      document.getElementById('playerPoint').innerHTML = ++playerPoint;
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