import {obtenerCanciones} from './servicioGenerarCanciones.js'

import {pintarCanciones} from './pintarCanciones.js'

//llamar a la funcion genreraToken
let canciones=await obtenerCanciones()

//llamar la funcion pintarcanciones
pintarCanciones(canciones.tracks);
