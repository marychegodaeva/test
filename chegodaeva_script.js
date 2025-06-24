//2
const rect = document.getElementById('rect');

rect.addEventListener('mouseover', () => {
  rect.style.width = '200px';
  rect.style.backgroundColor = 'blue';
  rect.style.transition = '0.5s';
});

rect.addEventListener('mouseout', () => {
  rect.style.width = '100px';
  rect.style.backgroundColor = 'green';
  rect.style.transition = '0.5s';
});

//4
const form = document.getElementById('form');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Форма отправлена!');
});
