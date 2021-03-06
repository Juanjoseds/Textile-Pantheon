require("@rails/ujs").start()
require("turbolinks")
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

let changed = false;
// Detecta el scroll de la página para aplicar efectos CSS

window.onload = function (){
    if(window.pageYOffset === 0){navbarlogo(0);}
};

document.onscroll = function (){
    const scrollValue = 65;
    if(window.pageYOffset > scrollValue && changed === false){
        changed = true;

        navbarlogo(1);
    }else if(window.pageYOffset < scrollValue){
        changed = false;

        navbarlogo(0);
    }
    //navbar-brand

};

// Lógica de efectos para el título del navbar según la posición del scroll
function navbarlogo (option){
    if (option === 0){
        document.getElementsByClassName("navIndex")[0].classList.remove('boxshadow');
        document.getElementsByClassName("navbar-brand-section")[0].innerHTML = "";
        document.getElementsByClassName("navbar-brand-section")[0].classList.remove('logoentry');
        document.getElementsByClassName("navbar-collapse")[0].classList.add('centrar');
    } else if (option === 1){
        document.getElementsByClassName("navIndex")[0].classList.add('boxshadow');
        document.getElementsByClassName("navbar-brand-section")[0].innerHTML = '<a class=\"navbar-brand\" href=\"#\">TEXTILE PANTHEON</a>';
        document.getElementsByClassName("navbar-brand-section")[0].classList.add('logoentry');
        document.getElementsByClassName("navbar-collapse")[0].classList.remove('centrar');
        document.getElementsByClassName("navbar")[0].classList.add('opacity');
    }
}