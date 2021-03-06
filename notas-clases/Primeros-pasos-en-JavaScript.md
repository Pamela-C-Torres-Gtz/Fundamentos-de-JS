# Primeros pasos en JavaScript
--------------------------------

## Índice


- [Variables](#variables)
- [Strings](#strings)
- [Números](#números)
- [Funciones](#funciones)
- [El alcance de las Funciones](#el-alcance-de-las-funciones)
- [Objetos](#objetos)
- [Desestructura de Objetos](#desestructura-de-objetos)
- [Parametros como referencia o como valor](#parametros-como-referencia-o-como-valor)
- [Comparaciones en JavaScript](#comparaciones-en-javascript)

******

#### Cada uno de los puntos cuenta con una breve descripción e imagen del ejercicio, estos se pueden ver con el Inspector de la consola de Crhome.

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

Los strings son una cadena de texto para indicar que estamos usando texto *String*, devemos de colocar el valor dentro de **comillas dobles** *( " " )* ó **comillas simples** *( ' ' )*

* Para los ejercicios utilice algunos *metodos* como:

   - **toUpperCase:** Nos sirve para trsnformat un String a *Mayúsculas*.
   - **toLowerCase:** Nos sirve para transformar un String a *Minúsculas.*

**Nota:**
  **Método** es la capacidad de uso que tiene un objeto.

  Ejemplo de uso

  ![Ejemplo de Uso de Métodos](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2.jpg)

* También utilice el atributo:

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

**Interpolación de texto** Son literales de Texto que habilitan el uso de *expresiones incrustadas*.  Se utilizan para cadenas de texto *(String)* de más de una línea con el siguiente caracter  de comillas invertidas seguido del signo de pesos y corchetes **` $ { } `**.

Ejemplo de uso 

![Ejemplo de atributos y Funciones](https://github.com/Pamela-C-Torres-Gtz/Fundamentos-de-JS/blob/master/src/img/clase2-3.jpg)

**Substring** es un método que devuelve un solo conjunto de un objeto.

Ejemplo de uso

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

## Objetos

**Definición:** Un *objeto* es una colección de propiedades y/o atributos. (reune caracteristicas que nos interesa saber)

**Una pripiedad** es una *asociación* entre un nombre y un valor.

**Un atributo** se componen  de un clave *(key)* y un valor *(Value)*, que se separan entre sí por dos puntos  *:*

**Un valor de una propiedad** puede ser una función y pueden ser de tipoi string, n´´umero, booleano, etc.

Los objetos se definen delimitados por llaves **{ }**.

*********

## Desestructura de Objetos

La *Desestructa de objetos* n o es mas que otra forma de acceder a los atributos de los objetos.  Y se utiliza generalmente para no duplicar las variables al momento de untroducción una *key* como parametro.

********

## Parametros como referencia o como valor

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función, para evitar esto en js podemos crear un objeto diferente.

 Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona. (que es mi objeto del ejercicio)

 *****
 ## Comparaciones en JavaScript

 Existen varias amaneras de comparar varibles y objetos dentro de js.

 * 1. se le asigna a una variable un valor numerico y a otra un string. Para poder compararlos debemos agregar dos signos de igual **(==)**. Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

 * 2. Cuando se utiliza operaciones por buena practica es recomendable usar tres simbolos iguales **(===)**.  Esto permite que JS no iguale las variables que son de distito tipo, pero que si las compare.

 Los tipos de datos más comunes (primitivos) son:

1. Boolean
2. Null
3. Undefined
4. Number
5. String


**Nota**
Cuando comparamos objetos en js tanto con el  *(==)* o con el *(===)*. lo que hace JS es preguntar por la referencia a la variable que estamos usando.

lo que se puede hacer es realizar un objeto literal desglozandolo y utilizando los **...** los tres puntos del ejemplo anterior.