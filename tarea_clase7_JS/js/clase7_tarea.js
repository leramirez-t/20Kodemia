// * Ejercicio 1 
// * Realizar una función que reciba como parametro 1 array de numeros
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array 

var arrTest=[1,2,3,4,18]

// console.log(arrTest)
const modArr = (arrPar)=>{
    arrTest.forEach(element=>{
        // console.log(element)
        element%2==0 ? console.log(element) : null
    })

}

modArr(arrTest)


/**
* Ejercicio 2 *Opcional
* Función que reciba como parámetro una array de strings
* y devuelva el primer y último carácter de cada string
* p.ej.
* -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
*
* Pista / Hint, debemos iterar el array */

var arrText = ['hola', 'mundo']

const flCaracter = (arrCaracter)=>{
    arrCaracter.forEach(element=>{
        var initials=element[0]+element[1]
        console.log(initials)
    })
}

console.log(flCaracter(arrText))