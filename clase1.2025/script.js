let formulario = document.getElementById("Formulario");

formulario.addEventListener("submit",function(e){
    e.preventDefault();

    let nombre= document.getElementById("nombre");
    let apellido= document.getElementById("apellido");
    let edad= document.getElementById("edad");
    let url = document.getElementById("url");

    let divPersona= document.getElementById("card-contenedor");


    divPersona.innerHTML =

    `
     <div class="card">
        <img src =${url.value} alt="https://picsum.photos/id/22/367/267"/>
        <h2>${nombre.value} ${apellido.value}</h2>
         <p>Edad: ${edad.value}</p>
     </div>
    `

   // console.log(nombre.value, apellido.value, edad.value, url.value)
    console.log("Se agrego card");
})