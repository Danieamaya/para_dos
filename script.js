/* =========================================
   DETALLES PARA DOS
   SCRIPT PRINCIPAL
========================================= */

function continuar() {
    document.getElementById("pagina1").classList.remove("activa");
    document.getElementById("pagina2").classList.add("activa");

    iniciarEstrellas();
}


/* =========================================
   FRASES
========================================= */

const frases = [
    "Hay personas que hacen que un día cualquiera se sienta especial. 💗",
    "A veces una persona puede convertirse en nuestro lugar favorito. 🥹❤️",
    "Los pequeños detalles también dicen 'te quiero'. 💌",
    "Hay sonrisas que simplemente queremos conservar para siempre. ✨",
    "Qué suerte coincidir con alguien que hace bonito el camino. 🌙❤️",
    "No hace falta una fecha especial para recordar cuánto importas. 🫶",
    "Algunas personas llegan y cambian nuestros días para siempre. 💫",
    "Ojalá nunca falten motivos para seguir eligiéndose. ❤️",
    "Si estás pensando en alguien ahora mismo, probablemente sabes por qué. 🥰",
    "Y entre tantas personas, qué bonito encontrarte a ti. 💖"
];


/* =========================================
   ELEMENTOS
========================================= */

const estrellas = document.querySelectorAll(".estrella");
const textoFrase = document.getElementById("textoFrase");
const frase = document.getElementById("frase");
const particulas = document.getElementById("particulas");
const palabraFinal = document.getElementById("palabraFinal");


/* =========================================
   INICIAR ESTRELLAS
========================================= */

function iniciarEstrellas() {

    estrellas.forEach((estrella) => {
        estrella.classList.remove("visible");
        estrella.style.opacity = "0";
    });

    setTimeout(() => {
        mostrarEstrella(0);
    }, 1500);
}


/* =========================================
   MOSTRAR UNA ESTRELLA
========================================= */

function mostrarEstrella(indice) {

    if (indice >= estrellas.length) {
        mostrarCorazonEstrellas();
        return;
    }

    const estrella = estrellas[indice];

    /* La estrella aparece */

    estrella.style.opacity = "1";
    estrella.classList.add("visible");

    estrella.style.transform =
        "scale(1.5) rotate(180deg)";

    crearParticulas(estrella);


    /* Mostrar su frase */

    setTimeout(() => {

        textoFrase.textContent = frases[indice];

        frase.classList.remove("mostrar");

        void frase.offsetWidth;

        frase.classList.add("mostrar");

    }, 500);


    /* =====================================
       LA FRASE DURA MÁS TIEMPO
       Aproximadamente 5 segundos
    ===================================== */

    setTimeout(() => {

        frase.classList.remove("mostrar");

        estrella.style.transform =
            "scale(2) rotate(360deg)";

        estrella.style.opacity = "0";

    }, 5500);


    /* =====================================
       SIGUIENTE ESTRELLA
    ===================================== */

    setTimeout(() => {

        estrella.classList.remove("visible");

        estrella.style.transform =
            "scale(1) rotate(0deg)";

        mostrarEstrella(indice + 1);

    }, 6500);
}


/* =========================================
   PARTÍCULAS
========================================= */

function crearParticulas(estrella) {

    const rect = estrella.getBoundingClientRect();

    for (let i = 0; i < 30; i++) {

        const particula = document.createElement("span");

        particula.classList.add("particula");

        particula.style.left =
            rect.left + rect.width / 2 + "px";

        particula.style.top =
            rect.top + rect.height / 2 + "px";

        particula.style.setProperty(
            "--x",
            Math.random() * 100
        );

        particula.style.setProperty(
            "--y",
            Math.random() * 100
        );

        particulas.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 1600);
    }
}


/* =========================================
   CORAZÓN FORMADO POR ESTRELLAS
========================================= */

function mostrarCorazonEstrellas() {

    frase.classList.remove("mostrar");

    setTimeout(() => {

        estrellas.forEach((estrella, indice) => {

            estrella.style.opacity = "1";

            estrella.classList.add("visible");

            estrella.style.transition =
                "all 2s cubic-bezier(.2,.8,.2,1)";


            const posiciones = [
                { x: -130, y: -70 },
                { x: -65, y: -115 },
                { x: 0, y: -80 },
                { x: 65, y: -115 },
                { x: 130, y: -70 },

                { x: -105, y: 0 },
                { x: -55, y: 45 },
                { x: 0, y: 90 },
                { x: 55, y: 45 },
                { x: 105, y: 0 }
            ];

            const pos = posiciones[indice];

            setTimeout(() => {

                estrella.style.left = "50%";
                estrella.style.top = "50%";

                estrella.style.transform =
                    `translate(${pos.x}px, ${pos.y}px) scale(1.15)`;

                estrella.style.opacity = "1";

            }, indice * 150);
        });


        setTimeout(() => {

            palabraFinal.classList.add("mostrarFinal");

            animarAmorEterno();

        }, 3500);

    }, 1000);
}


/* =========================================
   AMOR ETERNO
   SIN BRILLO EXAGERADO
========================================= */

function animarAmorEterno() {

    const titulo =
        palabraFinal.querySelector("h1");

    const estrellasPalabra =
        palabraFinal.querySelector(".estrellasPalabra");


    if (estrellasPalabra) {
        estrellasPalabra.style.opacity = "0";
    }


    titulo.style.opacity = "0";

    titulo.style.transform =
        "scale(0.5)";

    titulo.style.transition =
        "all 1.5s ease";


    setTimeout(() => {

        titulo.style.opacity = "1";

        titulo.style.transform =
            "scale(1)";

    }, 500);
}


/* =========================================
   IR A PÁGINA 3
========================================= */

function irPagina3() {

    document.getElementById("pagina2")
        .classList.remove("activa");

    document.getElementById("pagina3")
        .classList.add("activa");

    iniciarCarta();
}


/* =========================================
   CARTA
========================================= */

const textoCarta = `Gracias por estar.

Por las conversaciones que se alargan sin darnos cuenta,
por las risas que aparecen en los momentos inesperados,
por cada pequeño detalle que hace especial una relación.

No hace falta una fecha especial para decirle a alguien
lo importante que es para ti.

Si tienes a esa persona en tu vida,
cuídala, valóralа y recuerda decírselo.

Porque amar también está en los pequeños detalles. ❤️`;


/* =========================================
   EFECTO DE ESCRITURA
========================================= */

function iniciarCarta() {

    const verso =
        document.getElementById("verso");

    const final =
        document.getElementById("final");

    verso.textContent = "";

    final.classList.remove("mostrar");

    let posicion = 0;

    function escribir() {

        if (posicion < textoCarta.length) {

            verso.textContent +=
                textoCarta.charAt(posicion);

            posicion++;

            setTimeout(escribir, 32);

        } else {

            setTimeout(() => {

                final.classList.add("mostrar");

            }, 1200);
        }
    }

    setTimeout(() => {
        escribir();
    }, 1000);
}


/* =========================================
   INICIO
========================================= */

window.addEventListener("load", () => {

    const pagina1 =
        document.getElementById("pagina1");

    if (pagina1) {
        pagina1.classList.add("activa");
    }

});