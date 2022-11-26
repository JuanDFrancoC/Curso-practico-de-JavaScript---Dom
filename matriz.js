
let matriz = document.querySelector(".matriz");

for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        console.log(i+j);
        let nuero = i * j;
        matriz.innerHTML="<p>"+nuero+"</p>";
    }
}

/* no pude terminarlo en esta ocacion, sera para la proxima */