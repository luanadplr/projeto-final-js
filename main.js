function selecionarValor(valor) {
    // Atualizar o valor do campo "Outro valor" com o valor selecionado
    document.getElementById("outroValor-input").value = valor;
}

function doar() {
    // Obter o valor do campo "Outro valor"
    let valorDoacao = parseFloat(document.getElementById("outroValor-input").value);

    // Verificar se o valor é válido
    if (isNaN(valorDoacao) || valorDoacao <= 0) {
        alert("Por favor, insira um valor válido para a doação.");
        return;
        
    }

    // Salvar o valor da doação (você pode enviar esse valor para um servidor aqui)
    console.log(`Valor doado: R$${valorDoacao}`);

    // Exibir mensagem de agradecimento
    // alert(`Agradecemos pela sua doação de R$${valorDoacao}! Seu apoio faz a diferença.`);
    // Exibir mensagem de agradecimento no HTML
    exibirMensagemAgradecimento(`Agradecemos pela sua doação de R$${valorDoacao}! Seu apoio faz a diferença.`);
    
}

function exibirMensagemAgradecimento(mensagem) {
    // Obter o elemento div
    let divMensagem = document.getElementById("mensagemAgradecimento");

    // Limpar mensagens anteriores
    divMensagem.innerHTML = "";

    // Adicionar a mensagem ao HTML
    divMensagem.innerHTML = mensagem;

    // Exibir a mensagem
    divMensagem.style.display = "block";

    // Ocultar a mensagem após alguns segundos (opcional)
    setTimeout(function () {
        // Limpar a mensagem após 5 segundos
        divMensagem.innerHTML = "";
        // Ocultar a mensagem novamente
        divMensagem.style.display = "none";
    }, 5000); // A mensagem será removida após 5 segundos (5000 milissegundos)
}