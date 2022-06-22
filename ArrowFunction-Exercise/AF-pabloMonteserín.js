/* https://pablomonteserin.com/curso/javascript/arrow-functions/*/

/** 
 Formas de definir una Arrow Function:

 -----> nombre de la función = parámetros => cuerpo ó valor devuelto.<-----
 */ 

// Sin parámetros:

const saludar = () => {
    console.log('Hola')
}
saludar();

// Con un parámetro:

const multiplicar1 = param => {
    const resultado = param * 2 ;
    console.log(resultado)
}

const multiplicar2 = (param) => {
    const resultado = param * 2;
    console.log(resultado)
}

multiplicar1(4);
multiplicar2(4);

// Multiples parametros:

const multiplicar = (x, y) => {
    const resultado = x * y;
    console.log(resultado);
}

// multiplicar(2, 3);

// Solo con return:

const multiplicar4 = (x , y) => x * y;
    
const valor = multiplicar(2,3);

console.log(valor);

/* Ejercicios: Resolver con funciones */

/**
 * 1. Crear y llamar a una función que recibe un número y calcula su cubo.
 */

const calcularCubo = (numero) => numero ** 3 ;

const resultado = calcularCubo(7);

console.log(resultado)

/**
 * 2. Crear y llamar a una función que recibe la velocidad en Km/hora y la muestra en metros/hora.
 */

const deKmsaMtrosPorHora = (medida) => medida * 1000;

const conversion = deKmsaMtrosPorHora(3);

console.log(conversion);

/**
 * 3. Crea y llamar a una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.
 */

const superficieRectangulo = (area , base) => {
    const superficie = area * base ;

    return superficie ;
}

const resultado = superficieRectangulo(4,5);

console.log(resultado);

/**
 * Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.
Area triángulo = base*altura/2
 */