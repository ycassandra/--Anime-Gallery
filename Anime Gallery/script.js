// Variables para identificar los textos
let textoKimetsu = document.querySelector('.main-text');
let textoAttack = document.querySelector('.secondary-text');
let textoDress = document.querySelector('.third-text');

function siguienteSeccion() {
    console.log("¡Click detectado!");
    
    // Encontrar cuál texto fue clickeado
    let textoClickeado = event.target.closest('.text-item');
    console.log("Texto clickeado:", textoClickeado);
    
    // Encontrar cuál texto está actualmente en el centro
    let textoEnCentro = document.querySelector('.pos-centro');
    console.log("Texto en centro:", textoEnCentro);
    
    // Solo intercambiar si el clickeado NO está en el centro
    if (textoClickeado !== textoEnCentro) {
        console.log("Haciendo intercambio...");
        intercambiarConCentro(textoClickeado, textoEnCentro);
    } else {
        console.log("Ya está en el centro, no hacer nada");
    }
}

function intercambiarConCentro(textoClickeado, textoEnCentro) {
    // Quitar clases de posición
    textoClickeado.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo');
    textoEnCentro.classList.remove('pos-arriba', 'pos-centro', 'pos-abajo');

    // Asignar nuevas posiciones
    textoClickeado.classList.add('pos-centro');
    if (textoClickeado === textoKimetsu) {
        textoEnCentro.classList.add('pos-arriba');
    } else if (textoClickeado === textoDress) {
        textoEnCentro.classList.add('pos-abajo');
    } else {
        // Si no es kimetsu ni dress, debe ser attack
        if (textoEnCentro === textoKimetsu) {
            textoEnCentro.classList.add('pos-arriba');
        } else {
            textoEnCentro.classList.add('pos-abajo');
        }
    }

    // Cambiar fondo dinámicamente
    const body = document.body;
    body.classList.remove('bg-kimetsu', 'bg-attack', 'bg-dress');

    if (textoClickeado === textoKimetsu) {
        body.classList.add('bg-kimetsu');
    } else if (textoClickeado === textoAttack) {
        body.classList.add('bg-attack');
    } else if (textoClickeado === textoDress) {
        body.classList.add('bg-dress');
    }
}
