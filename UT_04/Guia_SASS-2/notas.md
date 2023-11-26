# Para emparejar compilador
- $ sass --watch sass/styles.scss css/styles.css
            (equivale a:)
- $ sass --watch sass:css

## Con sass podemos transcompilar codigo a css
- Podemos usar variables
- Podemos simplificar la sintaxis del css
- Podemos usar funciones 

### funciones
- @mixin nombre-funcion($parametro1[: valor], $parametro2[: valor]){
    //impelmentamos código
}

### importacion de funciones
div{
    @include nombre-funcion(); // se aplica el codigo declarado
}

## Importacion
- ejemplo:
* Nombre del archivo 
    - debe empezar por barrabaja
    - la extensión es .scss
_archivo_con_varables.scss
* Importacion del archivo
@use "nombre_archivo"

### Se recomienda tener un archivo independiente con todas las variables necesarias
### Se recomienda una estructura que permite escalabilidad

