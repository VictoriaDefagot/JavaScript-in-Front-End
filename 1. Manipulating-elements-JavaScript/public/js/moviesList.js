let body = document.querySelector('body');
let h1 = document.querySelector('h1');

let darkMode = prompt('¿Desea modo oscuro?');

if(darkMode == 'Si'){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList')
}

h1.innerHTML += 'Listado de Películas';
h1.style.textTransform = 'uppercase';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px';