class Tamagotchi {
    constructor(comer, dormir, desparchado, edad) {
        this.comer = comer;
        this.dormir = dormir;
        this.desparchado = desparchado;
        this.edad = edad;
    }

}

let myTamagotchi = new Tamagotchi(1, 1, 1, 0);

$("#iniciar").hide();

function startGame() {
    crecer();
}

function crecer() {
    debugger;
    if (myTamagotchi.edad < 1) {
        hatch();
    } else {
        document.getElementsByClassName('actividad')[0].src='bebe.gif';
        incrementaEdad();
        incrementaComer();
        incrementaDormir();
        incrementaDesparchado();
    }
}
function hatch() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.edad += 1;
        $("#age").replaceWith(`<p id='age'>Edad: ${myTamagotchi.edad}</p>`);
        crecer();
    }, 15000)
}

function incrementaComer() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.Comer += 1;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.Comer}</p>`);
        if (myTamagotchi.Comer < 10) {
            incrementaComer();
        } else {
            muerto();
        }
    }, 20000)
};

function incrementaDormir() {

    let timeoutID = window.setTimeout(function() {
        myTamagotchi.dormir += 1;
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Dormir: ${myTamagotchi.dormir}</p>`);
        if (myTamagotchi.dormir < 10) {
            incrementaDormir();
        } else {
            muerto();
        }
    }, 30000)

};

function incrementaDesparchado() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.desparchado += 2;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
        if (myTamagotchi.desparchado < 10) {
            incrementaDesparchado();
        } else {
            muerto();
        }
    }, 10000)
};

function incrementaEdad() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.age += 1;
        $("#age").replaceWith(`<p id='age'>Edad: ${myTamagotchi.edad}</p>`);
        if (myTamagotchi.edad < 10) {
            incrementaEdad();
        }
    }, 100000)

}

function comer() {
    document.getElementsByClassName('actividad')[0].src='comiendo.gif';
    if (myTamagotchi.comer >= 2) {
        myTamagotchi.comer -= 2;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.comer}</p>`);
    } else {
        myTamagotchi.comer = 0;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.comer}</p>`);
    }
}

function jugar() {
    document.getElementsByClassName('actividad')[0].src='Jugando.gif';
    if (myTamagotchi.desparchado >= 3) {
        myTamagotchi.desparchado -= 3;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
    } else {
        myTamagotchi.desparchado = 0;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
    }
}

function descansar(time) {
    document.getElementsByClassName('actividad')[0].src='Durmiendo.gif';
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.dormir = 0;
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Dormir: ${myTamagotchi.dormir}</p>`);
    }, time)
}

function muerto() {
    alive = false;
    document.getElementsByClassName('actividad')[0].src='Muerto.gif';
    $("#sleep").hide();
    $("#play").hide();
    $("#feed").hide();
    $("#iniciar").show()
    $("#actions").after("<h2>Tamagotchi a muerto!!!</h2>")
}

function iniciar() {
    let alive = true;
    $("#iniciar").hide();
    document.getElementsByClassName('actividad')[0].src='bebe.gif';
    myTamagotchi.dormir = 0;
    $("#sleepiness").replaceWith(`<p id='sleepiness'>Dormir: ${myTamagotchi.dormir}</p>`);
    $("#sleep").show()
    myTamagotchi.desparchado = 0;
    $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
    $("#play").show()
    myTamagotchi.comer = 0;
    $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.comer}</p>`);
    $("#feed").show()
    myTamagotchi.edad = 0
    $("#age").replaceWith(`<p id='age'>Edad: ${myTamagotchi.edad}</p>`);
    startGame();
}

$("#sleep").click(function() {
    descansar(2000);
});

$("#play").click(function() {
    jugar();
})

$("#feed").click(function() {
    comer();
})

$("#iniciar").click(function() {
    iniciar();
})

if (myTamagotchi.sleep > 10) {
    muerto()
}

startGame();

