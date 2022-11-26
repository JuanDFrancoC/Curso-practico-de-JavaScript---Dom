/* Uso de bucle While */

let respuesta;
while(respuesta != 4){respuesta = prompt('cuanto es 2 + 2');}

/*---------------------Como recorrer un array y mostrar su contenido------------------------- */

function array(frutas){
    for(let i = 0; i<frutas.length; i++){
        console.log(frutas[i]);
    }
    
}

array(['Manzana','Pera','Banana']);

/*----------------------Convertir objeto en array para asi recorrel los valores de un Objeto------------------------ */
function obj(juanFranco){
    let arraydeObjeto = Object.values(juanFranco); /*asi convertimos un objeto en un array accediendo a sus valores y nos devuelve un array*/
    for(let i = 0; i<arraydeObjeto.length; i++){
        console.log(arraydeObjeto[i]);
    }
}

obj({Nombre:'juan',Edad:22,ComidaFraborita:'Bandeja Paisa'});



/*----------------------como usar un funcion para y un condicional para ver el contenido de un objet
segun el parametro que se le envie----------------------- */

function Estudiante(Tipo){
    if(tiposEstudiante[Tipo]){
        console.log(tiposEstudiante[Tipo]);
        return;
    }
  console.warn("Ese estudiante NO exite");
}

const tiposEstudiante = {
    Free:"solo puede ver un curso",
    Expert:"puedes tomar cursos todo el año",
    ExperDuo:"Tú y otra persona pueden tomar los cursos",
}

/*Para llamr un objeto podemo usar corchete como si fuese un array o el nombre del valor */