import { cargafotos } from "./libreria.js";

document.getElementById("carga").addEventListener('click',() =>{
fetch("carga_fotos.php")
.then(response => response.text())
.then(mensaje =>{
alert(mensaje);
cargafotos();
})
})

document.getElementById("busqueda").addEventListener("keypress",(event) => {
    if (event.key =="Enter"){
     cargafotos(document.getElementById("busqueda").value);
    };    
})