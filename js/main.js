
// ALTERAR O PERÍODO DE DOAÇÃO SELECIONADO: ÚNICO OU MENSAL
// ESCONDE A TELA DE CADASTRO E PAGAMENTO QUANDO SELECIONADO

let divDoacaoCadastro = document.querySelector("#div-doacao-cadastro")
let divDoacaoPgt = document.querySelector("#div-doacao-pagamento")

function selecionarPeriodo() {

    let periodoDoacao = document.querySelector("#periodo")

    // opcoesPeriodo recebe o >value< da opção selecionada definida no HTML
    let opcoesPeriodo = periodoDoacao.options[periodoDoacao.selectedIndex].value

    let divDoacaoMensal = document.querySelector("#div-doacao-mensal")
    let divDoacaoUnica = document.querySelector("#div-doacao-unica")

    if (opcoesPeriodo == "mensal") { 

        divDoacaoMensal.style.display = "block"
        divDoacaoUnica.style.display = "none"

    } else {

        divDoacaoMensal.style.display = "none"
        divDoacaoUnica.style.display = "block"

    }

    divDoacaoCadastro.style.display = "none"
    divDoacaoPgt.style.display = "none"
    btnVoltar.style.display = "none"
    
}


/*
  ENVIAR DOAÇÃO ÚNICA
*/

// FUNÇÃO PARA O INPUT RECEBER O VALOR SELECIONADO

function selecionarValor(valor) {
    
    document.getElementById("outroValor-input").value = valor;

}

// LER O VALOR DIGITADO NO INPUT
// VERIFICAR SE O VALOR DIGITADO É UM NÚMERO VÁLIDO
// ENVIAR PARA TELA DE CADASTRO DO DOADOR

let divDoacaoUnica = document.querySelector("#div-doacao-unica")
let pvalorDoacao = document.querySelector(".valor-doacao")

function enviarDoacao() {

    let valorDoacao = parseFloat(document.getElementById("outroValor-input").value);

    if (isNaN(valorDoacao) || valorDoacao <= 0) {
        alert("Por favor, insira um valor válido para a doação.");
        return;

    }

    divDoacaoUnica.style.display = "none"
    divDoacaoCadastro.style.display = "block"
    pvalorDoacao.innerHTML = `Valor da doação: <strong>R$${valorDoacao}</strong>`

}

/*
  ENVIAR DOAÇÃO MENSAL
*/

let opcoesMensal = document.getElementsByName("valorMensal")

function enviarDoacaoMensal() {

    let divDoacaoMensal = document.querySelector("#div-doacao-mensal")

    divDoacaoUnica.style.display = "none"
    divDoacaoCadastro.style.display = "block"
    divDoacaoMensal.style.display = "none"

    for (i = 0; i < opcoesMensal.length; i++) {
        
        if(opcoesMensal[i].checked){
            pvalorDoacao.innerHTML = `Valor da doação: <strong>R$${opcoesMensal[i].value}</strong>`
            document.getElementById("outroValor-input").value = opcoesMensal[i].value
        }

    }

}

//////////////////////////

// VALIDAR OS DADOS DO FORMULÁRIO
// ESCOLHER A FORMA DE PAGAMENTO
// ENVIAR OS DADOS COLETADOS PARA O STORAGE

//////////////////////////


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

let divPgtPix = document.querySelector("#pgtPix")
let divPgtCartao = document.querySelector("#pgtCartao")

function validarCadastro() {

    if(validEmail && validEmail && validCPF && validTel) {

        divDoacaoCadastro.style.display = "none"
        divDoacaoPgt.style.display = "block"

        divPgtPix.style.display = "none"
        divPgtCartao.style.display = "none"

        let textoPgt = document.querySelector("#recadoPix")
        textoPgt.innerHTML = `${nome.value}, scaneie o QR Code abaixo ou copie o código Pix para realizar o pagamento.`

    } else { alert("Preencha os campos corretamente!") }

}

let btnVoltar = document.querySelector("#voltarTela")

let divPix = document.querySelector("#pix-formaPgt")
divPix.addEventListener('click', ()=>{
    divPgtPix.style.display = "block"
    divPgtCartao.style.display = "none"
    btnVoltar.style.display = "block"
})

