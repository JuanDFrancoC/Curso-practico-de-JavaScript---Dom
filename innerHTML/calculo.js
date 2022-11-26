const valor1 = document.querySelector('#calculo1');
const valor2 = document.querySelector('#calculo2');
//const btnCalcular = document.querySelector('#btnCalcular');
const resultadospam = document.querySelector('.resultadospam');

function sumar(){
   let resultado = parseInt(valor1.value) + parseInt(valor2.value);
   console.log(resultado);
   resultadospam.innerHTML = '<p>'+resultado+'</p>';
   
}