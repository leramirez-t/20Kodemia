//EJERCICIO 1

/*
    Función que pida una palabra al usuario
        Invierta la palabra y la retorna, almacenamos ese retorno en una variable y al 
        interpolamos en un alert usando template literals reversedString('hola') -> 'aloh'
*/


let requestWords = prompt("Ingrese 1 palabra");

console.log(requestWords)

alert(requestWords)


let changeWords=requestWords.split('')

console.log(changeWords)

let reverseWords=changeWords.reverse()
console.log(reverseWords)

let unionWords=reverseWords.join('')
console.log(unionWords)


//EJERCICIO 2

/**
    Función que pida 3 numeros como parametro
        2 números obligatorios y 1 opcional con valor de 3 
        Arroje la suma de esos 3 números
        Posibles resultados
            -> addThreeNumbers(3,4,5) -> 12
            -> addThreeNumbers(3,4) -> 10
            -> addThreeNumbers(3) -> 'Faltan datos'
            -> addThreeNumbers() -> 'Faltan datos'

 */








//EJERCICIO 1