let divCartao = document.querySelector("#cartao-formaPgt")
divCartao.addEventListener('click', ()=>{
    divPgtPix.style.display = "none"
    divPgtCartao.style.display = "block"
    btnVoltar.style.display = "block"
    let recado = document.querySelector("#recado-cadastro")
    let link = document.querySelector("#pgtCartao-link")
    recado.innerHTML = `<span>Olá, ${nome.value}!</span> Aperte no link para realizar o seu pagamento.`
    link.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> Link`

})

function copiarCodigo(){

    Toastify({
        text: "Copiado para área de transferência", 
        gravity: "top",
        position: 'center',
        style: {
            background: '#ffff00',
            color: '#000000'
        },
        duration: 3000
    }).showToast();

    enviarCadastro()

}

function enviarCadastro() {

    let listaDoadores = JSON.parse(localStorage.getItem('listaDoadores') || '[]')
    let doacao = document.getElementById("outroValor-input").value
    let periodoDoacao = document.querySelector("#periodo")
    let periodo = periodoDoacao.options[periodoDoacao.selectedIndex].value

        listaDoadores.push({
            nomeDoador: nome.value,
            emailDoador: email.value,
            cpfDoador: cpf.value,
            telefoneDoador: telefone.value,
            tipoDoacao: periodo,
            valorDoado: doacao
        })

    localStorage.setItem('listaDoadores', JSON.stringify(listaDoadores))

    exibirMensagemAgradecimento()

    // ADICIONAR O NOVO VALOR DA DOAÇÃO NO ARRAY
    // PARA SOMAR COM OS VALORES ARMAZENADOS

    valores.push(Number(doacao))
    console.log(valores)

}

// 
// ALTERAR O VALOR ACUMULADO PARA EXIBIR NO SECTION 2
//

let valorTotal = document.querySelector("#quantDoacoes")

const doacoes = JSON.parse(localStorage.getItem('listaDoadores'))
const valores = []
doacoes.forEach(function valor(doacao){
    valores.push(Number(doacao.valorDoado))
})
        
let somaDoacoes = 0
for(var i = 0; i<valores.length; i++){
    somaDoacoes+=valores[i]
}
        
valorTotal.innerHTML = `Recebemos ${somaDoacoes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>em doações.`

//////////////////

// REINICIAR A DOAÇÃO AO CLICAR O BOTÃO
// EXIBIR MENSAGEM DE AGRADECIMENTO NO FINAL DA TRANSIÇÃO

btnVoltar.addEventListener('click', ()=>{
    window.location.reload();
})

function exibirMensagemAgradecimento() {

    Toastify({
        text: "Agradecemos sua doação! Seu apoio faz a diferença", 
        gravity: "top",
        position: 'center',
        style: {
            background: '#AAFF00',
            color: '#000000'
        },
        duration: 3000
    }).showToast();


}

// EXIBIR O CAMPO DE PREENCHIMENTO DE VOLUNTÁRIOS
// ARMAZENAR DADOS COLETADOS NO STORAGE

function sejaVoluntario() {
    (async () => {
        const { value: formValues } = await Swal.fire({
            title: "Seja um voluntário",
            html: `
                Entraremos em contato com você
                <input id="nome" class="swal2-input" placeholder = "Seu nome">
                <input id="email" class="swal2-input" placeholder = "Seu e-mail">
            `,
            confirmButtonText: "ENVIAR",
            confirmButtonColor: "#FFFF00",
            showCloseButton: true,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById("nome").value,
                document.getElementById("email").value
              ];
            }
          });
          if (formValues) {
            enviarEmailVoluntario(formValues[0], formValues[1])
            Toastify({
                text: `${formValues[0]}, seu cadastro foi enviado com sucesso!`, 
                gravity: "top",
                position: 'center',
                style: {
                    background: '#AAFF00',
                    color: '#000000'
                },
                duration: 3000
            }).showToast();
          }
      })()
}

function enviarEmailVoluntario(nome, email) {
    let listaVoluntarios = JSON.parse(localStorage.getItem('listaVoluntarios') || '[]')
        listaVoluntarios.push({
            nomeVoluntario: nome,
            emailVoluntario: email
        })
    localStorage.setItem('listaVoluntarios', JSON.stringify(listaVoluntarios))

}