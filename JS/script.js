//Fixed Header//
window.onscroll = function(){FixHeader()};
let introH = document.getElementById("intro");
let header = document.getElementById("header")
let stiky = introH.offsetTop;//distance of the current element relative to the top of the body

function FixHeader(){
    if(window.pageYOffset > stiky){
        header.classList.add("header__fixed");
    }
    else{
        header.classList.remove("header__fixed");
    }
}
//Active_links
active_links.start();

//Menu nav toggle//
let nav_toggle = document.getElementById('nav-toggle');
let navMenu = document.getElementById('nav');

nav_toggle.addEventListener('click', function (event) {
    event.preventDefault();

    nav_toggle.classList.toggle('nav-toggle-active');
    header.classList.toggle('header__fixed-active');
    navMenu.classList.toggle('nav__active');
})
//Slider
slider.start();

//Gallery switcher//
let gallerySwitchButtons = document.getElementsByClassName('projects__list-item');
let galleryItems = document.getElementsByClassName('gallery__item');

gallerySwitchButtons[0].addEventListener('click',function(event){
    event.preventDefault();
    for(let j = 0; j < galleryItems.length; j++){
        galleryItems[j].classList.remove('gallery__item-hide');
    }
});
gallerySwitchButtons[1].addEventListener('click',function (event) {
    event.preventDefault();
    for (let j = 0; j < galleryItems.length; j++ ){
        if(j == 4){
            galleryItems[j].classList.remove("gallery__item-hide");
            j++;
        }
        galleryItems[j].classList.add("gallery__item-hide");
    }
});
gallerySwitchButtons[2].addEventListener('click',function (event) {
    event.preventDefault();
    for (let j = 1; j < galleryItems.length; j++ ) {
        galleryItems[0].classList.remove("gallery__item-hide");
        galleryItems[j].classList.add("gallery__item-hide");
    }
});
gallerySwitchButtons[3].addEventListener('click',function (event) {
    event.preventDefault();
    for (let j = 0; j < galleryItems.length; j++ ) {
        if(j == 2){
            galleryItems[j].classList.remove("gallery__item-hide");
            j++;
        }
        galleryItems[j].classList.add("gallery__item-hide");
    }
});
gallerySwitchButtons[4].addEventListener('click',function (event) {
    event.preventDefault();
    for (let j = 0; j < galleryItems.length; j++ ) {
        if(j == 1){
            galleryItems[j].classList.remove("gallery__item-hide");
            j++;
        }
        else if(j == 5){
            break;
        }
        galleryItems[j].classList.add("gallery__item-hide");
    }
});



















