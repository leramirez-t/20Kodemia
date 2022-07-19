/**
 * 
 * 
 * Dado el siguiente lleva a cabo las las operaciones indicadas
*/

const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};
 
 
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones

// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones

// player.vitalEnergy <= 0 ? console.log("Has perdido") : console.log("Sigues vivo")

// let calculoVital=0
// let restaVital=parseInt(prompt("Ingresa el daño de la energía vital por golpe critico"))


// if(player.vitalEnergy==true){

//     calculoVital = player.vitalEnergy - restaVital

//     console.log(`Tu Energía Vital es ${player.vitalEnergy}`)
//     console.log(`El daño por golpe critico fue de ${restaVital} y tu Energía Vital actual es ${calculoVital}`)
    

//     calculoVital<=0 ? console.log(`Has perdido tu estado de vida es ${isAlive=false}`) : console.log("Sigues vivo")
// }else{
//     console.log("Sin Energía Vital")
// }



 
// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones
 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones



//=======================================================



/**
 * 
 * 
Dado el siguiente objeto realiza las siguientes operaciones 
Un log donde veamos la suma total de notas
Opcional - Un log donde veamos el promedio de las notas a dos decimales
Hint, use toFixed() method
https://www.programiz.com/javascript/library/number/tofixed


 * 
 * 
 */

// const grades = {
//     first_test: 7.5,
//     second_test: 10,
//     third_test: 6,
//    };

//    let addGrades = 0
//    let numGrades =0

//    for(promedio in grades){
//         addGrades += grades[promedio]
//         numGrades++

//    }

// let promGrades = addGrades/numGrades
// console.log(promGrades)

let mascotas ={
    raza: "gato",
    age: 1,
    name: "pelusa"
}

let std1 = Object.create(mascotas)

console.log(mascotas)

console.log(std1)

std1.name="grisa"