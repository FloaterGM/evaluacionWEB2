//1. URI PARA DONDE VOY
const URI='https://accounts.spotify.com/api/token'

//2. alamceno los datos que voy a enviar
let dato1='client_id=e92480987bb24820bb03afd3755c4113'
let dato2='client_secret=9c7b5f0c47924835b5b726dfda90cc01'
let dato3='grant_type=client_credentials'

//3 configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. COnsumir el servicio
export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())

}