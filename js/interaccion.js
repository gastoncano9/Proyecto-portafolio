'use strict';

const contenedor = document.querySelector(".container-boton");
const boton = document.getElementById("boton");
const menu = document.querySelector(".contenedor-hamburguesa");

contenedor.addEventListener("click",()=>
{
    let fondo = document.getElementById("fondo");
    let valorHref = fondo.getAttribute("href");

    if(valorHref == "./CSS/fondo-claro.css")
    {
        fondo.setAttribute("href","./CSS/fondo-oscuro.css");
        boton.style.marginRight = "100%";
        boton.style.marginLeft = "0%";
    }
    else
    {
        fondo.setAttribute("href","./CSS/fondo-claro.css");
        boton.style.marginLeft = "57%";
        boton.style.marginRight = "0%";
    }
});


menu.addEventListener("click",()=>
{
    let contenedorMenu = document.getElementById("hamburguesa");
    contenedorMenu.classList.toggle("hamburguesa");
});

