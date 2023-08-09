// Obter referência para o elemento canvas no HTML
var canvas = document.getElementById("animation");

// Obter o contexto de renderização 2D para o canvas
var ctx = canvas.getContext("2d");

// Variáveis para armazenar a posição atual do mouse
var positionX = 0;
var positionY = 0;

// Array para armazenar as posições do rastro
var trail = [];

// Definir a largura e altura do canvas igual à largura e altura da janela do navegador
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adicionar um ouvinte de eventos para capturar o movimento do mouse
document.addEventListener("mousemove", function(event) {
  positionX = event.clientX;
  positionY = event.clientY;
});

// Função para desenhar a animação no canvas
function draw() {
  // Limpar o canvas antes de desenhar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Adicionar a posição atual do mouse ao array trail
  trail.push({ x: positionX, y: positionY });

  // Reduzir o tamanho do array trail para manter apenas as últimas 100 posições
  while (trail.length > 100) {
    trail.shift();
  }

  // Desenhar o rastro no canvas
  for (var i = 0; i < trail.length; i++) {
    var alpha = 1 - i / trail.length;  // Calcula a transparência do ponto
    var radius = 5 + i * 0.5;          // Calcula o raio do ponto

    // Iniciar um novo caminho de desenho
    ctx.beginPath();
    
    // Desenhar um arco com base na posição e raio do ponto
    ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
    
    // Definir a cor de preenchimento do ponto com base no índice
    ctx.fillStyle = "hsla(" + (i * 3) + ", 100%, 50%, " + alpha + ")";
    
    // Preencher o ponto com a cor definida
    ctx.fill();
  }

  // Solicitar ao navegador para chamar a função draw novamente na próxima animação
  requestAnimationFrame(draw);
}

// Chamar a função draw para iniciar a animação
draw();
