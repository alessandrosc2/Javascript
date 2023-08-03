    // Obtém a referência para a linha central
    var centerLine = document.querySelector('.center-line');

    // Define a velocidade de movimento da linha central (em pixels por segundo)
    var lineSpeed = 10;

    // Atualiza a posição da linha central a cada quadro
function updateLinePosition() {
  var roadHeight = document.getElementById('road').offsetHeight;
  var lineTop = parseFloat(getComputedStyle(centerLine).top);
  var stoneTop = parseFloat(getComputedStyle(stone).top);

  // Atualiza a posição da linha central
  centerLine.style.top = (lineTop + (lineSpeed / 60)) + 'px';

  // Move a pedra para cima e reseta sua posição quando sair da tela
  if (stoneTop >= roadHeight) {
    stone.style.top = '-40px'; // Altura da pedra (40px) para reiniciar a posição
  } else {
    stone.style.top = (stoneTop + (lineSpeed / 60)) + 'px';
  }
}


