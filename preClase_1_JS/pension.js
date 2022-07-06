let edadUsuario = 50
let semanasAcumuladas = 500


    if(edadUsuario>60 && semanasAcumuladas>=750){
        console.log("Felicidades ya puedes pensionarte tienes", i )
    }else{
        console.log("Sigue trabajando")
    }


let clima="lloviendo"


if(clima=="lloviendo"){
    console.log("Ve una pelicula")
}else{
    console.log("Pasea a tu perro")
}

let operacionCajero = 3

switch(operacionCajero){
    case 1: 
        console.log("Consulta de saldo");
        break;
    case 2: 
        console.log("Retiro");
        break;
    case 3:
        console.log("Transferencia");
        break;
    case 4:
        console.log("Pago de servicio");
        break;

    case 5:
        console.log("Movimientos");
        break;

    default:
        console.log("Salir");
        break;
}