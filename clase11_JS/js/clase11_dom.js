// ! Seleccionar elementos 
// ? Seleccionar por id 
// let test = document.getElementById('titulo');

// ? Seleccionar por tag -> Multiples coincidencias
// let test = document.getElementsByTagName('h1')

// ? Seleccionar por clase  -> Multiples coincidencias
// let test = document.getElementsByClassName('claseTest')

// ! Seleccion por query id, clase  y tag -> Unica Coincidencia

// ? Seleccionar por id 
// let test = document.querySelector('#titulo') 

// ? Seleccionar por clase 
// let test = document.querySelector('.claseTest') 


// ? Seleccion por tag 
// let test = document.querySelector('h1') 

// ! Seleccionar multiples conincidencias por query
// let test2 = document.querySelectorAll('h1')

// * -------------------------------------
// ? 1 Seleccionar el elemento 

let parrafo = document.getElementById('parrafo')
console.log(parrafo)

// ! Setear atributo
    // setAttribute(<nombre attributo>,<valor>)
    parrafo.setAttribute('hidden', true)

// ! Obtener  atributos
    // getAttribute(<nombre atributo>)
    console.log(parrafo.getAttribute('id'))

// ! Comprobar la existencia de atributos
    // hasAtrribute(<nombre atributo>)
    console.log(parrafo.hasAttribute('hidden'))

// ! Eliminar atributos
    // removeAttribute(<nombre del atributo>)
    parrafo.removeAttribute('hidden')







/**
* Practica
* 1. Agregar en nuestro index.html
*  1.1. Un elemento lista <ul></ul> o <ol></ol>
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'
*/

// var list = document.createElement(ul)

// var nodeList = document.createElement(li)

// var listSuperior = list


// Ejercicio 1 - Repicar este markup (HTML) usando JS
 
// <ul id="menu" class="menu">
//        <li class="item__menu">Home</li>
//        <li class="item__menu">Products</li>
//        <li class="item__menu">About Us</li>
//    </ul>


var list = document.createElement(ul)

var nodeList = document.createElement(li)
var nodeList = document.createElement(li)
var nodeList = document.createElement(li)

var listSuperior = list.appendChild(nodeList)
var listSuperior = list.appendChild(nodeList)



// Dado un arreglo de koders
// 1. Generar una lista con la clase "koders"
// 2. Agregar a cada koder en esa lista
// 3. A todos los koders agregarles la clase "item koder"
// let koders =  [
//    {
//        name: 'Ferdinand',
//        lastName: 'Bracho',
//        age: 30,
//        generation: 2,
//        modulos: ['js','python', 'git'],
//    },
//    {
//        name: 'Alfredo',
//        lastName: 'Pi',
//        age: 20,
//        generation: 10,
//        modulos: ['Node', 'Cloud'],
//    },
//    {
//        name: 'Ale',
//        lastName: 'Pa',
//        age: 30,
//        generation: 1,
//        modulos: ['React'],
//    }
// ]