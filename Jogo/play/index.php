<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Indie+Flower&family=Mystery+Quest&family=Rampart+One&display=swap" rel="stylesheet">
  <style type="text/css">
    .obstacle {
  width: 60px; /* Ajuste a largura desejada */
  height: 65px; /* Ajuste a altura desejada */
  position: absolute;
  transition: top 8s linear;
}
  </style>
</head>
<body>
  <div id="nome">JOGO <br> DO <br> LUCCA </div>
    <div id="game-container">
    <div id="road">
      <div class="lane"></div>
      <div class="center-line"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
        <img class="tree" src="img/arvore.png" alt="Tree">
        <img class="stone" src="img/grama.png" alt="Stone">
    </div>
    <img id="car" src="img/carro.png" alt="Car" style="width: 36px;height: 70px;">
  </div>
<div id="controls">
  <button class="glow-on-hover" id="left-button">ESQUERDA</button>
  <button class="glow-on-hover" id="center-button">CENTRO</button>
  <button class="glow-on-hover" id="right-button">DIREITA</button>
</div>

  <script src="script.js"></script>
  <script>
          // Obtém a referência para o carro
var car = document.getElementById('car');

// Obtém a referência para os botões
var rightButton = document.getElementById('right-button');
var centerButton = document.getElementById('center-button');
var leftButton = document.getElementById('left-button');

// Define a posição inicial do carro como centro
var carPosition = 'center';

// Define a função para atualizar a posição do carro
function updateCarPosition(position) {
  if (position === 'right') {
    car.style.left = '66.66%';
  } else if (position === 'center') {
    car.style.left = '50%';
  } else if (position === 'left') {
    car.style.left = '33.33%';
  }
  carPosition = position;
}

// Adiciona os eventos de clique aos botões
rightButton.addEventListener('click', function() {
  updateCarPosition('right');
});

centerButton.addEventListener('click', function() {
  updateCarPosition('center');
});

leftButton.addEventListener('click', function() {
  updateCarPosition('left');
});

  </script>
  <script>
    const obstacleImages = [
  'img/pato2.png',
  'img/sapo.png',
  'img/maquem.png',
  'img/mate.png',
  'img/blaze.png',
  'img/buraco.png'
];

function createObstacle() {
  const obstacle = document.createElement('img');
  const randomIndex = Math.floor(Math.random() * obstacleImages.length);
  obstacle.src = obstacleImages[randomIndex];
  obstacle.classList.add('obstacle');

  const positions = ['left', 'center', 'right'];
  const randomPosition = positions[Math.floor(Math.random() * positions.length)];
  obstacle.classList.add(randomPosition);

  const road = document.getElementById('road');
  const roadWidth = road.offsetWidth;
  const obstacleWidth = obstacle.offsetWidth;
  const maxLeft = roadWidth - obstacleWidth;
  const randomLeft = Math.floor(Math.random() * (maxLeft + 1));

  obstacle.style.left = `${randomLeft}px`;
  obstacle.style.top = '0';

  road.appendChild(obstacle);

  setTimeout(function() {
    obstacle.style.top = `${road.offsetHeight - obstacle.offsetHeight}px`;
    setTimeout(function() {
      obstacle.remove();
    }, 500); // Remove o obstáculo após 0,5 segundos de ter saído da tela
  }, 5000); // Move o obstáculo para o final da estrada após 5 segundos

  const moveInterval = setInterval(function() {
    obstacle.style.top = `${parseInt(obstacle.style.top) + 4}px`;
  }, 7); // Move o obstáculo em incrementos de 1px a cada 7ms

  setTimeout(function() {
    clearInterval(moveInterval);
  }, 5000); // Para o movimento após 5 segundos
}

setInterval(createObstacle, 5000); // Cria um novo obstáculo a cada 5 segundos

  </script>
</body>
</html>
