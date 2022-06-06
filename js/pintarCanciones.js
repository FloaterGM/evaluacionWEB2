export function pintarCanciones(canciones){

    
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name);
        console.log(cancion.preview_url);
        console.log(cancion.album.images[0].url);

        //rutina para llenado
        let columna=document.createElement('div');
        columna.classList.add('col');

        let tarjeta=document.createElement('div');
        tarjeta.classList.add('card','h-100','shadow');
        tarjeta.setAttribute('style','margin-top: 2em; background-color: #454545;')

        let audio=document.createElement('audio');
        audio.classList.add('w-100');
        audio.setAttribute('controls','controls');
        audio.src=cancion.preview_url;

        let foto=document.createElement('img');
        foto.classList.add('w-100','img-fluid');
        foto.src=cancion.album.images[0].url;

        let popularidad = document.createElement('p');
        popularidad.setAttribute('style','color: white;');
        popularidad.textContent = "Popularidad: " + cancion.popularity + "%";

        let nombre = document.createElement('h4');
        nombre.classList.add('texto--tarjeta');
        nombre.textContent = cancion.name;

        //padres e hijos
        
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(popularidad);
        tarjeta.appendChild(audio);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);

    })

}