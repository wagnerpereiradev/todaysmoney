
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

    for (var i = 0; i < 6; i++) {
        itemLabel = document.querySelector('.hide');
        itemLabel.classList.remove('hide')
        itemLabel.classList.add('show')
    }
}

function menuColapse() {
    menu.classList.remove('menu_expanded');
    menu.classList.add('menu');

    for (var i = 0; i < 6; i++) {
        itemLabel = document.querySelector('.show');
        itemLabel.classList.remove('show')
        itemLabel.classList.add('hide')
    }
}
