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