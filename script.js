var btn = window.document.getElementById('b_enviar')

function enviar() {
    const inputNome = document.querySelector('.nome_form');
    var nome = inputNome.value
    nome.trim()
    const inputEmail = document.querySelector('.email_form');
    var email = inputEmail.value
    email.trim()
    const inputTelefone = document.querySelector('.telefone_form');
    var telefone = inputTelefone.value
    telefone.trim()
    const inputProduto = document.querySelector('.produto_form');
    var produto = inputProduto.value
    produto.trim()
    const selectMarca = document.querySelector('.select_marca');
    var marca = selectMarca.value
    const areaMensagem = document.querySelector('.mensagem_form');
    var mensagem = areaMensagem.value
    mensagem.trim()

    if (nome.length >= 6 && isNaN(nome)) {
        nomeValid = true

    } else {
        alert("Nome inválido.")
        inputNome.value = ''
    }

    if (email.includes("@") && email.includes(".") && email.length >=8 && email.includes(" ") == false) {
        emailValid = true;

    } else {
        if (email != '') { 
            alert("Email inválido.")
            inputEmail.value = ''
        }
    }

    if (isNaN(telefone) == false && telefone.length >= 12 && telefone.includes(" ") == false) {
        numeroValid = true
        
                
    } else {
        alert("Telefone inválido.")
        inputTelefone.value = ''
    }
    
    if (nomeValid && emailValid && numeroValid && produto != "" && marca != "" && mensagem != "") {
        alert(`Ok ${nome}! Sua mensagem foi enviada com sucesso!\nConte conosco sempre que precisar :)`)
        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
        inputProduto.value = '';
        selectMarca.value = '';
        areaMensagem.value = '';
        window.location.href = "index.html";

    }

}
