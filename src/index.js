alert("HELLO");

const barraNavegacion = document.querySelector("#nav");

const menuHamburgesa = document.querySelector(".img-menu-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const iconClose = document.querySelector(".icon-close");

const fotoPerfil1 = document.querySelector(".photo-inactive1");
const fotoPerfil2 = document.querySelector(".photo-inactive2");
const fotoPerfil3 = document.querySelector(".photo-inactive3");
const pointsFoto1 = document.querySelector(".points-active1");
const pointsFoto2 = document.querySelector(".points-active2");
const pointsFoto3 = document.querySelector(".points-active3");


const asideTituCss =document.querySelector(".css")
const asideTituJs =document.querySelector(".js")
const asideTituBackend =document.querySelector(".backend")
const asideTituExcel =document.querySelector(".excel")
const certiImgCss = document.querySelector(".logo-css");
const certiImgJs = document.querySelector(".logo-js");
const certiImgBackend = document.querySelector(".logo-backend");
const certiImgExcel = document.querySelector(".logo-excel");

const flechaGirar1 = document.querySelector("#flecha-abajo1");
const flechaGirar2 = document.querySelector("#flecha-abajo2");
const flechaGirar3 = document.querySelector("#flecha-abajo3");
const flechaGirar4 = document.querySelector("#flecha-abajo4");
const divCurso1 = document.querySelector(".cursos-plz1");
const divCurso2 = document.querySelector(".cursos-plz2");
const divCurso3 = document.querySelector(".cursos-plz3");
const divCurso4 = document.querySelector(".cursos-plz4");

const contenedorDetallesPortafolio1 = document.querySelector(".contenedor-detail-portafolio1");
const contenedorDetallesPortafolio2 = document.querySelector(".contenedor-detail-portafolio2");
const contenedorDetallesPortafolio3 = document.querySelector(".contenedor-detail-portafolio3");
const contenedorDetallesPortafolio4 = document.querySelector(".contenedor-detail-portafolio4");
const contenedorDetallesPortafolio5 = document.querySelector(".contenedor-detail-portafolio5");
const asideDetailCards1 = document.querySelector("#detail-portafolio-cards1");
const asideDetailCards2 = document.querySelector("#detail-portafolio-cards2");
const asideDetailCards3 = document.querySelector("#detail-portafolio-cards3");
const asideDetailCards4 = document.querySelector("#detail-portafolio-cards4");
const asideDetailCards5 = document.querySelector("#detail-portafolio-cards5");
const imgXcerrar1 = document.querySelector(".cerrar-details1");
const imgXcerrar2 = document.querySelector(".cerrar-details2");
const imgXcerrar3 = document.querySelector(".cerrar-details3");
const imgXcerrar4 = document.querySelector(".cerrar-details4");
const imgXcerrar5 = document.querySelector(".cerrar-details5");
const portafolioCards1 = document.querySelector(".flecha-abrir-details1");
const portafolioCards2 = document.querySelector(".flecha-abrir-details2");
const portafolioCards3 = document.querySelector(".flecha-abrir-details3");
const portafolioCards4 = document.querySelector(".flecha-abrir-details4");
const portafolioCards5 = document.querySelector(".flecha-abrir-details5");






// titulos aprobados

let titulosListCss = [];
let titulosListJs = [];
let titulosListBack = [];
let titulosListExcel = [];
let imgDetallesPorta1 = [];
let imgDetallesPorta2 = [];
let imgDetallesPorta3 = [];
let imgDetallesPorta4 = [];
let imgDetallesPorta5 = [];
let imgPhotoPerfil1= [];
let imgPhotoPerfil2= [];
let imgPhotoPerfil3= [];



titulosListCss.push({
    name: "Developer Básico",
    Image: "./Assets/Fronter_Developer.png",
});

titulosListCss.push({
    name: "Developer practico",
    Image: "./Assets/Fronter_Developer_Practico.png",
});

titulosListCss.push({
    name: "Programacion Básica",
    Image: "./Assets/Programacion_Basica.png",
});

titulosListJs.push({
    name: "Java Script Básico",
    Image: "./Assets/JS_Basico.png",
});

titulosListJs.push({
    name: "Java Scrip practico",
    Image: "./Assets/JS_Practico.png",
});

titulosListJs.push({
    name: "Scope",
    Image: "./Assets/Closures&Scope.png",
});

titulosListJs.push({
    name: "Navegador Chrome",
    Image: "./Assets/Engine_V8.png",
});

titulosListJs.push({
    name: "Asincróno",
    Image: "./Assets/Asincronismo_con_Js.png",
});

titulosListJs.push({
    name: "Programación Básica",
    Image: "./Assets/Programacion_Basica.png",
});

titulosListBack.push({
    name: "Programación Básica",
    Image: "./Assets/Programacion_Basica.png",
});

titulosListExcel.push({
    name: "Excel Básico",
    Image: "./Assets/excel_basico.png",
});

titulosListExcel.push({
    name: "Excel con Macros",
    Image: "./Assets/excel_avanzado_macros.png",
});

imgDetallesPorta1.push({
    Image: "./Assets/gjkdrtg.png",
    h3: "PELEA DE MOKEPONES",
    p1: "Juego de batallas donde hay 6 legendarios personajes con diferentes poderes, escoge tu personaje y a jugar",
    p2: "Creado: 30 de junio del 2023       Tecnologias: Html, Css, Js, Backend",
    span: "View",
    a: "Click here",
    atri: "https://diegu1to.github.io",
    tar: "_blank",
});

imgDetallesPorta2.push({
    Image: "./Assets/tienda-virtual.png",
    h3: "TIENDA VIRTUAL ONLINE",
    p1: "Venta de productos en linea, es una pagina dinamica como se usa en la actualidad las grandes compañias para mejorar la interación con el usuario ej: Amazon, Uber, Facebook, etc",
    p2: "Creado: 5 de octubre del 2023    Tecnologias: Html, Css, Js, Node",
    span: "view",
    a: "Click here",
    atri: "https://diegu1to.github.io/js-practico-developer/",
    tar: "_blank",
});

imgDetallesPorta3.push({
    Image: "./Assets/pag-wix.png",
    h3: "PAGINA CREADA CON WIX UNA PLATAFORMA ONLINE",
    p1: "Se crea con ayuda de unas herramientas que brindan la pagina",
    p2: "Creado: 23 de abril del 2023    Tecnologias: Ux, Ui",
    span: "view",
    a: "Click here",
    atri: "https://diegocamargo331.wixsite.com/dcpro",
    tar: "_blank",
});

imgDetallesPorta4.push({
    Image: "./Assets/coming-5942155_1280.jpg",
    h3: "XXXXXX",
    p1: "kkkkkkkkkkk",
    p2: "kkkkkkkkkkk",
    span: "view",
    a: "Click here",
});

imgDetallesPorta5.push({
    Image: "./Assets/coming-5942155_1280.jpg",
    h3: "XXXXXX",
    p1: "kkkkkkkkkkk",
    p2: "kkkkkkkkkkk",
    span: "view",
    a: "Click here",
});

imgPhotoPerfil1.push({
    Image: "./Assets/dfrgfuyes.jpg",
});

imgPhotoPerfil2.push({
    Image: "./Assets/photoPerfil-three.jpg",
});

imgPhotoPerfil3.push({
    Image: "./Assets/photoPerfil-two.jpg",
});




certiImgJs.addEventListener("click", toggleDespliegueTituJs);
certiImgBackend.addEventListener("click", toggleDespliegueTituBackend);
certiImgCss.addEventListener("click", toggleDespliegueTituCss);
certiImgExcel.addEventListener("click", toggleDespliegueTituExcel);
menuHamburgesa.addEventListener("click", toggleDespliegueMenuMobile);
iconClose.addEventListener("click", closeMenuMobile);
portafolioCards1.addEventListener("click", toggleDetallesPortafolio1);
portafolioCards2.addEventListener("click", toggleDetallesPortafolio2);
portafolioCards3.addEventListener("click", toggleDetallesPortafolio3);
portafolioCards4.addEventListener("click", toggleDetallesPortafolio4);
portafolioCards5.addEventListener("click", toggleDetallesPortafolio5);
imgXcerrar1.addEventListener("click", closeDetailsPortafolio1);
imgXcerrar2.addEventListener("click", closeDetailsPortafolio2);
imgXcerrar3.addEventListener("click", closeDetailsPortafolio3);
imgXcerrar4.addEventListener("click", closeDetailsPortafolio4);
imgXcerrar5.addEventListener("click", closeDetailsPortafolio5);
pointsFoto1.addEventListener("click", togglePhotoOne);
pointsFoto2.addEventListener("click", togglePhotoTwo);
pointsFoto3.addEventListener("click", togglePhotoThree);



/*Despliegue iconos del css (cursos aprobados). Sí abro el logo cambia de posicion la flecha y cierra el aside de js o backend si esta abierto */
function toggleDespliegueTituCss() {
    const isAsideClosed = asideTituJs.classList.contains("inactive");
    const isAsideClosed1 = asideTituBackend.classList.contains("inactive");
    const isAsideClosed2 = asideTituExcel.classList.contains("inactive");


    if (!isAsideClosed) {
        asideTituJs.classList.add("inactive");
        flechaGirar2.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed1) {
        asideTituBackend.classList.add("inactive");
        flechaGirar3.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed2) {
        asideTituExcel.classList.add("inactive");
        flechaGirar4.style.transform = "rotate(0deg)";
    }

    asideTituCss.classList.toggle("inactive");
    flechaGirar1.style.transform = "rotate(180deg)";   
}

/*Despliegue iconos del js (cursos aprobados). Sí abro el logo cambia de posicion la flecha y cierra el aside de css o backend si esta abierto */
function toggleDespliegueTituJs() {
    const isAsideClosed = asideTituCss.classList.contains("inactive");
    const isAsideClosed1 = asideTituBackend.classList.contains("inactive");
    const isAsideClosed2 = asideTituExcel.classList.contains("inactive");


    if (!isAsideClosed) {
        asideTituCss.classList.add("inactive");
        flechaGirar1.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed1) {
        asideTituBackend.classList.add("inactive");
        flechaGirar3.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed2) {
        asideTituExcel.classList.add("inactive");
        flechaGirar4.style.transform = "rotate(0deg)";
    }

    asideTituJs.classList.toggle("inactive");
    flechaGirar2.style.transform = "rotate(180deg)";   
}    

/*Despliegue iconos del backend (cursos aprobados). Sí abro el logo cambia de posicion la flecha y cierra el aside de js o css si esta abierto */
function toggleDespliegueTituBackend() {
    const isAsideClosed = asideTituJs.classList.contains("inactive");
    const isAsideClosed1 = asideTituCss.classList.contains("inactive");
    const isAsideClosed2 = asideTituExcel.classList.contains("inactive");


    if (!isAsideClosed) {
        asideTituJs.classList.add("inactive");
        flechaGirar2.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed1) {
        asideTituCss.classList.add("inactive");
        flechaGirar1.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed2) {
        asideTituExcel.classList.add("inactive");
        flechaGirar4.style.transform = "rotate(0deg)";
    }

    asideTituBackend.classList.toggle("inactive");
    flechaGirar3.style.transform = "rotate(180deg)"
}

/*Despliegue iconos de excel (cursos aprobados). Sí abro el logo cambia de posicion la flecha y cierra el aside de js o css si esta abierto */
function toggleDespliegueTituExcel() {
    const isAsideClosed = asideTituJs.classList.contains("inactive");
    const isAsideClosed1 = asideTituCss.classList.contains("inactive");
    const isAsideClosed2 = asideTituBackend.classList.contains("inactive");


    if (!isAsideClosed) {
        asideTituJs.classList.add("inactive");
        flechaGirar2.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed1) {
        asideTituCss.classList.add("inactive");
        flechaGirar1.style.transform = "rotate(0deg)";
    }

    if (!isAsideClosed2) {
        asideTituBackend.classList.add("inactive");
        flechaGirar3.style.transform = "rotate(0deg)";
    }

    asideTituExcel.classList.toggle("inactive");
    flechaGirar4.style.transform = "rotate(180deg)"
}

/*Despliegue menu mobile, Clic en el menu hamburguesa y aparece el menu-mobile en mobil y viceversa*/
function toggleDespliegueMenuMobile() {
    const siEstaCerrado = contenedorDetallesPortafolio1.classList.contains("inactive");
    const siEstaCerrado1 = contenedorDetallesPortafolio2.classList.contains("inactive");
    const siEstaCerrado2 = contenedorDetallesPortafolio3.classList.contains("inactive");
    const siEstaCerrado3 = contenedorDetallesPortafolio4.classList.contains("inactive");
    const siEstaCerrado4 = contenedorDetallesPortafolio5.classList.contains("inactive");


    if (!siEstaCerrado) {
        contenedorDetallesPortafolio1.classList.add("inactive");
    }

    if (!siEstaCerrado1) {
        contenedorDetallesPortafolio2.classList.add("inactive");
    }

    if (!siEstaCerrado2) {
        contenedorDetallesPortafolio3.classList.add("inactive");
    }

    if (!siEstaCerrado3) {
        contenedorDetallesPortafolio4.classList.add("inactive");
    }

    if (!siEstaCerrado4) {
        contenedorDetallesPortafolio5.classList.add("inactive");
    }


    mobileMenu.classList.toggle("inactive");

}

/*Despliegue de los detalles de cada portafolio*/
function toggleDetallesPortafolio1() {
    contenedorDetallesPortafolio1.classList.toggle("inactive");
}

function toggleDetallesPortafolio2() {
    contenedorDetallesPortafolio2.classList.toggle("inactive");
}

function toggleDetallesPortafolio3() {
    contenedorDetallesPortafolio3.classList.toggle("inactive");
}

function toggleDetallesPortafolio4() {
    contenedorDetallesPortafolio4.classList.toggle("inactive");
}

function toggleDetallesPortafolio5() {
    contenedorDetallesPortafolio5.classList.toggle("inactive");
}

// points 

function togglePhotoOne() {
    const puntosPerfil = fotoPerfil2.classList.contains("inactive");
    const puntosPerfil1 = fotoPerfil3.classList.contains("inactive");

    if (!puntosPerfil) {
        fotoPerfil2.classList.add("inactive");
        pointsFoto2.style.backgroundColor = "#510b6d";
    }

    if (!puntosPerfil1) {
        fotoPerfil3.classList.add("inactive");
        pointsFoto3.style.backgroundColor = "#510b6d";
    }


    fotoPerfil1.classList.toggle("inactive");
    pointsFoto1.style.backgroundColor = "black";   
  //  pointsFoto1.disabled = true   
}

function togglePhotoTwo() {
    const puntosPerfil = fotoPerfil3.classList.contains("inactive");
    const puntosPerfil1 = fotoPerfil1.classList.contains("inactive");

    if (!puntosPerfil) {
        fotoPerfil3.classList.add("inactive");
        pointsFoto3.style.backgroundColor = "#510b6d";
    }

    if (!puntosPerfil1) {
        fotoPerfil1.classList.add("inactive");
        pointsFoto1.style.backgroundColor = "#510b6d";
    }


    fotoPerfil2.classList.toggle("inactive");
    pointsFoto2.style.backgroundColor = "black";
  //  pointsFoto2.disabled = true      
}

function togglePhotoThree() {
    const puntosPerfil = fotoPerfil2.classList.contains("inactive");
    const puntosPerfil1 = fotoPerfil1.classList.contains("inactive");

    if (!puntosPerfil) {
        fotoPerfil2.classList.add("inactive");
        pointsFoto2.style.backgroundColor = "#510b6d";
    }

    if (!puntosPerfil1) {
        fotoPerfil1.classList.add("inactive");
        pointsFoto1.style.backgroundColor = "#510b6d";
    }


    fotoPerfil3.classList.toggle("inactive");
    pointsFoto3.style.backgroundColor = "black"; 
   // pointsFoto3.disabled = true   
}




/*Icono cerrar X, click en él y se cierra el menu mobile*/
function closeMenuMobile() {
    mobileMenu.classList.add("inactive");
}

function closeDetailsPortafolio1() {
    contenedorDetallesPortafolio1.classList.toggle("inactive");
}

function closeDetailsPortafolio2() {
    contenedorDetallesPortafolio2.classList.toggle("inactive");
}

function closeDetailsPortafolio3() {
    contenedorDetallesPortafolio3.classList.toggle("inactive");
}

function closeDetailsPortafolio4() {
    contenedorDetallesPortafolio4.classList.toggle("inactive");
}

function closeDetailsPortafolio5() {
    contenedorDetallesPortafolio5.classList.toggle("inactive");
}





// Maquetación de html, para cada titulo(cuadro con cada imagen y nombre del curso)
function renderTitulosCss(arr) {
    for (title of arr) {
        const imgTitle = document.createElement("img");
        imgTitle.setAttribute("src", title.Image);


        divCurso1.appendChild(imgTitle);
    }
}

// Maquetación de css, para cada titulo(cuadro con cada imagen y nombre del curso)
function renderTitulosJs(arr) {
    for (title of arr) {
        const imgTitle = document.createElement("img");
        imgTitle.setAttribute("src", title.Image);


        divCurso2.appendChild(imgTitle);
    }
}

// Maquetación de backend, para cada titulo(cuadro con cada imagen y nombre del curso)
function renderTitulosBackend(arr) {
    for (title of arr) {
        const imgTitle = document.createElement("img");
        imgTitle.setAttribute("src", title.Image);


        divCurso3.appendChild(imgTitle);
    }
}

// Maquetación de excel, para cada titulo(cuadro con cada imagen y nombre del curso)
function renderTitulosExcel(arr) {
    for (title of arr) {
        const imgTitle = document.createElement("img");
        imgTitle.setAttribute("src", title.Image);


        divCurso4.appendChild(imgTitle);
    }
}

// maquetación photo perfil 
function renderPhotoPerfil1(ppp) {
    for (img of ppp) {
        const imgPerfil = document.createElement("img");
        imgPerfil.setAttribute("src", img.Image);

        fotoPerfil1.appendChild(imgPerfil);
    }
}

function renderPhotoPerfil2(ppp) {
    for (img of ppp) {
        const imgPerfil = document.createElement("img");
        imgPerfil.setAttribute("src", img.Image);

        fotoPerfil2.appendChild(imgPerfil);
    }
}

function renderPhotoPerfil3(ppp) {
    for (img of ppp) {
        const imgPerfil = document.createElement("img");
        imgPerfil.setAttribute("src", img.Image);

        fotoPerfil3.appendChild(imgPerfil);
    }
}



// Maquetación de contenedorDetallesPortafolio(lo que va por dentro de ese aside)
function renderDetallesPortafolio1(arr) {
    for (conte of arr) {

        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", conte.Image);
        imgContainer.classList.add("img-detail-portafolio");

        const divTextDetail = document.createElement("div");
        divTextDetail.classList.add("text-detail-portafolio");

        const textDetails = document.createElement("h3");
        textDetails.innerText = conte.h3;

        const textDetails1 = document.createElement("p");
        textDetails1.innerText = conte.p1;

        const textDetails2 = document.createElement("p");
        textDetails2.innerText = conte.p2;

        const spanBoton = document.createElement("span");
        spanBoton.innerText = conte.span;

        const aBoton = document.createElement("a");
        aBoton.setAttribute("href", conte.atri);
        aBoton.setAttribute("target", conte.tar);
        aBoton.innerText = conte.a;

        asideDetailCards1.appendChild(imgContainer);

        asideDetailCards1.appendChild(divTextDetail);     

        divTextDetail.appendChild(textDetails);
        divTextDetail.appendChild(textDetails1);
        divTextDetail.appendChild(textDetails2);
        divTextDetail.appendChild(spanBoton);
        spanBoton.appendChild(aBoton);

    } 
}

function renderDetallesPortafolio2(arr) {
    for (conte of arr) {

        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", conte.Image);
        imgContainer.classList.add("img-detail-portafolio");

        const divTextDetail = document.createElement("div");
        divTextDetail.classList.add("text-detail-portafolio");

        const textDetails = document.createElement("h3");
        textDetails.innerText = conte.h3;

        const textDetails1 = document.createElement("p");
        textDetails1.innerText = conte.p1;

        const textDetails2 = document.createElement("p");
        textDetails2.innerText = conte.p2;

        const spanBoton = document.createElement("span");
        spanBoton.innerText = conte.span;

        const aBoton = document.createElement("a");
        aBoton.setAttribute("href", conte.atri);
        aBoton.setAttribute("target", conte.tar);
        aBoton.innerText = conte.a;

        asideDetailCards2.appendChild(imgContainer);

        asideDetailCards2.appendChild(divTextDetail);     

        divTextDetail.appendChild(textDetails);
        divTextDetail.appendChild(textDetails1);
        divTextDetail.appendChild(textDetails2);
        divTextDetail.appendChild(spanBoton);
        spanBoton.appendChild(aBoton);

    } 
}

function renderDetallesPortafolio3(arr) {
    for (conte of arr) {

        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", conte.Image);
        imgContainer.classList.add("img-detail-portafolio");

        const divTextDetail = document.createElement("div");
        divTextDetail.classList.add("text-detail-portafolio");

        const textDetails = document.createElement("h3");
        textDetails.innerText = conte.h3;

        const textDetails1 = document.createElement("p");
        textDetails1.innerText = conte.p1;

        const textDetails2 = document.createElement("p");
        textDetails2.innerText = conte.p2;

        const spanBoton = document.createElement("span");
        spanBoton.innerText = conte.span;

        const aBoton = document.createElement("a");
        aBoton.setAttribute("href", conte.atri);
        aBoton.setAttribute("target", conte.tar);
        aBoton.innerText = conte.a;

        asideDetailCards3.appendChild(imgContainer);

        asideDetailCards3.appendChild(divTextDetail);     

        divTextDetail.appendChild(textDetails);
        divTextDetail.appendChild(textDetails1);
        divTextDetail.appendChild(textDetails2);
        divTextDetail.appendChild(spanBoton);
        spanBoton.appendChild(aBoton);

    } 
}

function renderDetallesPortafolio4(arr) {
    for (conte of arr) {

        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", conte.Image);
        imgContainer.classList.add("img-detail-portafolio");

        const divTextDetail = document.createElement("div");
        divTextDetail.classList.add("text-detail-portafolio");

        const textDetails = document.createElement("h3");
        textDetails.innerText = conte.h3;

        const textDetails1 = document.createElement("p");
        textDetails1.innerText = conte.p1;

        const textDetails2 = document.createElement("p");
        textDetails2.innerText = conte.p2;

        const spanBoton = document.createElement("span");
        spanBoton.innerText = conte.span;

        const aBoton = document.createElement("a");
        aBoton.innerText = conte.a;

        asideDetailCards4.appendChild(imgContainer);

        asideDetailCards4.appendChild(divTextDetail);     

        divTextDetail.appendChild(textDetails);
        divTextDetail.appendChild(textDetails1);
        divTextDetail.appendChild(textDetails2);
        divTextDetail.appendChild(spanBoton);
        spanBoton.appendChild(aBoton);

    } 
}

function renderDetallesPortafolio5(arr) {
    for (conte of arr) {

        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", conte.Image);
        imgContainer.classList.add("img-detail-portafolio");

        const divTextDetail = document.createElement("div");
        divTextDetail.classList.add("text-detail-portafolio");

        const textDetails = document.createElement("h3");
        textDetails.innerText = conte.h3;

        const textDetails1 = document.createElement("p");
        textDetails1.innerText = conte.p1;

        const textDetails2 = document.createElement("p");
        textDetails2.innerText = conte.p2;

        const spanBoton = document.createElement("span");
        spanBoton.innerText = conte.span;

        const aBoton = document.createElement("a");
        aBoton.innerText = conte.a;

        asideDetailCards5.appendChild(imgContainer);

        asideDetailCards5.appendChild(divTextDetail);     

        divTextDetail.appendChild(textDetails);
        divTextDetail.appendChild(textDetails1);
        divTextDetail.appendChild(textDetails2);
        divTextDetail.appendChild(spanBoton);
        spanBoton.appendChild(aBoton);

    } 
}



renderTitulosCss(titulosListCss);
renderTitulosJs(titulosListJs);
renderTitulosBackend(titulosListBack);
renderTitulosExcel(titulosListExcel);

renderPhotoPerfil1(imgPhotoPerfil1);
renderPhotoPerfil2(imgPhotoPerfil2);
renderPhotoPerfil3(imgPhotoPerfil3);

renderDetallesPortafolio1(imgDetallesPorta1);
renderDetallesPortafolio2(imgDetallesPorta2);
renderDetallesPortafolio3(imgDetallesPorta3);
renderDetallesPortafolio4(imgDetallesPorta4);
renderDetallesPortafolio5(imgDetallesPorta5);




/*window.addEventListener("scroll", ()=> {
    let scroll = window.scrollY

    if (scroll > 10) {
        nav.style.backgroundColor = "#121212"
    } else {
        nav.style.backgroundColor = "transparent"
    }
}) */