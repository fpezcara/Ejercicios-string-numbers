// Ejercicio 38
// Declarar una variable nombre con tu nombre como valor
// Mostrar en consola la cantidad de letras que tiene tu nombre

let nombre = "Florencia";

console.log(nombre.length)

// Ejercicio 39
// Declarar una variable nombre con tu nombre como valor
// Declarar una variable apellido con tu apellido como valor
// Mostrar en consola el siguientes mensajes:
// Mi nombre es nombre y tiene nombre.length letras
// Mi nombre es apellido y tiene apellido.length letras
// Utilizar console.log() para cada mensaje
// Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido

let apellido = "Pezcara"

console.log(`Mi nombre es ${nombre} y tiene ${nombre.length} letras`)

console.log(`Mi apellido es ${apellido} y tiene ${apellido.length} letras`)

// Ejercicio 40
// Declarar la variable texto con el siguiente valor: Usando el método
// Declarar la variable metodo con el siguiente valor: concat
// Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat

let texto = "Usando el método";
let metodo = "Concat";

console.log(texto.concat(" ", metodo));

// Ejercicio 41
// Declarar la variable texto y asignar el siguiente valor: HOLA MUNDO
// Mostrar en consola el contenido de la variable texto en minúscula
let texto2 = "HOLA MUNDO";
console.log(texto2.toLowerCase());

// Ejercicio 42
// Declarar la variable texto y asignar el siguiente valor: hola mundo
// Mostrar en consola el contenido de la variable texto en mayúscula
let texto3 = "hola mundo";
console.log(texto3.toUpperCase());

// Ejercicio 43
// Declarar una variable texto con el siguiente valor: the dark knight
// Declarar 3 variables en una línea con los siguientes nombres:
// primerLetra
// segundaLetra
// tercerLetra
// Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
// Asignar a la variable segundaLetra el caracter número 4 del contenido de la variable texto
// Asignar a la variable tercerLetra el caracter número 9 del contenido de la variable texto
// Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
// Mostrar en consola el contenido de la variable resultado en mayúscula
// Deberías ver TDK como resultado
let texto4 = "the dark knight";

let primeraLetra = texto4.charAt(0);
let segundaLetra = texto4.charAt(4);
let tercerLetra = texto4.charAt(9);

let resultado = primeraLetra.concat(segundaLetra, tercerLetra);
resultado = resultado.toUpperCase();

console.log(resultado);

// Ejercicio 44
// Declarar la variable texto y asignar el siguiente valor: HOLA
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
// Mostrar en consola el contenido de la variable resultado en minúscula
// Deberías ver como resultado la palabra aloh
let texto5 = "HOLA";

let cuartaLetra2 = texto5.charAt(3);

let terceraLetra2 = texto5.charAt(2);

let segundaLetra2 = texto5.charAt(1);

let primeraLetra2 = texto5.charAt(0);

let resultado2 = cuartaLetra2.concat(terceraLetra2, segundaLetra2, primeraLetra2)

resultado2 = resultado2.toLowerCase()

console.log(resultado2)

// Ejercicio 45
// Declarar la variable mensaje y establecer el siguiente valor: 'Ada Lovelace fue la ayudante de Charles Babbage.'
// Declarar la variable programadora
// Utilizar el método slice para obtener el nombre Ada Lovelace del texto en la variable mensaje y asignarlo a la variable programadora
// Utilizar la variable programadora y la concatenación de textos para mostrar en consola el siguiente mensaje:
// "¡Ada Lovelace la primer programadora de la historia!

let mensaje = "Ada Lovelace fue la ayudante de Charles Babbage";

let programadora = mensaje.slice(0, 12);

console.log(programadora);

