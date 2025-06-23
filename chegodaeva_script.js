//1
const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  button1.textContent = 'Новый текст';
});

//2
const rect = document.getElementById('rect');
rect.addEventListener('mouseover', () => {
  rect.style.width = '200px';
  rect.style.backgroundColor = 'blue';
  rect.style.transition = '0.5s';
});

//3
const input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
  console.log(`Отпущена клавиша: ${event.key}`);
});

//4
const form = document.getElementById('form');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  successMessage.style.display = 'block';
});

//5
const topic = document.getElementById('topic');
topic.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

