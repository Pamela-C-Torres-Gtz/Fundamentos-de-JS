# Primeros pasos en JavaScript
--------------------------------

## Índice


- [Variables](#variables)
- [Strings](#strings)
- [Números](#números)
- [Funciones](#funciones)
- [El alcance de las Funciones](#el-alcance-de-las-funciones)
- Objetos
- Destructura de Objetos
- Parametros como referencia o como valor
- Comparaciones en JavaScript

******

#### Cada uno de los puntos cunta con una breve descripción e imagen del ejercicio, estos se pueden ver con el Inspector de la consola de Crhome.

*****

## Variables

**Definición:** 

Una variable es un elemento que se emplea para almacenar y hacer referencia a un valor que queremos declarar. Las variables bajo la palbra reservada *(keyword)*  **let**.

**Nota**: *JS es un lenguaje levemente tipado, lo que significa que no hay nada que diga que la variable deba de tener un tipo de dato universal.*

*Nosotros debemos de tener bien claro que tipo de dato es que vamos a utilizar al momento de codear.*

![Ejemplo de código](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase1.jpg)


****

## Strings

**Definición:**

Los strings son una cadena de texto para indicar que estamos usando una cadena se texto *String*, devemos de colocar el valor dentro de **comillas dobles** *( " " )* ó **comillas simples** *( ' ' )*

* Para los ejercicio se utilizaran algunos *metodos* como:

   - **toUpperCase:** Nos sirve para trsnformat un String a *Mayúsculas*.
   - **toLowerCase:** Nos sirve para transformar un String a *Minúsculas.*

**Nota:**
  **Método** es la capacidad de uso que tiene un objeto.

  Ejemplo de uso

  ![Ejemplo de Uso de Métodos](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2.jpg)

* También se utilizan los atributos:

   - **length** que nos indica la cantidad de *carácteres* que tiene un String.


* Para concatnetar *(Unir)* dos Strings, se utiliza el simbolo de **+**.

* Para invocar *(Llamar)* una función se usa **( )**

**Nota:**
**charArt( ):** Nos sirve para posionarnos en un caracter de algún String.

**Parametro:** Se usa para mandar llamar valores a una *Función*.

**Atributos:** Son valores adicionales que configuran los elementos de diversas formas para cumplir con los criterios del usario.

**Función:** Es el pilar fundamental de JavaScript, es un conjunto de sentencias que realiza una tarea o calcula un valor.  Para *usar una funcion* se debe definir en algún lugar del ambito desde el cúal posteriormente podremos llamarla.

Ejemplo de uso:

![Ejemplo de Uso de Métodos](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2-2.jpg)

**Interpolación de texto** Son literales de Texto que habilidan el uso de *expresiones incrustadas*.  Se utilizan para cadenas de texto *(String)* de más de una línea con el siguiente caracter  de comillas invertidas seguido del signo de pesos y corchetes **` $ { } `**.

Ejemplo de uso 

![Ejemplo de atributos y Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2-3.jpg)

**Substring** es un método que devuelve un solo conjunto de un objeto.

ejemplo de uso

![Ejemplo de atributos y Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2-4.jpg)

****

## Números

Los valores de tipo número, son pedazos de información númerica que se representa con el tipo ``number``.

Esto incluye números positivos, negativos, enteros y decimales. De igualmanera tambíen utiliza operadores matemáticos como: *+*, *-*, *x* y */*.

También podemos utilizar **Incremento** y **decremento** con este tipo de valores, los podemos representar de la siguiente mánera **+1** y **-1**.

**Nota:** La cantidad a Incrementar o decrementar puede ser cualquier valor que nosotros necesitemos, no forsozamente tiene que ser *1*, aunque es el más común.

****

## Funciones

**Definición:**

Las funciones son pedazos de código reutilizables.  Se pueden *definir* e *invocar* cuando sea necesario.

- Para **definir** un función se utiliza la palabra resevada *function*.
- Se **delimita el cuerpo de la función** usando corchetes de llaves *{ }*.
- Los **parámetros** de una función son variables que se le pasan a dicha función escribiendolos dentro de *( )*.
- Para **llamar a la Función** solo colocamos fuera de las *{ }* el **El mismo nombre con el que la declaramos**.

Ejemplo de uso:

![Ejemplo Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase4.jpg)

**Nota:** 
El definir funciones adecuadamente, nos sirve para reutilizar el código de manera efectiva en futuras ocasiones.

- Para que la función sea **re-utilizable** le tenemos que pasar los parametros que deseamos en la *defición de la función* y al *invocarla*.

En este ejemplo se demustra como se puede re utilizar la función.

![Ejemplo Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase4-2.jpg)


### Observaciones

**JavaScript** es un lenguaje devilmente tipado, esto quiere decir que intenta ejecutar el código, sin importar si los párametros que le pasemos a la función estén invertidos o incluso incompletos.

Ejemplo

![Ejemplo Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase4-3.jpg)

*******

## El alcance de las Funciones

A lo que se refiere este apartado es que si una *variable no se encuentra definida* dentro del cuerpo de una función se le considera como **una variable global**.  

Ejemplo de variable global

![Ejemplo variable global](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase5.jpg)

Eso significa que se puede acceder desde cualcuer función. También significa que la variable *se le asigna al objeto global*, y este objeto global va a depender de donde estemos usando *JavaScript*, por ejemplo:

  - Se puede ejecutar en un servidor mediente el entorno de *Node.js*.

  - Se puede ejecutar en el navegador mediante el objeto global *window*

Ejemplo

![Ejemplo objeto global](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase5-2.jpg)

Pero en caso contrario, *una variable definida* dentro del cuerpo de una función es una **variable local.**

 
**Nota:** en *JavaScript* se puede utilizar el mismo nombre para una variable global  y para el parámetro de una función con un alcance local.

Ejemplo

![Ejemplo objeto global](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase5-3.jpg)

******