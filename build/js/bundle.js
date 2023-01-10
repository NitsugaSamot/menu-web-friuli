document.addEventListener('DOMContentLoaded', function() {

    verMenuInfantil()

    verEntradas()

    verSandwiches()

    verParaCompartir()

    verEnsaladas()

    verAlPlato()

    verPizzas()

    verPastas()

    verPostres()

    verCapope()

    verTablas()

    verCafeteria()

    verBebidas()

    verCervezas()

    verVinos()
})

function verMenuInfantil() {
    const mobileMenu = document.querySelector('#botonInf')

    mobileMenu.addEventListener('click', mostrarMenuInfantil)
}

function mostrarMenuInfantil() {
    const cardd = document.querySelector('.cardd')

    cardd.classList.toggle('mostrar')
}

function verEntradas() {
    const mobileMenu = document.querySelector('#botonEntrada')

    mobileMenu.addEventListener('click', mostrarEntradas)
}

function mostrarEntradas() {
    const cardd = document.querySelector('.entradas')

    cardd.classList.toggle('mostrar')
}

function verSandwiches() {
    const mobileMenu = document.querySelector('#botonSand')

    mobileMenu.addEventListener('click', mostrarSandwiches)
}

function mostrarSandwiches() {
    const cardd = document.querySelector('.sandwiches')

    cardd.classList.toggle('mostrar')
}

function verParaCompartir() {
    const mobileMenu = document.querySelector('#botonPc')

    mobileMenu.addEventListener('click', mostrarParCompartir)
}

function mostrarParCompartir() {
    const cardd = document.querySelector('.para-compartir')

    cardd.classList.toggle('mostrar')
}

function verEnsaladas() {
    const mobileMenu = document.querySelector('#ensaladas')

    mobileMenu.addEventListener('click', mostrarEnsaladas)
}

function mostrarEnsaladas() {
    const cardd = document.querySelector('.ensaladas')

    cardd.classList.toggle('mostrar')
}

function verAlPlato() {
    const mobileMenu = document.querySelector('#alPlato')

    mobileMenu.addEventListener('click', mostrarAlPlato)
}

function mostrarAlPlato() {
    const cardd = document.querySelector('.al-plato')

    cardd.classList.toggle('mostrar')
}

function verPizzas() {
    const mobileMenu = document.querySelector('#pizzas')

    mobileMenu.addEventListener('click', mostrarPizzas)
}

function mostrarPizzas() {
    const cardd = document.querySelector('.pizzas')

    cardd.classList.toggle('mostrar')
}

function verPastas() {
    const mobileMenu = document.querySelector('#pastas')

    mobileMenu.addEventListener('click', mostrarPastas)
}

function mostrarPastas() {
    const cardd = document.querySelector('.pastas')

    cardd.classList.toggle('mostrar')
}

function verPostres() {
    const mobileMenu = document.querySelector('#postres')

    mobileMenu.addEventListener('click', mostrarPostres)
}

function mostrarPostres() {
    const cardd = document.querySelector('.postres')

    cardd.classList.toggle('mostrar')
}

function verCapope() {
    const mobileMenu = document.querySelector('#capope')

    mobileMenu.addEventListener('click', mostrarCapope)
}

function mostrarCapope() {
    const cardd = document.querySelector('.capope')

    cardd.classList.toggle('mostrar')
}

function verTablas() {
    const mobileMenu = document.querySelector('#botonTablas')

    mobileMenu.addEventListener('click', mostrarTablas)
}

function mostrarTablas() {
    const cardd = document.querySelector('.tablas')

    cardd.classList.toggle('mostrar')
}


document.addEventListener('DOMContentLoaded', function() {

    verCafeteria()

    verBebidas()

    verCervezas()

    verVinos()
})

function verCafeteria() {
    const mobileMenu = document.querySelector('#botonCafeteria')

    mobileMenu.addEventListener('click', mostrarCafeteria)
}

function mostrarCafeteria() {
    const cardd = document.querySelector('.cafeteria')

    cardd.classList.toggle('mostrar')
}

function verBebidas() {
    const mobileMenu = document.querySelector('#botonBebidas')

    mobileMenu.addEventListener('click', mostrarBebidas)
}

function mostrarBebidas() {
    const cardd = document.querySelector('.bebidas')

    cardd.classList.toggle('mostrar')
}

function verCervezas() {
    const mobileMenu = document.querySelector('#botonCervezas')

    mobileMenu.addEventListener('click', mostrarCervezas)
}

function mostrarCervezas() {
    const cardd = document.querySelector('.cervezas')

    cardd.classList.toggle('mostrar')
}

function verVinos() {
    const mobileMenu = document.querySelector('#botonVinos')

    mobileMenu.addEventListener('click', mostrarVinos)
}

function mostrarVinos() {
    const cardd = document.querySelector('.vinos')

    cardd.classList.toggle('mostrar')
}