# Estructuras de Control y Funciones
--------------------------------

## Índice


- [Condicionales](#condicionales)
- [Funciones que retornan valores](#funciones-que-retornan-valores)
- [Funciones flecha "Arrow functions"](#funciones-flecha-"arrow-functions")
- [Estructuras repetivas: for](#estructuras-repetivas:-for)
- [Estructuras repetivas: while](#estructuras-repetivas:-while)
do-while y switch

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


# Estructuras repetivas: for

El bucle for se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir la instruccion en for lo que tenemos que realizar es **for** seguido de *( )* y *{ }*.

Entre las *{}* va el código que queremos que se repita.

Entre *( )* va tener 3 partes, la parte **inicial**, la parte de la **condición** y la parte del **incremento**, las siguientes instrucciones en una sóla línea:

 Dentro del ciclo *for* se usa un **contador** para llevar la cuenta de cuantas veces se esta ejecuando o nuestro programa. Ese contador generalmente se llama **i**, que se encuentra en nuestra parte **inicial**, se inicializa en *1*, pero tambien se puede inicializar en *0*. Y al final cerramos con **;**.

Lo primero será la variable que se inicializa es decir desde cuando queremos que empiece la instrucción **(let i=1)**, luego de esto irá punto y coma **;**

Luego escribiremos hasta dónde queremos que se repita la instrucción (i<=365) luego de esto irá punto y coma ;

Posterior a eso irá cuánto será el incremento con que se deba repetir ejemplo (i++, i=i+2,i=i+3)

Quedando así: 

``for (let i = 1; i <= 365; i++)``
 
Dentro de las  llaves *{ }* creamos nuestra variable y despues del *=* usamos el operador matematico **Math**

Quedando así:

``let random = Math.random()``

Despues realiazimas una condición, preguntando que este *randon* el 25% de las veces aumenta de peso, luedo podemos usar un **else** que ejecute solo un 50% de las veces en lugar del 75% restante.

Es importante despues del **if** y el **else if** colocar la logica de aumento de peso o de aldegazar.

Quedando así:

``if (random < 0.25) {``
     ``aumentoDePeso(pame)``
  ``}else if (random < 0.5) {``
    ``adelgazar(pame)``
 `` }``

  Para que esto se pueda ejecutar de manera adecuada creamos nuestras Arrow function y despues las mencionamos dentro de nuestro **condicional**.

``const aumentoDePeso = persona => {
    persona.peso += INCREMENTO_PESO
}``


``const adelgazar = persona => {
    persona.peso -= INCREMENTO_PESO
}``


# Estructuras repetivas: while

While nos permite repitir un código hasta que se cumpla una condición.

Para escribir la sintaxis del ciclo *while*, primero escribimos la palabra reservada **while** seguido de *( )* y *{ }*.

Quedando así: 

``while ( ) {``

``}``

Es importante recordad que miestras sea verdad nuestra **condición** que se encuentra dentro de *( )*, entonces todo lo que tengamos dentro de *{ }* se repetira.

En caso de tener dos valores para nuestra codición podemos hacer uso de *Estructura condicional **if***

Quedando así:

``while (pame.peso > META) {``      
    ``if (comeMucho()) {``        
      ``aumentoDePeso(pame)``        
     ``}``      
      ``if (realizaDeporte()) {``        
        ``adelgazar(pame)``       
     ``}``      
 ``}``    
 

 En caso de querere contar por ejemplo días, meses, horas, etc, transcurridos declaramos nuestra variable y la llamas alfinal de nuestro *if*

Es importante recordar que para poder ejecutar correctamente el While se deben declarar nuestras constanstes, variables y arrow function antes de las sentencia del while.

Quedando así:

``const INCREMENTO_PESO = 0.2;``      
``const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;``  
``const adelgazar = persona => persona.peso -= INCREMENTO_PESO;``    
``const comeMucho = () => Math.random() < 0.3;``     
``const realizaDeporte = () => Math.random() < 0.4;``    
``const META = pame.peso - 3;``   
``let dias = 0;``

para revisar ejmemplo revisar clase 14.



**Nota**

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.