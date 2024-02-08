function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    validarDados(quantidadeNumeros, numeroMinimo, numeroMaximo);

    for (let i = 0; i < quantidadeNumeros; i++) {
        numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
            }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}


function validarDados(quantidadeNumeros, numeroMinimo, numeroMaximo) {

    //Valida se todos os campos foram preenchidos
    if (isNaN(quantidadeNumeros) || isNaN(numeroMinimo) || isNaN(numeroMaximo) ) {
        alert ('Por favor, preencha todos os campos.');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    //somente reinicia se o botão de reiniciar estiver habilitado:
    if (botaoReiniciar.classList.contains('container__botao')) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alterarStatusBotao();
    }
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}