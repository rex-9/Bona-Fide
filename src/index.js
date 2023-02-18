const menu = document.querySelector('.menu');
const topic = document.querySelector('#topic');
const nav = document.querySelector('nav');

let menuStatus = false;

menu.addEventListener('click', () => {
  menuStatus ? closeMenu() : openMenu();
});

const openMenu = () => {
  nav.style.height = '100vh';
  topic.classList.remove('topic-pc');
  topic.classList.add('topic-mb');
  menu.src = './assets/x.png';
  console.log('menu opened');
  menuStatus = true;
};

const closeMenu = () => {
  nav.style.height = '10vh';
  topic.classList.remove('topic-mb');
  topic.classList.add('topic-pc');
  menu.src = './assets/menu.png';
  console.log('menu closed');
  menuStatus = false;
};

