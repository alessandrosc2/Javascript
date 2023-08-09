var canvas = document.getElementById("animation");
var ctx = canvas.getContext("2d");
var positionX = 0;
var positionY = 0;
var trail = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("mousemove", function(event) {
  positionX = event.clientX;
  positionY = event.clientY;
});

document.addEventListener("mousedown", function(event) {
  explodeConfetti();
});

function explodeConfetti() {
  for (var i = 0; i < 100; i++) {
    var angle = Math.random() * Math.PI * 2;
    var speed = Math.random() * 6 + 1;
    var radius = Math.random() * 4 + 1;
    var confetti = {
      x: positionX,
      y: positionY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: radius,
      color: getRandomColor()
    };
    trail.push(confetti);
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar rastro de cometa
  for (var i = 0; i < trail.length; i++) {
    var confetti = trail[i];

    confetti.x += confetti.vx;
    confetti.y += confetti.vy;
    confetti.vy += 0.1;

    ctx.beginPath();
    ctx.arc(confetti.x, confetti.y, confetti.radius, 0, Math.PI * 2);
    ctx.fillStyle = confetti.color;
    ctx.fill();

    if (confetti.y >= canvas.height) {
      trail.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(draw);
}

draw();
