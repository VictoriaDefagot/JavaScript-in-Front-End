export default function text(subtitulo) {

let userName = prompt('Ingrese su nombre');

if (userName){
    subtitulo.innerHTML += userName;
} else {
    subtitulo.innerHTML += 'Invitado';
}

subtitulo.style.textTransform = 'uppercase';

}