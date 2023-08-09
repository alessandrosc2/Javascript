// Obter referência para o elemento canvas no HTML
var canvas = document.getElementById("animation");

// Obter o contexto de renderização 2D para o canvas
var ctx = canvas.getContext("2d");

// Variáveis para armazenar a posição atual do mouse
var positionX = 0;
var positionY = 0;

// Array para armazenar os confetes
var trail = [];

// Definir a largura e altura do canvas igual à largura e altura da janela do navegador
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adicionar um ouvinte de eventos para capturar o movimento do mouse
document.addEventListener("mousemove", function(event) {
  positionX = event.clientX;
  positionY = event.clientY;
});

// Adicionar um ouvinte de eventos para capturar o clique do mouse
document.addEventListener("mousedown", function(event) {
  explodeConfetti();
});

// Função para criar um efeito de explosão de confete
function explodeConfetti() {
  // Criar 100 confetes
  for (var i = 0; i < 100; i++) {
    // Gerar um ângulo aleatório
    var angle = Math.random() * Math.PI * 2;
    
    // Gerar uma velocidade aleatória
    var speed = Math.random() * 6 + 1;
    
    // Gerar um raio aleatório
    var radius = Math.random() * 4 + 1;
    
    // Criar um objeto confete com propriedades aleatórias
    var confetti = {
      x: positionX,
      y: positionY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: radius,
      color: getRandomColor()
    };
    
    // Adicionar o confete ao array trail
    trail.push(confetti);
  }
}

// Função para gerar uma cor aleatória
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  
  // Gerar um código de cor hexadecimal de 6 dígitos
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

// Função para desenhar a animação no canvas
function draw() {
  // Limpar o canvas antes de desenhar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar cada confete no array trail
  for (var i = 0; i < trail.length; i++) {
    var confetti = trail[i];

    // Atualizar a posição do confete
    confetti.x += confetti.vx;
    confetti.y += confetti.vy;
    confetti.vy += 0.1;

    // Desenhar o confete como um círculo preenchido
    ctx.beginPath();
    ctx.arc(confetti.x, confetti.y, confetti.radius, 0, Math.PI * 2);
    ctx.fillStyle = confetti.color;
    ctx.fill();

    // Remover o confete do array trail se ele atingir a parte inferior do canvas
    if (confetti.y >= canvas.height) {
      trail.splice(i, 1);
      i--;
    }
  }

  // Solicitar ao navegador para chamar a função draw novamente na próxima animação
  requestAnimationFrame(draw);
}

// Chamar a função draw para iniciar a animação
draw();
