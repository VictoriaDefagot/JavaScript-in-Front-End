let h1 = document.querySelector('h1');
let section = document.querySelector('section');
let article = document.querySelector('article');

h1.innerHTML += 'Agregar Películas';
h1.style.textTransform = 'uppercase';
h1.classList.add('titulo');

article.classList.add('fondoTransparente');

section.classList.add('fondoCRUD');


