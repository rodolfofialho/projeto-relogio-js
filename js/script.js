function relogio() {
    let display = document.querySelector('.conteudo');

    let agora = new Date();

    let horario = atualizarRelogio(agora.getHours()) + ':' + atualizarRelogio(agora.getMinutes()) + ':' + atualizarRelogio(agora.getSeconds());

    display.textContent = horario;
}

function atualizarRelogio(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

relogio();

setInterval(relogio, 1000);


