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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  trail.push({ x: positionX, y: positionY });

  while (trail.length > 100) {
    trail.shift();
  }

  for (var i = 0; i < trail.length; i++) {
    var alpha = 1 - i / trail.length;
    var radius = 5 + i * 0.5;

    ctx.beginPath();
    ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "hsla(" + (i * 3) + ", 100%, 50%, " + alpha + ")";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
