//Condicional múltiple: switch
//ejemplo decir el oroscoropo del usuario utilizando un sitio en internet

let signo = prompt('¿Cúal es tu signo?');

switch (signo) {
    case 'aries':
        console.log('Aries ofrece la energía y el desparpajo de un niño, que se mueve la impetuosidad y el coraje que le confiere Marte, su planeta regente. Quienes nacen con el Sol en este signo de Fuego son personas autosuficientes, inteligentes y vitales, herederas de un poderoso don de mando para el liderazgo de grupos.')
        break
    case 'tauro':
        console.log('Será una jornada excesiva de preocupaciones y responsabilidades, trate de confrontar de a un tema por vez y logrará obtener muy buenos resultados en lo que haga.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Mientras usted se siga negando al triunfo en todos los sentidos, podrían retrasarse o no fluirán como esperaba esas metas que se ha propuesto.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Seguramente se sentirá relajado, ya que se ha librado de viejas ataduras y dependencias que lo limitaban para tomar una propia determinación.')
        break
    case 'virgo':
        console.log('Sea consciente y no postergue para mañana lo que pueda hacer hoy. Relájese, ya que cumplirá con todas las metas que se ha propuesto alcanzar.')
        break
    case 'libra':
        console.log('Encuentre las soluciones precisas a los inconvenientes financieros que están apareciendo últimamente. Relájese, el resto de los problemas se irán arreglando solos.')
        break
    case 'escorpio':
        console.log('No permita que sus curiosidades inoportunas lo detengan en su avance. No renuncie y siga adelante con todos los proyectos que se propuso hace tiempo')
        break
    case 'sagitario':
        console.log('Se acerca una etapa donde podrá generar una transformación total en su vida. Recuerde que los cambios siempre nos conducen a un nuevo aprendizaje.')
        break
    case 'capricornio':
        console.log('Si está con problemas, debe abandonar todas las ideas pesimistas. Recuerde que en otras oportunidades pudo superar obstáculos peores y salir beneficiado.')
        break
    case 'acuario':
        console.log('Durante esta jornada, se sentirá un poco confundido. No sabrá cómo manejar una situación en la que tendrá que elegir entre dos caminos diferentes')
        break
    case 'pisis':
        console.log('Sepa que los logros futuros dependerán de su actual creatividad. Proyéctese para resolver sobre la marcha todas las situaciones nuevas que puedan surgir.')
        break
    case 'leo':
        console.log('No dude en confiar en sus amigos. Sepa que ellos lo ayudarán a cimentar su futuro, ya que lo apoyarán en todo lo que necesite para su vida.')
    default:
        console.log('Lo sentimos no encontramos tu signo sodiacal  :(')
        break
}