


const cambiarDisenio = () =>{
    const navTexto = document.querySelector("header .header__zonaNavegacion"); /** Seleccionamos como un selecctor de css */
    const navHambuguer = document.querySelector("header .header__zonaNavegacionHamb");

    if(navTexto.getAttribute("hidden")){
        console.log('Mostrar nav hamburguer');
        navTexto.setAttribute("hidden", true);
        navTexto.style.display = "none";
        navHambuguer.removeAttribute("hidden");
        navHambuguer.style.display = "block";
    }
};

const cambiarDisenio2 = () =>{
    const navTexto = document.querySelector("header .header__zonaNavegacion"); /** Seleccionamos como un selecctor de css */
    const navHambuguer = document.querySelector("header .header__zonaNavegacionHamb");

    if(navTexto.getAttribute("hidden")){
        console.log('Mostrar nav Textp');
        navTexto.setAttribute("hidden", true);
        navTexto.style.display = "flex";
        navHambuguer.removeAttribute("hidden", true);
        navHambuguer.style.display = "none";
    }
};

const onresize = () =>{

    if(window.innerWidth <= 600){
        cambiarDisenio();
    }else{
        cambiarDisenio2();
    }
};

