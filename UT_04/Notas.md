## HTML : Hyper Text Markup Language

### Lenguaje de marcado.
- Sencillo
- No hay variables
- No es compilado
- Lo interpreta el navegador

### Diferentes interpretes para cada navegador:
- Chrome: (WebKit) Blink
- Firefox: Gerko
- Edge: Edge HTML
- Safari: Wekiy

### Interpretes JS
- Chrome: V8
- Firefox: Spider Monkey
- Edge: Chakra
- Safari: Nitro

### NodeJS
#### Permite ejecutar JS en nuestra máquina (fuera del navegador)


## TRABAJAREMOS CON HTML5
### Incorpora etiquetas semánticas
- Cuidar y organizar mejor la esrtructura del Body.
- Motores de búsqueda pueden saber el contenido de la página.
#### header
- se comporta como un div
#### footer
- se comporta como un div
#### section
- se comporta como un div más que nadie
#### strong
- semantica de <b>
#### mark
- semantica de <u>

### El objetivo principal es la separación ectructural y visual
#### Estructural -> HTML
#### Visual -> CSS

## Etiqueta !Doctype
### Indica al navegador el tipo de archivo
## Etiqueta html
### Engloba todo el contenido del html
### Atributo lang="es" selecciona lenguaje

## Etiqueta head
### Engloba los metadatos
#### charset
#### name
#### content
### carga el css
### puede cargar el js (no recomendado)
- Se puede dar el caso de que queramos cargar un 
elemento que aun no haya sido definido en la gerarquía

## Principales etiquetas
- h1 /h6
- p
- a (href)(name)
- ul
	- li
- ol
	- li
- table
	- tr
	- td
	- th
	- caption
	- tfooter
	- tbody

## CSS

### Especificidad en CSS
##### Asterisco
- Menos específico
- Abarca a todo el documento
- Ejemplo, una fuente que se use en toda la página

#### Elementos y pseudoelementos como el Body, Head, Footer
- Aplican a todos esos elementos que se concreten.

#### Clases, atributos y pseudoclases
- Aplica a los elementos con cierta clase CSS
- Clases inventadas.
- Representadas en CSS con .

#### id
- Elementos con ese id único
- Representados en CSS con #

#### inline
- Acociados al atributo HTML style"estilo_correspondiente"


#### Etiqueta CSS !important 
- El más predominante cuando hay varios estilos (desaconsejado)



### Modelo de cajas (margin, border, padding, contenet)

## Especificidad

### Para haer referencia a todos los p que estén dentro de un div
div p{
//estilo
}

### Para hacer referencia a todos los hijos directos de div
div>p{
// estilo
}


## Modelo de cajas
### Content
- Indica el contenido
### Padding
- Distancia entre el contenido y el borde de la caja
### Border
- Entre padding y margin
### margin
- Entre el border y el padre (body)

## Posición
### Se debe indicar el tipo de posicion
- position: absolute; (toma el uñtimo elemento posicionado)
- position: relative; (respecto a su posición original)
- position: static, (por defecto).

### Propiedades de posicionamiento
##### Orden: Top right left bottom

##### Atributo z--index
- Marca la prioridad en las diferentes capas


## Elementos display: block (div)
### Ocupan todo el ancho del body

## Elementos display: inline (span)
### Seposicionan en linea minetras haya espacio

## Elementos display: flex
- Se le debe poner al contenedor
### Los elementos de dentro se comportan como un span (en linea)
### felx-direction: column -> Dispone los elementos en columna
### felx-direction: row -> Dispone los elementos en fila

### aling-items: center -> elementos centrados
### aling-items: flex-start -> elementos al principio
### aling-items: flex-end -> elementos al final

### justify-content: (center, start, end, space-arownd)






