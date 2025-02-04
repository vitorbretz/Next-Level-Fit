const links = document.querySelectorAll(".header-menu a");

function ativarLink (links){
    const url = location.href;
    const href = links.href;

    if(url.includes(href)){
        links.classList.add('ativo')
    }
}
links.forEach(ativarLink)