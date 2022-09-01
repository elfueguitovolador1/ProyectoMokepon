let ataqueJugador 
let ataqueEnemigo
let vidaJ = 3;
let vidaE = 3;
 let bichos = [];

class Bicho{
        constructor(nombre, foto, vida){
            this.nombre=nombre;
            this.foto=foto;
            this.vida= vida;
            this.ataque = [];       
        }
}

    let elmati = new Bicho('elmati', 'img/elmati.png', 5);
    let eltomi = new Bicho('elmati', 'img/eltomi.png', 8);
    let elqueso = new Bicho('elmati', 'img/elqueso.png', 4);

            elmati.ataque.push(
                { nombre: '💧', id: 'boton-agua'},
                { nombre: '💧', id: 'boton-agua'},
                { nombre: '💧', id: 'boton-agua'},
                { nombre: '🔥', id: 'boton-agua'},
                { nombre: '🌱', id: 'boton-tierra'}
            );
            eltomi.ataque.push(
                { nombre: '🌱', id: 'boton-tierra'},
                { nombre: '🌱', id: 'boton-tierra'},
                { nombre: '🌱', id: 'boton-tierra'},
                { nombre: '🔥', id: 'boton-agua'},
                { nombre: '💧', id: 'boton-agua'}
            );
            elqueso.ataque.push(
                { nombre: '🔥', id: 'boton-agua'},
                { nombre: '🔥', id: 'boton-agua'},
                { nombre: '🔥', id: 'boton-agua'},
                { nombre: '💧', id: 'boton-agua'},
                { nombre: '🌱', id: 'boton-tierra'}
            );


            bichos.push(elmati, eltomi, elqueso)



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
    sectionSeleccionarAtaque.style.display='flex'
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
 function mostrarImagenMascota(){
    
    let botonImageneltomi = document.getElementById('imagen-eltomi')
    let botonImagenelmati = document.getElementById('imagen-elmati')
    let botonImagenelqueso = document.getElementById('imagen-elqueso')
        
    botonImagenelmati.addEventListener('click', mostrarImagenelmati)
    botonImageneltomi.addEventListener('click', mostrarImageneltomi)
    botonImagenelqueso.addEventListener('click', mostrarImagenelqueso)
 }
 function mostrarImagenelmati(){
    
    let imagenMascota = document.getElementById('img-elmati')
    if(imagenMascota.style.display == 'block'){
        imagenMascota.style.display = 'none'
    }else {
        imagenMascota.style.display = 'block'
    } 
 }
 function mostrarImageneltomi(){
    
    let imagenMascota = document.getElementById('img-eltomi')
    if(imagenMascota.style.display == 'block'){
        imagenMascota.style.display = 'none'
    }else {
        imagenMascota.style.display = 'block'
    } 
 }
 function mostrarImagenelqueso(){
    
    let imagenMascota = document.getElementById('img-elqueso')
    if(imagenMascota.style.display == 'block'){
        imagenMascota.style.display = 'none'
    }else {
        imagenMascota.style.display = 'block'
    } 
 }
function seleccionAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        document.getElementById('ataque-enemigo').innerText = 'FUEGO' 
        ataqueEnemigo = "FUEGO";
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
        document.getElementById('ataque-enemigo').innerText = 'AGUA' 
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
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
        botonFuego.addEventListener('click', reglasCombate)
       
        botonTierra.addEventListener('click', reglasCombate)
        botonAgua.addEventListener('click', reglasCombate)


}
function ataqueFuego(){
        ataqueJugador = 'FUEGO'
        document.getElementById('ataque-jugador').innerHTML = 'FUEGO' 
        seleccionAtaqueEnemigo()

}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
        document.getElementById('ataque-jugador').innerHTML = 'AGUA' 
        seleccionAtaqueEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
        document.getElementById('ataque-jugador').innerHTML = 'TIERRA' 
        seleccionAtaqueEnemigo()
}
function reglasCombate(){
  
    let resultado = document.getElementById('ganador');
            if(ataqueJugador == "AGUA"  && ataqueEnemigo == "FUEGO"){
                resultado.innerHTML = 'GANASTE!!'
                    vidaE -= 1;
    }else if(ataqueJugador == "FUEGO"  && ataqueEnemigo == "TIERRA"){
                resultado.innerHTML = 'GANASTE!!'
                    vidaE -= 1;
        }else if(ataqueJugador == "TIERRA"&&ataqueEnemigo == "AGUA"){
                resultado.innerHTML = 'GANASTE!!'
                    vidaE = vidaE - 1;
        }else if(ataqueJugador == ataqueEnemigo){
        resultado.innerHTML = 'empatas mirey'
            }else{
                resultado.innerHTML = 'perdes nazi'
                vidaJ -=1;
            }
            vida()

}
function vida(){
    let spanVidaE = document.getElementById("vidas-enemigo")
    let spanVidaJ = document.getElementById("vidas-jugador")    
   

    if(vidaE!=0 && vidaJ!=0){
        spanVidaE.innerHTML = vidaE
        spanVidaJ.innerHTML = vidaJ
    } else if(vidaE==0){
        alert("Fin del juego GANASTE")
        spanVidaE.innerHTML = vidaE 
    } else if(vidaJ==0){
        alert("Fin del juego PERDISTE")
        spanVidaJ.innerHTML = vidaJ
    }
}
function aleatorio(min, max){
   return Math.floor(Math.random() * (max-min+1) + min)
}
function reiniciarJuego(){
    
        let botonReiniciar = document.getElementById('btn-reiniciar')
        
        botonReiniciar.addEventListener('click', comandoReiniciar)
}
function comandoReiniciar(){
    location.reload()
}
let botonMascotaJugador = document.getElementById('btn-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascota)
seleccionarAtaqueJugador()
window.addEventListener('load', iniciarJuego)
mostrarImagenMascota();
reglasCombate();
reiniciarJuego();



