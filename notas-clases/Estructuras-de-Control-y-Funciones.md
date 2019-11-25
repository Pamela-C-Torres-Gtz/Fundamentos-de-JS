# Estructuras de Control y Funciones
--------------------------------

## Índice


- [Condicionales](#condicionales)
- [Funciones que retornan valores](#funciones-que-retornan-valores)
- [Funciones flecha "Arrow functions"](#funciones-flecha-"arrow-functions")
- Estructuras repetivas: for, while, do-while y switch

******

#### Cada uno de los puntos cuenta con una breve descripción e imagen del ejercicio, estos se pueden ver con el Inspector de la consola de Crhome.

*****

# Condicionales

**Definicion:** las condicionales nos permiten decidir si un código se ejecuta o no, también si introducimos un nuevo tipo de dato *boleano* casi siempre para poder determinar si su valor es verdadero o falso.

Para este se utiliza el condicional *(if)* y en muchas ocaiones anidado con el *(else)*

ejemplo:
``if (condicion) {``
`` } else (consicion){``

Esto **`${ }`** sellama **templatestream** y nos permite interpolar varibles.

******

# Funciones que retornan valores

Las funciones se pueden desglosar en funciones más pequeñas.

Para las comparaciones se pueden utilizar simbolos como mayor que y menor que  *>= y <=*.

**Return** detiene la ejecucón de una funcion y devuleve el valor de esa función.

Para indicar que una *variable* es no tan variable osea constante se declara con **const**.

**nota-Buenas practicas**
Para definir constantes es definirlas todas en mayusculas y separlas por guiones bajos.

******

# Funciones flecha "Arrow functions"

Las **"Arrow functions"** es una nomenclatura más corta para expresiones de funciones, y se deben definir antes de ser utilizadas.

**Nota:**
Cuando se utiliza Arrow F_unctions no es necesario escribir las palabras reservadas *function*, *return* ni las llaves *{ }*.

Las funciones anonimas se pueden asignar a variables que si tienen un nombre.

Otra forma de escribir funciones es con Arrow function, cuando definimos variables que son fucniones de preferencia se colocan como constantes. Y se puede ahorrar la palabra *function* y se sustituye con **=>**.

Con las Arrow functions cuando tenemos un solo parametro en la función se pueden oviar los parentesis, **( )**. Tambien si solo se va a *retornar* un solo valor JS nos permite quitar esa palabra reservada **return** y las llaves **{ }**, colocamos el resto de la función despues del signo de Arrow function **=>**.