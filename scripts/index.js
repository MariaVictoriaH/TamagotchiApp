let actividad = document.getElementsByClassName('actividad')[0];
const mensajes = document.querySelector('h1');
const iniciar = document.getElementById('iniciar');
const comer = document.getElementById('comer');
const dormir = document.getElementById('dormir');
const jugar = document.getElementById('jugar');
const volver = document.getElementById('volver');


class Tamagotchi {
    constructor(hambre, dormir, jugar, felicidad, salud,edad) {
        this.hambre = hambre;
        this.dormir = dormir;
        this.jugar = jugar;
        this.felicidad = felicidad;
        this.salud  = salud;
        this.edad = edad;
    }
}

let myTamagotchi = new Tamagotchi(100, 100, 100, 100, 100,0);

function crecer() {
    if (myTamagotchi.edad < 80 && myTamagotchi.felicidad > 10) {
        evolucionar();
    } else if (myTamagotchi.felicidad >= 1 && myTamagotchi.felicidad <= 10)  {
        mensajes.style.display = 'inline';
        actividad.src='asustado.gif';
        muerto(myTamagotchi.felicidad);
   } 
};

function startGame() {
    actividad.src='tranquilo.jpg';
    crecer();
}

function evolucionar() {
    window.setTimeout(function() {
    myTamagotchi.edad += 1;
    myTamagotchi.felicidad = Math.max(0, myTamagotchi.felicidad - 5);
    myTamagotchi.salud   = Math.max(0, myTamagotchi.salud - 5);
    myTamagotchi.hambre = Math.max(0, myTamagotchi.hambre - 3);
    myTamagotchi.dormir = Math.max(0, myTamagotchi.dormir - 5);
    myTamagotchi.jugar = Math.max(0, myTamagotchi.jugar - 2);

    $("#edad").replaceWith(`<p id='edad'>Edad: ${myTamagotchi.edad}</p>`);
    $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
    $("#salud").replaceWith(`<p id='salud'>Salud: ${myTamagotchi.salud}</p>`);
    $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    $("#stats_dormir").replaceWith(`<p id='stats_dormir'>Dormir: ${myTamagotchi.dormir}</p>`);
    $("#stats_jugar").replaceWith(`<p id='stats_jugar'>Jugar: ${myTamagotchi.jugar}</p>`);
    
    crecer();
 }, 3000)
};

function muerto(tiempoVida ) {
    if (tiempoVida <= 10){
       actividad.src='Muerto.gif';
       $("#dormir").hide();
       $("#jugar").hide();
       $("#comer").hide();
       volver.style.display = 'inline';
       $("#notificacion").after("<h1>Tamagotchi a muerto!!!</h1>")
 }
}

volver.addEventListener('click', function() {
    actividad.src='comenzar.gif';
    iniciar.style.display = 'inline';
    volver.style.display = 'none';
    mensajes.style.display ='none';
    myTamagotchi.dormir = 100;
    $("#stats_dormir").replaceWith(`<p id='stats_jugar'>Dormir: ${myTamagotchi.dormir}</p>`);
    myTamagotchi.jugar = 100;
    $("#stats_jugar").replaceWith(`<p id='stats_jugar'>Jugar: ${myTamagotchi.jugar}</p>`);
    myTamagotchi.hambre = 100;
    $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    myTamagotchi.felicidad = 100;
    $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
    myTamagotchi.edad = 0
});

dormir.addEventListener('click', function() {
    actividad.src='Durmiendo.gif';
    myTamagotchi.salud = Math.min(100, myTamagotchi.salud + 10);
    myTamagotchi.felicidad = Math.max(0, myTamagotchi.felicidad - 5);
    myTamagotchi.hambre = Math.max(0, myTamagotchi.hambre - 5);

    $("#salud").replaceWith(`<p id='salud'>Salud: ${myTamagotchi.salud}</p>`);
    $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
    $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
});

jugar.addEventListener('click', function() {
    if (myTamagotchi.jugar >= 95) {
        actividad.src='tranquilo.jpg';
    } else {
        actividad.src='Jugando.gif';
        myTamagotchi.felicidad = Math.min(100, myTamagotchi.felicidad + 15);
        myTamagotchi.salud = Math.max(0, myTamagotchi.salud - 5);
        myTamagotchi.hambre = Math.max(0, myTamagotchi.hambre - 5);

        $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
        $("#salud").replaceWith(`<p id='salud'>Salud: ${myTamagotchi.salud}</p>`);
        $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    }
})

comer.addEventListener('click', function() {
    if (myTamagotchi.comer >= 90) {
        actividad.src='tranquilo.jpg';
    } else {
        actividad.src='comiendo.gif';
        myTamagotchi.felicidad = Math.min(100, myTamagotchi.felicidad + 5);
        myTamagotchi.salud = Math.min(100, myTamagotchi.salud + 5);
        myTamagotchi.hambre = Math.min(100, myTamagotchi.hambre + 10);
        $("#felicidad").replaceWith(`<p id='felicidad'>Felicidad: ${myTamagotchi.felicidad}</p>`);
        $("#salud").replaceWith(`<p id='salud'>Salud: ${myTamagotchi.salud}</p>`);
        $("#stats_hambre").replaceWith(`<p id='stats_hambre'>Hambre: ${myTamagotchi.hambre}</p>`);
    }
}); 

iniciar.addEventListener('click', function(){
    volver.style.display = 'none';
    iniciar.style.display = 'none';
    comer.style.display = 'inline';
    dormir.style.display = 'inline';
    jugar.style.display = 'inline';
    startGame();  
});




