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
    exibirMensagemAgradecimento(`<strong>Agradecemos pela sua doação de R$${valorDoacao}!</strong><br>Seu apoio faz a diferença.`);

    document.getElementById("outroValor-input").value = "";

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


// Função para alterar o tipo de doação do usuário
function selecionarPeriodo() {

    let periodoDoacao = document.querySelector("#periodo")

    // opcoesPeriodo recebe o >value< da opção selecionada definida no HTML
    let opcoesPeriodo = periodoDoacao.options[periodoDoacao.selectedIndex].value

    let divDoacaoMensal = document.querySelector("#div-doacao-mensal")
    let divDoacaoUnica = document.querySelector("#div-doacao-unica")

    if (opcoesPeriodo == "mensal") {  // Mostrar a div de doação Mensal

        divDoacaoMensal.style.display = "block"
        divDoacaoUnica.style.display = "none"

    } else { // Mostrar a div de doação Única

        divDoacaoMensal.style.display = "none"
        divDoacaoUnica.style.display = "block"

    }

}

//Animação do Formulário
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
