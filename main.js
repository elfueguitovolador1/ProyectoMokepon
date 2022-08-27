let ataqueJugador 
let ataqueEnemigo
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='none'
    
}
function seleccionarMascota(){
    
    let inputeltomi = document.getElementById('eltomi');
    let inputelmati = document.getElementById('elmati');
    let inputelqueso = document.getElementById('elqueso');
    let nombreMascota = document.getElementById('mascota-jugador');


    if(inputeltomi.checked){
        alert('seleccionaste a eltomi')
   nombreMascota.innerText = 'eltomi'
    } else if(inputelmati.checked){
        alert('seleccionaste a elmati')
       nombreMascota.innerText = 'elmati'
    }else if(inputelqueso.checked){
        alert('seleccionaste a elqueso')
       nombreMascota.innerText = 'elqueso'
    }else alert('debes seleccionar algo!')
    seleccionarMascotaEnemigo()
    let ataqueSeleccionado =document.getElementById('seleccionar-mascota')
    ataqueSeleccionado.style.display='none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='block'
}
 function mostrarImagenMascota(){
    
    let botonImageneltomi = document.getElementById('imagen-eltomi')
    let botonImagenelmati = document.getElementById('imagen-elmati')
    let botonImagenelqueso = document.getElementById('imagen-elqueso')
        
    botonImagenelmati.addEventListener('click', mostrarImagen)
 }
 function mostrarImagen(){
    
    let imagenMascota = document.getElementById('img-elmati')
    if(imagenMascota.style.display == 'block'){
        imagenMascota.style.display = 'none'
    }else {
        imagenMascota.style.display = 'block'
    } 
 }
function seleccionAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = ataqueFuego
        document.getElementById('ataque-enemigo').innerText = 'FUEGO' 
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = ataqueAgua
        document.getElementById('ataque-enemigo').innerText = 'AGUA' 
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = ataqueTierra
        document.getElementById('ataque-enemigo').innerText = 'TIERRA' 
    }
    
}
function seleccionarAtaqueJugador(){
    let botonFuego= document.getElementById('ataque-fuego')
    let botonAgua= document.getElementById('ataque-agua')
    let botonTierra= document.getElementById('ataque-tierra')
    
        botonFuego.addEventListener('click', ataqueFuego)
        botonAgua.addEventListener('click', ataqueAgua)
        botonTierra.addEventListener('click', ataqueTierra)
    


}
function ataqueFuego(){
        ataqueJugador = 'FUEGO'
        document.getElementById('ataque-jugador').innerText = 'FUEGO' 
        seleccionAtaqueEnemigo()

}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
        document.getElementById('ataque-jugador').innerText = 'AGUA' 
        seleccionAtaqueEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
        document.getElementById('ataque-jugador').innerText = 'TIERRA' 
        seleccionAtaqueEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let nombreMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio == 1){
        nombreMascotaEnemigo.innerText ='eltomi'
    }else if(ataqueAleatorio == 2){
        nombreMascotaEnemigo.innerText ='elmati'
    }else if(ataqueAleatorio == 3){
        nombreMascotaEnemigo.innerText ='elqueso'
    }

}

function aleatorio(min, max){
   return Math.floor(Math.random() * (max-min+1) + min)
}


let botonMascotaJugador = document.getElementById('btn-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascota)
seleccionarAtaqueJugador()
window.addEventListener('load', iniciarJuego)
mostrarImagenMascota()


