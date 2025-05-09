const dot = document.getElementById('cursor-dot');
const ball = document.getElementById('cursor-ball');
let dotX = 0, dotY = 0;
let ballX = 0, ballY = 0;
const delay = 0.1;

document.addEventListener('mousemove', e => {
  dotX = e.clientX;
  dotY = e.clientY;
  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;
});

function animate() {
  const distX = dotX - ballX;
  const distY = dotY - ballY;
  
  ballX += distX * delay;
  ballY += distY * delay;
  
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
  
  requestAnimationFrame(animate);
}

animate();

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    ball.style.width = '60px';
    ball.style.height = '60px';
  });
  button.addEventListener('mouseleave', () => {
    ball.style.width = '25px';
    ball.style.height = '25px';
  });
});
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    ball.style.width = '60px';
    ball.style.height = '60px';
  });
  link.addEventListener('mouseleave', () => {
    ball.style.width = '25px';
    ball.style.height = '25px';
  });
});

document.querySelectorAll('#project-container > a').forEach(projectLink => {
  projectLink.addEventListener('mouseenter', () => {
    ball.style.width = '60px';
    ball.style.height = '60px';
    ball.style.borderColor = '#000000';
    ball.style.backgroundColor = 'rgba(255,255,255,0.2)';
  });
  projectLink.addEventListener('mouseleave', () => {
    ball.style.width = '25px';
    ball.style.height = '25px';
    ball.style.borderColor = '#E5E7EB';
    ball.style.backgroundColor = 'transparent';
  });
});