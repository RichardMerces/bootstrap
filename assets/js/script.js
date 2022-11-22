//Variáveis auxiliares
let emailOk = false;
let textoOk = false;

// Email
let email = document.querySelector('#exampleFormControlInput1');
let erroEmail = document.querySelector('#erroEmail');

function validaEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email inválido!'
        emailOk = false;
    }
    else {
        erroEmail.innerHTML = '';
        emailOk = true;
    }
}

// Texto
let texto = document.querySelector('#exampleFormControlTextarea1');
let errotexto = document.querySelector('#erroTexto');

function validaTexto() {
    if(texto.value.length > 100) {
        errotexto.innerHTML = 'Limite de caracteres excedido (Limite máximo de 100)';
        textoOk = false;
    }
    else {
        errotexto.innerHTML = '';
        textoOk = true;
    }
}

//Validação

function enviar() {
    if(emailOk && textoOk) {
        alert('Email enviado com sucesso!')
    }
    else {
        alert('Preencha as informações corretamente!')
    }
}

// Mapa
let mapa = document.querySelector('#mapa')

function mapaZoom() {
    mapa.style.width = '600px';
    mapa.style.height = '300px';
}

function mapaNormal() {
    mapa.style.width = '300px';
    mapa.style.height = '175px';
}