function selecionarValor(valor) {
    
    // Atualizar o valor do campo "Outro valor" com o valor selecionado
    document.getElementById("outroValor-input").value = valor;

}


function enviarDoacao() {


    // Obter o valor do campo "Outro valor"
    let valorDoacao = parseFloat(document.getElementById("outroValor-input").value);

    let divDoacaoUnica = document.querySelector("#div-doacao-unica")
    let divDoacaoCadastro = document.querySelector("#div-doacao-cadastro")
    let pvalorDoacao = document.querySelector(".valor-doacao")

    // Verificar se o valor é válido
    if (isNaN(valorDoacao) || valorDoacao <= 0) {
        alert("Por favor, insira um valor válido para a doação.");
        return;

    }

    // Exibir mensagem de agradecimento
    // alert(`Agradecemos pela sua doação de R$${valorDoacao}! Seu apoio faz a diferença.`);
    // Exibir mensagem de agradecimento no HTML

    /* 
    
    exibirMensagemAgradecimento(`<strong>Agradecemos pela sua doação de R$${valorDoacao}!</strong><br>Seu apoio faz a diferença.`);

    */

    

    // Exibir a tela de cadastro do doador
    divDoacaoUnica.style.display = "none"
    divDoacaoCadastro.style.display = "block"
    pvalorDoacao.innerHTML = `Valor da doação única: <strong>R$${valorDoacao}</strong>`


}

function exibirMensagemAgradecimento(mensagem) {

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

    let divDoacaoCadastro = document.querySelector("#div-doacao-cadastro")
    divDoacaoCadastro.style.display = "none"

}

// Validando os dados do input

let email = document.querySelector("#cadastro-email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let nome = document.querySelector("#cadastro-nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let cpf = document.querySelector("#cadastro-cpf")
let labelCPF = document.querySelector("#labelCPF")
let validCPF = false

let telefone = document.querySelector("#cadastro-telefone")
let labelTel = document.querySelector("#labelTel")
let validTel = false

email.addEventListener('keyup', ()=>{

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1){
        email.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.267); border: solid thin white;')
        labelEmail.innerHTML = "* Insira um e-mail válido."
        validEmail = false
    } else {
        email.setAttribute('style', 'background-color: none;')
        labelEmail.innerHTML = ""
        validEmail = true
    }

})

nome.addEventListener('keyup', ()=>{

    if(nome.value.length<=0){
        nome.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.267); border: solid thin white;')
        labelNome.innerHTML = "* Insira um nome válido."
        validNome = false
    } else{
        nome.setAttribute('style', 'background-color: none;')
        labelNome.innerHTML = ""
        validNome = true
    }

})

cpf.addEventListener('keyup', ()=>{

    if(cpf.value.length < 11){
        cpf.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.267); border: solid thin white;')
        labelCPF.innerHTML = "* Insira um CPF válido."
        validCPF = false
    } else{
        cpf.setAttribute('style', 'background-color: none;')
        labelCPF.innerHTML = ""
        validCPF = true
    }

})

telefone.addEventListener('keyup', ()=>{

    if(telefone.value.length < 11){
        telefone.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.267); border: solid thin white;')
        labelTel.innerHTML = "* Insira um CPF válido."
        validTel = false
    } else{
        telefone.setAttribute('style', 'background-color: none;')
        labelTel.innerHTML = ""
        validTel = true
    }

})

// Enviar os dados válidos e o valor da doação do doador para o storage

function enviarCadastro() {

    if(validEmail && validEmail && validCPF && validTel) {

        let listaDoadores = JSON.parse(localStorage.getItem('listaDoadores') || '[]')
        let doacao = document.getElementById("outroValor-input").value

        listaDoadores.push({
            nomeDoador: nome.value,
            emailDoador: email.value,
            cpfDoador: cpf.value,
            telefoneDoador: telefone.value,
            valorDoado: doacao
        })

        localStorage.setItem('listaDoadores', JSON.stringify(listaDoadores))

    } else { alert("Preencha os campos corretamente!") }

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
