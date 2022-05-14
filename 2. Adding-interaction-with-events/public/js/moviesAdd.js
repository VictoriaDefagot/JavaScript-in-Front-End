window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitle = document.querySelector('#titulo');


    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        this.style.color = 'red'
    });

    titulo.addEventListener('mouseout', function(){
        this.style.color = 'black'
    });

    let estadoSecreto = 0;
    let secreto = ['s', 'e', 'c', 'r', 'e', 't', 'o'];

    inputTitle.addEventListener('keypress', function(e){
        let key = e.key;
        console.log(key);

        if(key == secreto[estadoSecreto]){
            estadoSecreto ++;
        } else {
            estadoSecreto = 0;
        }

        if(estadoSecreto == 7){
            alert('SECRETO MÁGICO');
        }

    /*
    inputTitle.addEventListener('keypress', function(e){
        let estadoSecreto = 0;
        let key = e.key;
        console.log(key);

        if(estadoSecreto = 0 && key == 's'){
            let estadoSecreto = 1;
        } else if (estadoSecreto = 1 && key == 'e'){
            let estadoSecreto = 2;
        } else if (estadoSecreto = 2 && key == 'c'){
            let estadoSecreto = 3;
        } else if (estadoSecreto = 3 && key == 'r'){
            let estadoSecreto = 4;
        } else if (estadoSecreto = 4 && key == 'e'){
            let estadoSecreto = 5;
        } else if (estadoSecreto = 5 && key == 't'){
            let estadoSecreto = 6;
        } else if (estadoSecreto = 6 && key == 'o'){
            let estadoSecreto = 0;
            alert('SECRETO MÁGICO')
        } else {
            let estadoSecreto = 0;
        }

    });
    */

    });

}