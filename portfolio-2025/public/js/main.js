
//habilidades
const path_skill = "images/client-logo/";
const skills = [
    "https://miro.medium.com/max/1200/1*kkXbE9GlS73U7x1iXHP_vQ.png",
    "https://cdn-images-1.medium.com/max/800/1*U01ubQ9TrE1Zow5pkGHTfw.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1200px-Ionic_Logo.svg.png",
    "https://clipart.info/images/ccovers/1499794875html-css-php-mysql-logo-png-transparent.png",
    "https://3.bp.blogspot.com/-BVQ36vhFc0I/VsOpgnJmD-I/AAAAAAAAAFk/Z4BOOKmbxJ4/s1600/banner.PNG",
    "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
    "https://i.pinimg.com/originals/ee/06/80/ee0680d882601008ed1960c830c8fe33.png"
];

//experiencia
const path_work = "images/works/";
const works = [
    "mihogar_4.jpg", "mihogar_2.jpg", "mihogar_3.jpg",
    "criollos_3.jpg", "criollos_2.jpg",
    "clanminer_1.jpg", "clanminer_5.jpg",
    "110_1.jpg",
    "cola_1.jpg",
    "grido_1.jpg", "grido_2.jpg",
    "chat_2.jpg",
    "ux_1.jpg", "ux_2.jpg",
    "print_1.jpg", "print_2.jpg", "print_3.jpg",
];

//educación
const educations = [
    { title: `Bachiller en Humanidades`, body: `Colegio Daniel Rivero Ochoa, desde Febrero 1998 hasta Enero 2012 Santa Cruz, Bolivia` },
    { title: `Ingenieria en Sistemas (Licenciatura)`, body: `Universidad Autónoma Gabriel René Moreno, desde Junio 2014. Santa Cruz, Bolivia` },
    { title: `Diseño Gráfico (Curso)`, body: `EduDiseño, desde Agosto 2016 hasta Septiembre 2016 Santa Cruz de la Sierra, Bolivia` },
    { title: `Diseño UX,UI (Curso)`, body: `Crehana, desde Julio 2018 hasta Agosto 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Gestión de proyecto Scrum (Curso)`, body: `Platzi, desde Enero 2019 hasta Febrero 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `Reparación y Mant. de PC (Cursando)`, body: `Universidad Autónoma Gabriel René Moreno, desde Septiembre 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `React, Flutter, Vue, Laravel (Cursando)`, body: `Udemy, desde Septiembre 2019 Santa Cruz de la Sierra, Bolivia` },
    { title: `MEAN Stack Avanzado (Curso) `, body: `MEAN (MongoDB, Express, Angular, Nodejs)  Udemy, desde Octubre 2017 hasta Junio 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Ionic v3,4,5, PWA, Avanzado (Curso) `, body: `Udemy, desde Octubre 2017 hasta Junio 2018 Santa Cruz de la Sierra, Bolivia` },
    { title: `Servidor VPS (Curso) `, body: `Desde Abril 2020 hasta Marzo 2020 Santa Cruz de la Sierra, Bolivia` },
    { title: `Microservicios (Cursando)`, body: `Desde Enero 2021 Santa Cruz de la Sierra, Bolivia` },
    { title: `Estandares de codigo y principios SOLID`, body: `Desde Enero 2021 Santa Cruz de la Sierra, Bolivia` },

    //   
];

//* Carga la pagina
(function ($) {
    'use strict';

    load_skills();
    load_works();
    load_educations();

})(jQuery);


//* Div habilidades
function load_skills() {
    let item = "";
    for (let i = 0; i < skills.length; i++) {
        item += ` <a href="javascript:void(0)" class="text-center d-block outline-0 py-3 px-2">
            <img class="d-unset img-fluid" style="max-height:100px;" src="${skills[i]}" alt="logo"></a> `;
    }

    $("#div_skill").html(item)
}

//* Div experiencias o trabajos
function load_works() {
    let item = "";
    for (let i = 0; i < works.length; i++) {
        item += ` 
        <div class="col-lg-3 px-0">
                <div class="work-slider-image" style="max-height: 200px;">
                    <img  class="img-fluid w-100" src="${path_work}${works[i]}" alt="work-image">
                    <div class="image-overlay">
                        <a class="popup-image" data-effect="mfp-zoom-in" href="${path_work}${works[i]}">
                            <i class="ti-search"></i>
                        </a>
                    </div>
                </div>
            </div> `;
    }

    $("#div_work").html(item)
}

//* Div educación
function load_educations() {
    let item = "";
    for (let i = 0; i < educations.length; i++) {
        item += ` 

        <div class="card border-0 mb-4">
        <div class="card-header bg-gray border p-0">
            <a class="collapsed card-link h6 d-block tex-dark mb-0 py-10 px-4" data-toggle="collapse" href="#item_${i}">
                <i class="ti-plus text-primary mr-2"></i>  ${educations[i].title}
            </a>
        </div>
        <div id="item_${i}" class="collapse" data-parent="#accordion">
            <div class="card-body font-secondary text-color pl-0 pb-0">
                    ${educations[i].body}
            </div>
        </div>
    </div>
 `;
    }

    $("#accordion").html(item)
}
