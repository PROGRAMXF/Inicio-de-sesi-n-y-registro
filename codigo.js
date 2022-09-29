const $btnSignIn = document.querySelector('.boton-sesion');
const $btnSignUp = document.querySelector('.boton-registro');
const $inicioSesion = document.querySelector('.container-ingreso');
const $inicioRegistro = document.querySelector('.container-registro');

document.addEventListener('click', e =>{
    if(e.target === $btnSignIn || e.target === $btnSignUp){
        $inicioRegistro.classList.toggle('active');
        $inicioSesion.classList.toggle('active');
    }
})