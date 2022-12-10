
let menu = document.querySelector('.menu');

menu.addEventListener('mouseover', () => {
    menuExpand();
})

menu.addEventListener('mouseout', () => {
    menuColapse();
})

function menuExpand() {
    menu.classList.remove('menu');
    menu.classList.add('menu_expanded');
}

function menuColapse() {
    menu.classList.remove('menu_expanded');
    menu.classList.add('menu');
}
