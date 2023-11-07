import '../css/index.css';

const links = document.querySelectorAll('.header a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const href = link.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});