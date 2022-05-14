import text from './userFunction.js'

let main = document.querySelector('main');
let h2 = document.querySelectorAll('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');
let body = document.querySelector('body');
let subtitulo = document.querySelector('.subtitulo');

text(subtitulo);

a.style.color = '#E51B3E';
let background = confirm('¿Desea colocar un fondo de pantalla?');

if(background){
    main.classList.add('fondo');
}

for(let i=0; i<p.length; i++){
    if(i%2 == 0){
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

main.style.display = 'block';


