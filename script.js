const links = document.querySelectorAll(".header-menu a");
const galeria = document.querySelectorAll('.about-img img');
const galeriaContainer = document.querySelector('.about-img');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width:1000px)').matches;
    if(media){
        galeriaContainer.prepend(img);
    }
    
    
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

function ativarLink (links){
    const url = location.href;
    const href = links.href;

    if(url.includes(href)){
        links.classList.add('ativo')
    }
}
links.forEach(ativarLink)

galeria.forEach(eventosGaleria)