class Tamagotchi {
    constructor(comer, dormir, desparchado, edad) {
        this.comer = comer;
        this.dormir = dormir;
        this.desparchado = desparchado;
        this.edad = edad;
    }

}

let myTamagotchi = new Tamagotchi(1, 1, 1, 0);

$("#restart").hide();

function startGame() {
    grow();
}

function grow() {
    if (myTamagotchi.edad < 1) {
        hatch();
    } else {
        $("img:eq(1)").replaceWith("<img src='tamagotchi-bunny-2.png'>")
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
        grow();
    }, 15000)
}

function incrementaComer() {
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.Comer += 1;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.Comer}</p>`);
        if (myTamagotchi.Comer < 10) {
            incrementaComer();
        } else {
            die();
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
            die();
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
            die();
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

function alimentar() {
    if (myTamagotchi.comer >= 2) {
        myTamagotchi.comer -= 2;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.comer}</p>`);
    } else {
        myTamagotchi.comer = 0;
        $("#hunger").replaceWith(`<p id='hunger'>Comer: ${myTamagotchi.comer}</p>`);
    }
}

function jugar() {
    if (myTamagotchi.desparchado >= 3) {
        myTamagotchi.desparchado -= 3;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
    } else {
        myTamagotchi.desparchado = 0;
        $("#boredom").replaceWith(`<p id='boredom'>Desparchado: ${myTamagotchi.desparchado}</p>`);
    }
}

function descansar(time) {
    $("img:eq(0)").replaceWith("<img src='tamagotchi-home-night.jpg'>");
    let timeoutID = window.setTimeout(function() {
        myTamagotchi.dormir = 0;
        $("img:eq(0)").replaceWith("<img src='tamagotchi-home.png'>")
        $("#sleepiness").replaceWith(`<p id='sleepiness'>Dormir: ${myTamagotchi.dormir}</p>`);
    }, time)
}

function die() {
    alive = false;
    $("img:eq(1)").replaceWith("<img src='tamagotchi-dead.png'>");
    $("#sleep").hide();
    $("#play").hide();
    $("#feed").hide();
    $("#restart").show()
    $("#actions").after("<h2>Tamagotchi a muerto!!!</h2>")
}

function restart() {
    let alive = true;
    $("#restart").hide();
    $("img:eq(1)").replaceWith("<img src='tamagotchi-egg.png'>");
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
    dormir(2000);
});

$("#play").click(function() {
    jugar();
})

$("#feed").click(function() {
    comer();
})

$("#restart").click(function() {
    restart();
})

startGame();

if (myTamagotchi.sleep > 10) {
    die()
}

