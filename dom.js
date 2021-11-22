/* ejercicio1.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
'use strict'
function ejecutar(){
  console.log('funciona')
  //getElementById
  //let iNombre =document.getElementById("iNombre") // Llama al dom y crea una referncia al campo de texto
  //console.log(iNombre.value)
  //let campos = document.getElementsByTagName('input') //Coge todos los input en este caso
  //console.log(campos)
  let campo = document.getElementsByTagName('input')[2] //Coge solo el input que esta en la posicion 2 del array empieza en 0
  console.log(campo.value)
  let p =document.querySelector('.c1') //solo coge el primero
  console.log(p.innerHTML)
  let spans =document.querySelectorAll('.c1 span') //array de span que etan dentro de la etiqueta que lleva la clase c1
  console.log(spans)

  //document.getElementsByName

  //MODIFICAR DOM
  spans[1].innerHTML='¡VIVA LA PEPA!'
  console.log(spans[1])


  //Modificar atributos de estilo
  spans[0].style.color='blue'
  spans[0].style.fontsize='20pt'
  
 
  setInterval(mover,100)
}
let posicion=0
function mover() {
  console.log('TRON')
  let mover= document.getElementById('mover')
  mover.innerHTML='Me muevo jeje'
  mover.style.left =`${posicion}px`
  posicion+=10
  
  
}

function construir() {
  console.log("construir")
  let div=document.getElementsByClassName('borde')[0]
  //console.log(div)
  //div.innerHTML='<p>Este es un texto <span class=negrita>en negrita</span>.</p>'
  let p= document.createElement('p') //Crear elemento
  div.appendChild(p) //Le decimos a div que p es su hijo
  let nodoTexto=document.createTextNode('Este es un texto...')
  p.appendChild(nodoTexto)

  let span= document.createElement('span')
  let nodoTexto2=document.createTextNode('en negrita')
  span.appendChild(nodoTexto2)
  p.appendChild(span) // appendChild lo añade al final
  
  span.classList.add('negrita') //añadir clase a la etiqueta span
  span.classList.add('borde')


  let img = document.createElement('img')
  div.insertBefore(img,p)
  img.setAttribute('src','imagen.jpeg')
  img.classList.add('pequena')

  //let insertedNode = parent.insertedNode(nuevonodo, nodo donde queremos ponerlo)

}
function destruir() {
  let p=document.querySelector('.borde p')
  //p=documentsByTagName('p')[2]
  //p=documentsByClassName('borde')[0].getElementsByTagName('p')[0]
  //console.log(p.innerHTML)
  //let borrarp =document.querySelector('')
  p.remove() //lo quita del elemento al que pertenece

}

function destruirTodo() {
  let div = document.getElementsByClassName('borde')[0]
  while (div.firstElementChild) //mira si tiene un primer elemento y si tiene lo borra
  {
    div.removeChild(div.firstElementChild) //eliminar elemento (eliminar el primer elemento de la variables div)
  }
}