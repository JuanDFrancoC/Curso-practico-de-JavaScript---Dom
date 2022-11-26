
ctrl + k + c puedo comentar cuando seleciono algo en js.


const input = document.querySelector('.input'); //por clase
const input = document.querySelector('#input'); //por id
const input = document.querySelector('input');  //por Etiqueta


//convierte en array a lo que tenga esa clase o id o etiqueta:
const input = document.querySelectorAll('input'); 

-------------------------------------------INER HTML-------------------------------

const h1 = document.querySelector('h1');

h1.innerHTML = 'Patito <br> FEO'; // Lo interpreta como html y lo mete dentro de la estiqueta de el h1

h1.innerText = 'Patito <br> FEO'; // innerTex lo interpreta todo en texto


--------------------------------------Atributos------------------------------------------

//De esta manera podemos leer el nombre de un atributo que necesitemos
<h1 pantalla="atributo">Manipulación del DOM básica</h1>
console.log(h1.getAttribute('pantalla'));


--------------------------------------Sobre escribir Atributo-----------------------

<h1 class="verde">Manipulación del DOM básica</h1>
const h1 = document.querySelector('h1');
console.log(h1.setAttribute('class', 'rojo'));

---------------------------------------Añadiendo y REMOVIENDO CLASES---------------------

//Manera de Agregar una clase o Removerla:
const h1 = document.querySelector('h1');
h1.classList.remove('verde');
h1.classList.add('rojo');

--------------------------------------Cambiar Valor de input----------------------

const input = document.querySelector('input');
input.value = "1234";

--------------------------------------Como crear una Etiqueta en js y ponerla dentro de un
Elemento de html----------------
<p class="parrafo"></p>
 const parrafo = document.querySelector('.parrafo');
 const crearIMG = document.createElement('img');
 crearIMG.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.pn');
 console.log(crearIMG);
 parrafo.append(crearIMG)//Apen guarda algo dentto de otra etiqueta, en este caso guarda la etiqueta que tenemos en crarIMG.//

 --------------------------- Evento de escucha addEventListener-----------------
 const btnCalcular = document.querySelector('#btnCalcular');
 //Recibe dos argumentos: Nombre del evento y la funcion que necesitamos ejecutar
 btnCalcular.addEventListener('click',sumar);
function sumar(){
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    console.log(resultado);
    resultadospam.innerHTML = '<p>'+resultado+'</p>';
    
}