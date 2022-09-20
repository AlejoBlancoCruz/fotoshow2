export function cargafotos(texto) {
    fetch("images_list.json")
        .then(respuesta => respuesta.json())
        .then(contenido => {
            console.log(contenido);
            let fragmento = document.createDocumentFragment();
            document.getElementById("tarjetero").innerHTML = "";

            contenido.forEach((foto) => {
                const { FileName, FileSize, Height, Width, Keywords } = foto;
                if ((Keywords != null && Keywords.includes(texto)) || Keywords == null || texto == null) {
                let tarjeta = document.createElement("div");
                tarjeta.setAttribute("class", "tarjetas");
                //Cargando Foto
                let imagen = document.createElement("img");
                imagen.src = "imagenes/" + FileName;
                imagen.tag = "Foto:" + FileName;
                imagen.setAttribute("class", "foto");
                tarjeta.appendChild(imagen);

                // Cargando tamaño
                let fichero = document.createElement("div");
                fichero.innerHTML = "<strong>Fichero:</strong>" + FileName;
                tarjeta.appendChild(fichero);


                let alto = document.createElement("div");
                alto.innerHTML = "<strong>Alto:</strong>" + Height;
                tarjeta.appendChild(alto);

                let llave = document.createElement("div");
                llave.innerHTML = "<strong>Llave:</strong>" + Keywords;
                tarjeta.appendChild(llave);


                fragmento.appendChild(tarjeta);
                }

            })

            document.getElementById("tarjetero").appendChild(fragmento);
        })
}
