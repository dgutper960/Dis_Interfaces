const cambiarDisenio = () =>{
    const navTexto = document.querySelector("header .nav_texto"); /** Seleccionamos como un selecctor de css */
    const navHambuguer = document.querySelector("header .nav_hamburguer");

    if(!navTexto.getAttribute("display")){
        navTexto.setAttribute("display, none");
        navHambuguer.removeAttribute("display");
    }else{
        navHambuguer.setAttribute("display, none");
        navTexto.removeAttribute("display");
    }


}