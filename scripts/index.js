let actividad = document.getElementsByClassName('actividad')[0];
const mensajes = document.querySelector('h1');
const iniciar = document.getElementById('iniciar');
const comer = document.getElementById('comer');
const dormir = document.getElementById('dormir');
const jugar = document.getElementById('jugar');


class Tamagotchi {
    constructor(hambre, dormir, jugar, felicidad, edad) {
        this.hambre = hambre;
        this.dormir = dormir;
        this.jugar = jugar;
        this.felicidad = felicidad;
        this.edad = edad;
    }
}

let myTamagotchi = new Tamagotchi(100, 100, 100, 100,0);

function startGame() {
    actividad.src='Inicio.gif';
    crecer();
}

function evolucionar() {
    window.setTimeout(function() {
    myTamagotchi.edad += 1;
    myTamagotchi.felicidad = Math.max(0, myTamagotchi.felicidad - 5);
    myTamagotchi.hambre = Math.max(0, myTamagotchi.hambre - 3);
    myTamagotchi.dormir = Math.max(0, myTamagotchi.dormir - 5);
    myTamagotchi.jugar = Math.max(0, myTamagotchi.jugar - 2);

    $("#edad").replaceWith(`<p id='edad'>Edad: ${myTamagotchi.edad}</p>`);
    $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
    $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    $("#stats_dormir").replaceWith(`<p id='stats_dormir'>Dormir: ${myTamagotchi.dormir}</p>`);
    $("#stats_jugar").replaceWith(`<p id='stats_jugar'>Jugar: ${myTamagotchi.jugar}</p>`);
    
    crecer();
 }, 3000)
};

function crecer() {
    if (myTamagotchi.edad < 80 && myTamagotchi.felicidad > 10) {
        evolucionar();
    } else if (myTamagotchi.felicidad >= 1 && myTamagotchi.felicidad <= 10)  {
        mensajes.style.display = 'inline';
        actividad.src='asustado.gif';
        muerto(myTamagotchi.felicidad);
   } 
};

function incrementaDesparchado() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.jugar += 2;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.jugar}</p>`);
        if (myTamagotchi.jugar < 10) {
            incrementaDesparchado();
        } else {
            muerto();
        }
    }, 1000)
};

function muerto(tiempoVida ) {
    if (tiempoVida <= 10){
       actividad.src='Muerto.gif';
       $("#dormir").hide();
       $("#jugar").hide();
       $("#comer").hide();
       $("#iniciar").show()
       $("#actions").after("<h1>Tamagotchi a muerto!!!</h1>")
 }
}

function volver() {
    let alive = true;
    $("#iniciar").hide();
    actividad.src='bebe.gif';
    myTamagotchi.dormir = 0;
    $("#sleepiness").replaceWith(`<p id='dormir'>Dormir: ${myTamagotchi.dormir}</p>`);
    $("#dormir").show()
    myTamagotchi.jugar = 0;
    $("#boredom").replaceWith(`<p id='jugar'>Jugar: ${myTamagotchi.jugar}</p>`);
    $("#jugar").show()
    myTamagotchi.comer = 0;
    $("#hunger").replaceWith(`<p id='comer'>Comer: ${myTamagotchi.comer}</p>`);
    $("#comer").show()
    myTamagotchi.edad = 0
    $("#age").replaceWith(`<p id='age'>Edad: ${myTamagotchi.edad}</p>`);
    startGame();
}

dormir.addEventListener('click', function() {
    actividad.src='Durmiendo.gif';
    myTamagotchi.felicidad = Math.max(0, myTamagotchi.felicidad - 5);
    $("#stats_dormir").replaceWith(`<p id='stats_dormir'>Dormir: ${myTamagotchi.dormir}</p>`);
});

jugar.addEventListener('click', function() {
    if (myTamagotchi.jugar >= 95) {
        actividad.src='tranquilo.jpg';
    } else {
        actividad.src='Jugando.gif';
        myTamagotchi.felicidad = Math.min(100, myTamagotchi.felicidad + 5);
        myTamagotchi.hambre = Math.min(100, myTamagotchi.hambre + 20);

        $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
        $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    }
})

comer.addEventListener('click', function() {
    if (myTamagotchi.comer >= 90) {
        actividad.src='tranquilo.jpg';
    } else {
        actividad.src='comiendo.gif';
        myTamagotchi.felicidad = Math.min(100, myTamagotchi.felicidad + 15);
        myTamagotchi.hambre = Math.min(100, myTamagotchi.hambre + 5);
        $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    }
}); 

iniciar.addEventListener('click', function(){
    iniciar.style.display = 'none';
    comer.style.display = 'inline';
    dormir.style.display = 'inline';
    jugar.style.display = 'inline';
    startGame();  
});




