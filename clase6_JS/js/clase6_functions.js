//! Funciones
    
//EJEMPLO DE UNA FUNCION
function funcionSuma(){
    console.log("Esto es una funcion")
}

//INVOCAR O LLAMAR A LA FUNCION
//! DECLARAR UNA FUNCION NO LA EJECUTA

funcionSuma()


/*Practica

Declarar y invocar una funcion cualquiera
Recomendacion: Usar alguno de los ejercicios que se llevaron acabo en las clases anteriores*/


//SIN RETURN
// let gradosC=parseFloat(prompt('Proporciona la temperatura en grados Celsius'))
// let gradosF=0;


// function convertionFahrenheit(){
//     gradosF=(gradosC*1.8)+32
//     console.log(gradosF)
// }

// convertionFahrenheit()

//CON return

function imprimirMensaje(){
    //console.log("Esto es una funcion")
    // return "hola"

    let r=4;

    if(r===3){
        console.log("log1")
        return
    }else{
        console.log("log2")
    }
}

// console.log(imprimirMensaje())

// let saludo=imprimirMensaje()


//PRACTICA

/* Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals */

let gradosC=parseFloat(prompt('Proporciona la temperatura en grados Celsius'))
let gradosF=0;


function convertionFahrenheit(grados){
    gradosF=(grados*1.8)+32
    return gradosF
}

console.log(convertionFahrenheit(gradosC))