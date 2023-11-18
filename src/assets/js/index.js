import '../css/index.css';

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const href = link.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});