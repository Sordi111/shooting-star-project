
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 80; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 3 + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function update() {
  stars.forEach((star) => {
    star.x += star.speed;
    star.y += star.speed;
    if (star.x > canvas.width || star.y > canvas.height) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
    }
  });
}

function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}

animate();
