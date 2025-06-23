//1
const divText = document.getElementById('text');
divText.textContent = 'Dicta, modi!';

//2
const pNewStyle = document.querySelector('.new-style');
pNewStyle.style.color = 'green';
pNewStyle.style.background = 'pink';

//3
const newP = document.createElement('p');
newP.textContent = 'dolor sit';
document.body.appendChild(newP);

//4
const pDeleteItem = document.getElementById('delete-item');
document.body.removeChild(pDeleteItem);

//5
const aGoogle = document.getElementById('google');
aGoogle.textContent = 'Yandex';
aGoogle.setAttribute('href', 'https://ya.ru/');
console.log(aGoogle.getAttribute('href')); // https://ya.ru/

//6
const sectionNew = document.createElement('section');
sectionNew.textContent = 'I am a section tag!!'
sectionNew.classList.add('section');
document.body.appendChild(sectionNew);

//7
sectionNew.classList.remove('section');
sectionNew.classList.toggle('section-green');
sectionNew.style.color = 'green';
console.log(sectionNew.classList.contains('section-green')); // true