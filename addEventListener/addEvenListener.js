const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const valor1 = document.querySelector('#calculo1');
const valor2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const resultadospam = document.querySelector('.resultadospam');

 //Recibe dos argumentos: Nombre del evento y la funcion que necesitamos ejecutar
form.addEventListener('submit',sumar);

function sumar(event){ //event es un argumento que se envia por defecto cuando usamos un evento y lo podemos usar para hcer cosas
    console.log(event);
    event.preventDefault()//le decimos que al evento que se genere lo prevenga
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    console.log(resultado);
    resultadospam.innerHTML = '<p>'+resultado+'</p>';
    
}