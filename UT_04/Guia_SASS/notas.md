# Para emparejar compilador
- $ sass --watch sass/styles.scss css/styles.css

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

